import amqp from "amqplib/callback_api.js";
import { runScheduling } from './scheduler.js';

const host = process.env.RABBITMQ_HOST || "rabbitmq";
const port = process.env.RABBITMQ_PORT || 5672;

let _connection: amqp.Connection | null = null;
let _channel: amqp.ConfirmChannel | null = null;

export default async function startConsumer(): Promise<void> {
    return new Promise(async (resolve, reject) => {
        console.log('[AMQP] Attempting to connect to RabbitMQ...');
        amqp.connect(`amqp://${host}:${port}`, (connErr: any, connection: any) => {
            if (connErr) {
                _connection = null;
                _channel = null;
                console.error("[AMQP] Connection error:", connErr.message);
                return reject(connErr);
            }
            _connection = connection;

            connection.on("error", (err: any) => {
                console.error("[AMQP] Connection error:", err.message);
                _connection = null;
                _channel = null;
            });
            connection.on("close", () => {
                console.log("[AMQP] Connection closed");
                _connection = null;
                _channel = null;
            });

            connection.createConfirmChannel((channErr: any, channel: any) => {
                if (channErr) reject(channErr);
                channel.on("error", (err: any) => {
                    console.error("[AMQP] channel error", err.message);
                    reject(err);
                });
                channel.on("close", () => {
                    console.log("[AMQP] channel closed");
                });
                _channel = channel;

                const queue = 'tasks_queue';

                channel.assertQueue(queue, {
                    durable: true
                });

                console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

                channel.consume(queue, async (msg: amqp.ConsumeMessage | null) => {
                    if (msg === null) {
                        console.warn("[AMQP] Consumer received null message. Channel might be closing.");
                        return;
                    }

                    try {
                        const payload = JSON.parse(msg.content.toString());
                        console.log(" [x] Received payload:", payload.id);

                        await runScheduling(connection, payload.id);

                        channel.ackAll();

                        setTimeout(() => channel.checkQueue(queue, (err: any, ok: any) => {
                            if (ok && ok.messageCount === 0) {
                              console.log(" [x] Queue empty. Closing consumer.");
                              channel.close();
                              connection.close();
                            }
                          }), 3000);
                    } catch (e) {
                        console.error("[AMQP] Error processing message:", e);
                        channel.nackAll();
                        reject(e);
                    }
                }, {
                    noAck: false
                });
            });

            resolve();
        })
    });
}

export async function checkHealth(): Promise<boolean> {
    let rabbitmqOk = false;
    if (_connection && _channel) {
        try {
            _channel.assertQueue('', { exclusive: true, durable: false, autoDelete: true });
            rabbitmqOk = true;
        } catch (e) {
            console.error("[HealthCheck] RabbitMQ health check failed:", e);
            rabbitmqOk = false;
        }
    }
    return rabbitmqOk
}

export async function stopConsumer(): Promise<void> {
    console.log("[AMQP] Initiating shutdown...");
    if (_channel) {
        try {
            _channel.close((err => console.log(err)));
            console.log("[AMQP] Channel closed.");
        } catch (e) {
            console.error("[AMQP] Error closing channel:", e);
        }
    }
    if (_connection) {
        try {
            _connection.close();
            console.log("[AMQP] Connection closed.");
        } catch (e) {
            console.error("[AMQP] Error closing connection:", e);
        }
    }
    console.log("[AMQP] Shutdown complete.");
}