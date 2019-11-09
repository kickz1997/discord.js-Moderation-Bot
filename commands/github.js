const Discord = require('discord.js')

module.exports.run = async (client, message, msg, args) => {
  
    let member = message.author
  
  let something = new Discord.RichEmbed()
  .setTitle("Invite for the bot!")
  .setColor("RANDOM")
  .setDescription("This command sends you a dm with a link to My Creator's First Repo!")
  .addField("Here is my Creator's first GitHub!", "Your GitHub Link here!")
  .setFooter("Whatever you want here!")
  
  message.delete();
  
  
  message.reply(":mailbox_with_mail: I have dm you the link of my Creator's First Repo!").then(msg => {msg.delete(10000)})
  member.send(something)
}


module.exports.help = {
"name": "github"
}
