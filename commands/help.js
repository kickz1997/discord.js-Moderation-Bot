//type `const Discord = require('discord.js)'`
const Discord = require('discord.js')

//then type `module.exports.run()` under here, lol. sorry delete () ok, its just like a client.on event, (space), then type `= async (client, message, args)` async "syncs in all the values from all the files", then space + `=> {`
module.exports.run = async (client, message, msg, args) => {
  
  // Most people send their commands/help thing in dms, so if you want to do that you type `let <whatever> = message.author`, then when you send it you type, `member.send(<whatever>)`
  let member = message.author
  
  // When you get better at discord.js you use json, but for now were just using js
  //so you want to make a embed using the text `<let | const> <embed-name> = new Discord.RichEmbed()`
  // So if you'd like to set your embed to a color, most of the time I use a way that sets it random, which is `.setColor("RANDOM")`
  // Alos in the embeds you can set footers, Discord.js embeds can also set the timestamp the message was created at the footer, you cant link anything in the footer, theres also no markdown too.
  let something = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle("Testing Bot")
  .setDescription("**Commands**")
  .addField("`/ban <@user> <reason>`", "Ban members using this command.\n(Only users with the `BAN_MEMBERS` permission can use it.)")
  .addField("`/kick <@user> <reason>`", "Kicks member thats mentionted, if kick'able.\n(Only users with the `KICK_MEMBERS` permission can use it.)")
  .addField("`/mute <@user> <time> <reason>`", "Mutes member thats mentioned, if mute'able.\n(Only users with the `ADMINISTRATOR` permission can use it)")
  .addField("`/unmute`", "Un-mutes member thats mentioned, if un-mute'able.\n(Only users with the `ADMINISTRATOR` permission can use it)")
  .addField("`/ping`", "Yours and the botts Latency.")
  .addField("`/eval`", "Bot owner only Command. Eval anything (almost everything).")
  .addField("`/dm`", "Bot owner can only access this command!")
  .addField("`/warn <@user> <@reason>`", "Warn a user in your server.\n(Only users with the `MANAGE_MESSAGES` permission can use it.)")
  .addField("`/botinfo`","Shows the Bot information")
  .addField("`/invite`","Sends the invite in DM's!")
  .setFooter("This is just a testing bot for now!")
  .setTimestamp();
  
  message.delete();
  
  //my bad. you cant send it if there is no send event, which is `message.channel.send(something)` type under here, its a value so theres not qoutes
  message.reply(":mailbox_with_mail: You have been DM'ed all of our commands! Why not check it out?").then(msg => {msg.delete(10000)})
  member.send(something)
}

//so we need to name the command. Type under here `module.exports.help = {}`, then type in the brackets `"name": "<command-name>"`
module.exports.help = {
"name": "help"
}
