import amqp from "amqplib/callback_api.js";

export default function startConsumer() {
    amqp.connect(process.env.AMQP_URL!, (connErr, connection) => {
        if (connErr) throw connErr;

        connection.on("error", err => {
            console.error("[AMQP] connection error", err.message);
        });
        connection.on("close", () => {
            console.log("[AMQP] connection closed");
        });

        connection.createChannel((channErr, channel) => {
            if (channErr) throw channErr;
            channel.on("error", err => {
                console.error("[AMQP] channel error", err.message);
            });
            channel.on("close", () => {
                console.log("[AMQP] channel closed");
            });
            const queue = 'tasks';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
            channel.consume(queue, msg => {
                console.log(" [x] Received %s", msg?.content);
                setTimeout(() => {
                    console.log(" [x] Done");
                    channel.ack(msg!);
                }, 1000);
            }, {
                noAck: false
            });
        });
    });
}