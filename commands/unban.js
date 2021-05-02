const Discord = require('discord.js')

module.exports.run = async (client, message, args, guild) => {
  
  let userid = message.mentions.users.first().id || args[0]
  if(!userid) return message.reply('error?')
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('you don\'t have permission to use this command.')
  const guildbans = await message.guild.fetchBans();
  if(!guildbans.get(userid)) return message.reply('this user isn\'t banned.')
  // Unban a user by ID (or with a user/guild member object) 
  const target = userid
  guild.unban(target)
    .then(user => message.channel.send(`Unbanned ${user.username} from ${guild}`))
    .catch(console.error);
  }
module.exports.help = {
  "name": "unban"
}
