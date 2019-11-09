const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
      message.delete().catch(O_o=>{});
  
  if(message.author.id === "Your ID Here!") {
   const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
}


module.exports.help = {
  name: "say"
}
