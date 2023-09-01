import redis from "redis";
const util = require('util');

let get = util.promisify(client.get).bind(client);

const client = redis.createClient();

client.on('error', err => console.log(`Redis client not connected to the server: ${err}`));
client.on('ready', console.log("Redis client connected to the server"));

function setNewSchool(schoolName, value){
  client.set({schoolName, value, (err, reply) => {
    redis.print(`Reply: ${reply}`);
}

async function displaySchoolValue(schoolName){
  const reply = await get(schoolName);
  console.log(reply);
}

(async () => {
  await displaySchoolValue("Holberton");
  setNewSchool("HolbertonSanFrancisco", "100");
  await displaySchoolValue("HolbertonSanFrancisco");
})();
