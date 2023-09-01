import redis from "redis";

const suscriber = redis.createClient();
publisher.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
publisher.on('ready', console.log("Redis client connected to the server"));

publisher.connect();
function publishMessage(message, time){
  setTimeout(function() {console.log("About to send MESSAGE");
                        publisher.publish('holberton school channel', message);}, time);
}
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);