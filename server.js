onst Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, config, token } = require('./config.json');
const Enmap = require('enmap');
const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.sendStatus(200);
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
})

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(client.guilds.size + " Servers!" , {type:"LISTENING", url:"https://discordapp.com/"})
  });

client.on('message', async (msg, message, channel) => {
  
  if (msg.content === '/ping') {
  msg.reply('Ping?').then(m => m.edit(`${msg.author}, Pong! Latency is ${m.createdTimestamp - msg.createdTimestamp}ms. API Latency is ${Math.round(client.ping)} ms`))
  }
  
  // if (msg.content === './<command>') {
 // code here
// }
      
  
  
  
});

client.on("message", (message, args) => {
    if (message.content.startsWith("/ban")) {

        // Easy way to get member object though mentions.
        var member = message.mentions.members.first();
        // ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ");
        }).catch((error) => {
             // Failmessage
           message.channel.send("Error:\n```fix\n" + error + "\n```");
        });
    }
 if (message.content.startsWith("/kick")) {
        // Easy way to get member object though mentions.
        var member = message.mentions.members.first();
        // ban
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch((error) => {
             // Failmessage
          message.channel.send("Error:\n```fix\n" + error + "\n```");
        });
    }
}); 



client.on("message", async message => {
    
  if (message.author.bot) return;
  //disable DM
  if (message.channel.dm === "dm") return;
  
//variables to work bot
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if (!message.content.startsWith(prefix)) return;
let commandfile = client.commands.get(cmd.slice(prefix.length));
if (commandfile) commandfile.run(client, message, args);
});

client.login(token);
