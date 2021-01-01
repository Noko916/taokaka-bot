const Discord = require("discord.js");
const ms      = require("ms");
const db      = require("quick.db");

exports.run = (client, message, args) => {

    let remindtime = args[0];
    let reason     = args.slice(1).join(" ");

    if (!remindtime) return message.reply(":x: 時間を入力してください `例: .remind 10s aiueo`");
    if (!reason)     return message.reply(":x: 内容を入力してください `例: .remind 10s aiueo`");

    db.set(`remind.${message.author.id}`, Date.now() + ms(remindtime))

    message.channel.send("OK! `" + remindtime + "` 後に `" + reason + "` をお知らせします");

    const interval = setInterval(function () {

        if (Date.now() > db.fetch(`remind.${message.author.id}`)) {
            db.delete(`remind.${message.author.id}`);
            message.channel.send(`**Remind: **[${message.author}]\n> ${reason}`)
                           .catch(e => console.log(e));
            clearInterval(interval);
        }

    }, 1000);

    return;
};