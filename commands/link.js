const Discord = require("discord.js");


 const Embednklink = new Discord.MessageEmbed()
    .setTitle("リンク集")
    .addField(
      "口臭警部 麻雀部 season 3",
      "[Here](https://docs.google.com/spreadsheets/d/1yZkRn0KHqJjHKw3d3LSUEJCZt2WegybeTrMSfjyu0V0/edit?usp=sharing)"
    )
    .addField(
      "Ultimate OX",
      "[Here](https://docs.google.com/spreadsheets/d/1N5RcAbM8mnGes76pdStNCrZF7ER5d-JgMyAr1Sr_irY/edit?usp=sharing)"
    )
    .addField(
      "制限しりとり",
      "[Here](https://docs.google.com/spreadsheets/d/1Y7I7XkcByjuFubB8giDKRaMe-yvUhRRV-7v1usx5WxE/edit?usp=sharing)"
    )
    .addField(
      "pp Calculator (ver.1.1)",
      "[Here](https://docs.google.com/spreadsheets/d/1_oLAI7-Ql53nNhpA4AyiqyIxJdZfUImUV2sXV9aE0yk/edit?usp=sharing)"
    )
    .addField(
      "helloSpreadSheet",
      "[ここ](https://docs.google.com/spreadsheets/d/1sSqLnk_AuNj03O2hHhwSuQaX_tsDKHpby1wDdsNC2k4/edit#gid=0)[を](https://ja.uncyclopedia.info/wiki/%E3%82%92)[Here](https://docs.google.com/spreadsheets/d/1sSqLnk_AuNj03O2hHhwSuQaX_tsDKHpby1wDdsNC2k4/edit#gid=0)！"
    )
    .addField("BoardGameArena", "[Here](https://ja.boardgamearena.com/)")
    .setColor(8011653);

exports.run = (client, message, args) => {
    message.channel.send(Embednklink);
    return;
};
