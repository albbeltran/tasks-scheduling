import amqp from "amqplib/callback_api.js";

export default async function startConsumer() {
    amqp.connect(process.env.AMQP_URL!, function(connErr, connection) {
      if (connErr) throw connErr;

      connection.createChannel(function(channErr, channel) {
        if(channErr) throw channErr;
        channel.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        channel.on("close", function() {
            console.log("[AMQP] channel closed");
        });
        const queue = 'tasks';
    
        channel.assertQueue(queue, {
          durable: false
        });
  
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function(msg) {
          console.log(" [x] Received %s", msg?.content);
        }, {
            noAck: true
        });
      });
    });
  }