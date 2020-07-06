const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel
    .send("...............🚗......")
    .then(msg => {
      setTimeout(function() {
        msg.edit("............🚗.........");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("........🚗............");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit(".....🚗...............");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("..🚗..................");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("🚗....................");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("😮....🚗..............");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit(".😧..🚗......................");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("..:tired_face:.:red_car:......................");
      }, 1200);
    })
    .then(msg => {
      setTimeout(function() {
        msg.edit("...:ghost::red_car:......................");
      }, 1200);
    });
  return;
};
