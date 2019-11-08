const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("I am sorry but you cannot access this command!")
  
  let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
  
  message.channel.send(`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
  
  
  message.delete().catch(O_o => {});

    }

module.exports.help = {
  "name": "uptime"
}
