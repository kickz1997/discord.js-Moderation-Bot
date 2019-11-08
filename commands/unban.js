const Discord = require('discord.js')

module.exports.run = async (client, message, args, guild) => {
  
  let userid = message.mentions.users.first().id
  if(!userid) return message.reply('error?')
  
  // Unban a user by ID (or with a user/guild member object)
guild.unban(userid)
  .then(user => message.channel.send(`Unbanned ${user.username} from ${guild}`))
  .catch(console.error);
}
module.exports.help = {
  "name": "unban"
}
