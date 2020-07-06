const Discord = require("discord.js");

  const Embednkstamp = new Discord.MessageEmbed()
    .setTitle("定型文・絵文字")
    .addField("$えて眠れ", "<:aaa:663688535236149271>")
    .addField("$suicide", "<:thinkingpistol:663690728106360842>")
    .addField("$usebrain", "<:usebrain:663690746192461824>")
    .addField("$kusoga", "クソが")
    .addField("$kawa", "ﾉﾘ 塗って ﾉﾘ ﾉﾘ")
    .setColor(8011653);

exports.run = (client, message, args) => {
    message.channel.send(Embednkstamp);
    return;
};
