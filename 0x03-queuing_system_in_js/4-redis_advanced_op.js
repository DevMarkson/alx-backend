var redis = require("redis"),
client = redis.createClient();

client
  .on("error", (error) => {
    if (error) console.log(`Redis client not connected to the server: ${err}`);
  })
  .on("ready", () => {
    console.log("Redis client connected to the server");
  });

const hashkey = "HolbertonSchools";

const values = {
  'Portland': 50,
  'Seattle': 80,
  'New York': 20,
  'Bogota': 20,
  'Cali': 40,
  'Paris': 2,
}
for (const [key, value] of Object.entries(values)) {
  client.hset(name, key, value, (err, reply) => {
    redis.print(`Reply: ${reply}`));
}
client.hGetAll(name, (err, reply) => {console.log(reply)});
