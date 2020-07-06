const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel
    .send("...............🚗......")
    .then(m => m.edit("............🚗........."))
    .then(m => m.edit("........🚗............"))
    .then(m => m.edit(".....🚗..............."))
    .then(m => m.edit("..🚗.................."))
    .then(m => m.edit("🚗...................."))
    .then(m => m.edit("😮....🚗.............."))
    .then(m => m.edit(".😧..🚗......................"))
    .then(m => m.edit("..:tired_face:.:red_car:......................"))
    .then(m => m.edit("...:ghost::red_car:......................"));
  return;
};
