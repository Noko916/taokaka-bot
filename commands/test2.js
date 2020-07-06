const Discord = require("discord.js");

exports.run = (client, message, args) => {

  
  
message.channel.send('m1')
.then((msg)=> {
  setTimeout(function(){
    msg.edit('m2');
  }, 1200)
}); 
  
  
  
    return;
};
