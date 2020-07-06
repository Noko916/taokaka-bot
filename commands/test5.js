const Discord = require("discord.js");

exports.run = (client, message, args) => {
  
  let user = client.users.cache.get(message.author.id);
  
  
  user.send("aiueo").then(async message => {
    
    await message.react("🔼");
    
  });
  
  console.log("BBB");
  
  
  return;
};
