const Discord = require('discord.js')

module.exports.run = async (client, message, msg, args) => {

 let embed = new Discord.RichEmbed()
 .setTitle("Test")
 .setColor("RANDOM")
 .setDescription("This command tests the bot to see if it is onlin! If it is not working then it would not respond!")
 .addField("Test","Hello, I am online and working! There is no need to test me!")
 .setFooter("Whatever Message as footer you want!")
 message.channel.send(embed)
  message.delete()
}

module.exports.help = {
  "name": "test"
}
 
