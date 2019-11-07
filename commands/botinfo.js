const Discord = require('discord.js')


module.exports.run = async (client, message, msg, args) => {
  
    let member = message.author
  
  
  let embed = new Discord.RichEmbed()
  .setTitle("Bot Information")
    .setColor("RANDOM")
    .setDescription("Shows the bot's information")
    .addField("Developer/Owner:","Itz_Someone!#5148")
    .addField("Date Released:","N/A (still to come!)")
    .addField("Language Created in:","Was Created in discord.js")
    .addField("Bot is currently in:", client.guilds.size + " Servers!")
    .addField("Members that are currenlty using the bot:", client.users.size + " Members" )
    .setFooter("Just a Testing bot that is all!")
    message.channel.send(embed)
  }


module.exports.help = {
"name": "botinfo"
}
