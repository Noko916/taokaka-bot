const Discord = require("discord.js");

const Embednkhelp = new Discord.MessageEmbed()

  .setColor(8011653)
  .setTitle("ヘルプ")
  .setDescription(
    "通話に入退出したユーザーを #spam で通知します\n#spam という名前のチャンネルがない場合は通知しません"
  )
  .addFields(
    { name: "$nkcommand", value: "コマンド一覧を表示します" },
    { name: "$nkstamp", value: "定型文・絵文字一覧を表示します" }
  )
  .setFooter("チャットに「敗北者」という文字を混ぜると...?");

exports.run = (client, message, args) => {
  message.channel.send(Embednkhelp);
  return;
};
