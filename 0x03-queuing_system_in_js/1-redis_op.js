import redis from "redis";

const client = redis.createClient();
client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('ready', console.log("Redis client connected to the server"));

function setNewSchool(schoolName, value){
  client.set(schoolName, value, redis.print);
  client.get(schoolName, redis.print);
}

function displaySchoolValue(schoolName){
  client.get(schoolName, (err, reply) => {
    console.log(reply);
  });
}

displaySchoolValue("Holberton");
setNewSchool("HolbertonSanFrancisco", "100");
displaySchoolValue("HolbertonSanFrancisco");
