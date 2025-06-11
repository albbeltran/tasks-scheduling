import prisma from './lib/prisma.js';
import amqp from "amqplib/callback_api.js";

import { type tasks, task_status } from './generated/prisma/client';

export interface TaskForScheduling extends tasks {
  remaining_time: number;
  is_completed: boolean;
}

export async function runScheduling(connection: amqp.Connection, newTaskId?: string): Promise<number> {
  console.log(`Starting SJF scheduling run (by taskId: ${newTaskId || 'N/A'})`);

  const allTasks = await prisma.tasks.findMany({
    where: {
      NOT: {
        status: {
          in: [task_status.completed, task_status.failed],
        },
      },
    },
    orderBy: {
      arrival_time: 'asc',
    },
  });

  if (allTasks.length === 0) {
    console.log('No tasks to schedule.');
    return 0;
  }

  const tasksForScheduling: TaskForScheduling[] = allTasks.map((task: tasks) => ({
    ...task,
    remaining_time: task.duration,
    is_completed: false,
  }));

  let currentTime = 0;
  let completedTasksCount = 0;
  let currentExecutionOrder = 1;

  const scheduledProcesses: {
    taskId: number;
    startedAt: Date;
    endedAt: Date;
    executionOrder: number;
  }[] = [];

  let availableTasks: TaskForScheduling[] = [];
  let unscheduledTasks = [...tasksForScheduling];

  while (completedTasksCount < tasksForScheduling.length) {
    unscheduledTasks = unscheduledTasks.filter(task => {
      if (task.arrival_time.getTime() <= currentTime * 1000 && !task.is_completed) {
        availableTasks.push(task);
        return false;
      }
      return true;
    });

    availableTasks.sort((a, b) => {
      if (a.duration === b.duration) {
        return a.arrival_time.getTime() - b.arrival_time.getTime();
      }
      return a.duration - b.duration;
    });

    if (availableTasks.length > 0) {
      const taskToExecute = availableTasks.shift();
      if (!taskToExecute) break;

      console.log(currentTime)

      const startedAt = new Date(currentTime * 1000);

      currentTime += taskToExecute.duration;
      taskToExecute.remaining_time = 0;
      taskToExecute.is_completed = true;

      const endedAt = new Date(currentTime * 1000);

      console.log(
        `Executing Task ${taskToExecute.id} (Duration: ${taskToExecute.duration}) from t=${startedAt.getSeconds()} to t=${endedAt.getSeconds()}`
      );

      scheduledProcesses.push({
        taskId: taskToExecute.id,
        startedAt: startedAt,
        endedAt: endedAt,
        executionOrder: currentExecutionOrder++,
      });
      completedTasksCount++;
    } else {
      if (unscheduledTasks.length > 0) {
        const nextArrivalTime = Math.min(...unscheduledTasks.map(task => task.arrival_time.getTime() / 1000));
        if (nextArrivalTime > currentTime) {
          currentTime = nextArrivalTime;
        } else {
          console.warn("Algorithm stuck: No available tasks, but nextArrivalTime is not in future.");
          break;
        }
      } else {
        break;
      }
    }
  }

  const newSchedulingRun = await prisma.scheduling_runs.create({
    data: {
      run_at: new Date(),
      description: `SJF for ${scheduledProcesses.length} tasks`,
      processes: {
        create: scheduledProcesses.map(process => ({
          task_id: process.taskId,
          started_at: process.startedAt,
          ended_at: process.endedAt,
          execution_order: process.executionOrder
        })),
      },
    },
  });

  await prisma.tasks.updateMany({
    where: {
      id: {
        in: scheduledProcesses.map(p => p.taskId),
      },
    },
    data: {
      status: 'completed'
    },
  });

  console.log(`SJF Scheduling run ${newSchedulingRun.id} completed.`);
  return newSchedulingRun.id;
}