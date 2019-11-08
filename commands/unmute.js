const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
  
if(message.member.roles.some(r=>["Rel Staff"].includes(r.name)) ) {
  
let role = message.guild.roles.find(r => r.name === "muted");

// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();
  
  if(!member) return message.reply("Could not find that user")
// Remove a role!
member.removeRole(role).catch(console.error);
  message.reply(`I have unmuted ${member} successfully!`)
  } else {
    message.reply("You do not have permissions to access this command!")
  }

};

module.exports.help = {
  name: "unmute"
}
