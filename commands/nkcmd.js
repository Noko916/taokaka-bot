const Discord = require("discord.js");

  const Embednkcmd = new Discord.MessageEmbed()
    .setTitle("コマンド")
    .addField("$rps [r/p/s]", "BOTとじゃんけん勝負！")
    .addField("$cry", "Dragonforce - Cry Thunder を歌います")
    .addField("$seasons", "Dragonforce - Seasons を歌います")
    .addField("$car", "car")
    .addField("$room", "天鳳の部屋を生成します")
    .addField("$setroom", "天鳳のルームIDを固定します")
    .addField("$resetroom", "ルームIDの固定を解除します")
    .addField("$link", "リンク集を表示します")
    .addField("$roll [?]d[??]", "[?]d[??] のダイスを振ります")
    .addField("$nkcmd", "コマンド一覧を表示します")
    .addField("$nkstamp", "定型文・絵文字一覧を表示します")
    .addField("$bosyu <Title>", "募集をします タイトルは自由です")
    .addField("$boend", "募集を終了します")
    .setColor(8011653);

exports.run = (client, message, args) => {
    message.channel.send(Embednkcmd);
    return;
};
