//type `const Discord = require('discord.js)'`
const Discord = require('discord.js')

//then type `module.exports.run()` under here, lol. sorry delete () ok, its just like a client.on event, (space), then type `= async (client, message, args)` async "syncs in all the values from all the files", then space + `=> {`
module.exports.run = async (client, message, msg, args) => {
  
  // Most people send their commands/help thing in dms, so if you want to do that you type `let <whatever> = message.author`, then when you send it you type, `member.send(<whatever>)`
  let member = message.author
  
  let something = new Discord.RichEmbed()
  .setTitle("Invite for the bot!")
  .setColor("RANDOM")
  .setDescription("This command sends you a dm with the invite")
  .addField("Here is the invite:", "Your bot invite here!")
  .setFooter("Thank you for Inviting me to your server!")
  
  message.delete();
  
  //my bad. you cant send it if there is no send event, which is `message.channel.send(something)` type under here, its a value so theres not qoutes
  message.reply(":mailbox_with_mail: I have dmed you the bot invite").then(msg => {msg.delete(10000)})
  member.send(something)
}

//so we need to name the command. Type under here `module.exports.help = {}`, then type in the brackets `"name": "<command-name>"`
module.exports.help = {
"name": "invite"
}
