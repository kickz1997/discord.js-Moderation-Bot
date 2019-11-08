const Discord = require('discord.js')

module.exports.run = async (client, message, msg, args) => {

  let embed = new Discord.RichEmbed()
  .setTitle("Test")
  .setColor('RANDOM")
  .setDescription("This command is to see if the bot is online! If it is not online then this command would not work!")
   .addField("Testing","Hello, I am online and working! There is no need to test me!")
    .setFooter("Thank You for testing the bot!")
     message.channel.send(embed)
  message.delete()
}

module.exports.help = {
  "name": "test"
}
