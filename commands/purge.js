const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient Permissions");
  if(!args[0]) return message.channel.send("Please provide a number of messages to be cleared!");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });

  let banEmbed = new Discord.RichEmbed()
      .setDescription("Cleared Messages")
      .setColor("#ff0400")
      .addField("Amount of Messages Cleared", args[0])
      .addField("Cleared By", `<@${message.author.id}> with ID: ${message.author.id}`)
      .addField("Cleared In", message.channel)
      .addField("Cleared on", message.createdAt)

  let clearChannel = message.guild.channels.find(`name`, "bot-logs")
  if (!clearChannel) return message.channel.send("Can't find log channel! Please create a channel called #bot-logs")
    
}

module.exports.help = {
  name: "purge"
}
