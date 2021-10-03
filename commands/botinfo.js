var fs = require('fs');
const Discord = require('discord.js')


module.exports.run = async (client, message, msg, args) => {
  message.channel.startTyping();
    let member = message.author
  
  
  let embed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("RANDOM")
    .setDescription("Bot information can be found below")
    .addField("Developer/Owner:","Itz_Someone!#5148")
    .addField("Date Released:","N/A (still to come!)")
    .addField("Bot is currently in:", client.guilds.size + " Servers!")
    .addField("Members that are currently using the bot:", client.users.size + " Members" )
    .setFooter("Just a Testing bot that is all!")
    message.channel.send(embed);
    message.channel.stopTyping();
  }

module.exports.help = {
"name": "botinfo"
}
