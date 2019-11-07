const Discord = require("discord.js")
const { prefix } = require("/app/config.json");

module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o=>{});
    let user = message.mentions.members.first() || message.guild.members.get(args[0]);
    const dmtosend = args.slice(1).join(" ")
    user.send(dmtosend);
    
    message.channel.send("Message sent by " + message.author.tag)
  let senddmembed = new Discord.RichEmbed()
  .setDescription(`Send Dm command executed by ${message.author}`)
  .setColor("#000000")
  .addField("Message Sent To", user.user.tag) 
  .addField("Used In", message.channel)
  .setTimestamp();
  }

module.exports.help = {
  name: "dm"
}
