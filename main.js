// Response for Uptime Robot
const http = require("http");
http
  .createServer(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Discord bot は 動いています\n");
  })
  .listen(3000);

// Discord bot implements
const Discord = require("discord.js");
const client = new Discord.Client();
const Eris = require("eris");
const bot = new Eris(process.env.DISCORD_BOT_TOKEN);

var args = 0;
var command = 0;

const prefix = "$";
var setroomid = null; // DefaultRoomID
var ReactuserList = []; // リアクションしたユーザー

var RcheckOn = false;

client.on("ready", message => {
  client.user.setActivity("川らない日々", { type: "LISTENING" });
  //  console.log(bot.channelGuildMap);
  console.log("入っているサーバー:");
  var ServerList = client.guilds.cache.map(a => a.name).join(" / ");
  console.log("[ " + ServerList + " ]");
  console.log("Ready!");
});

bot.on("voiceChannelJoin", (member, newChannel) => {
  const textChannel = newChannel.guild.channels.find(
    channel => (channel.type === 0, channel.name === "spam")
  );

  if (textChannel === undefined) {
    return;
  }

  if (member.nick === null) {
    bot.createMessage(
      textChannel.id,
      `🔹 [ Join ]\n　　　**${member.username}**： **${newChannel.name}**`
    );
  } else {
    bot.createMessage(
      textChannel.id,
      `🔹 [ Join ]\n　　　**${member.nick}**： **${newChannel.name}**`
    );
  }
});

bot.on("voiceChannelLeave", (member, oldChannel) => {
  const textChannel = oldChannel.guild.channels.find(
    channel => (channel.type === 0, channel.name === "spam")
  );

  if (textChannel === undefined) {
    return;
  }

  if (member.nick === null) {
    bot.createMessage(
      textChannel.id,
      `	💤 [ Leave ]\n　　　**${member.username}**`
    );
  } else {
    bot.createMessage(textChannel.id, `	💤 [ Leave ]\n　　　**${member.nick}**`);
  }
});

bot.on("voiceChannelSwitch", (member, newChannel, oldChannel) => {
  const textChannel = oldChannel.guild.channels.find(
    channel => (channel.type === 0, channel.name === "spam")
  );

  if (textChannel === undefined) {
    return;
  }

  if (member.nick === null) {
    bot.createMessage(
      textChannel.id,
      `🔸 [ Move ]\n　　　**${member.username}**： **${oldChannel.name}**  >>  **${newChannel.id}**`
    );
  } else {
    bot.createMessage(
      textChannel.id,
      `🔸 [ Move ]\n　　　**${member.nick}**： **${oldChannel.name}**  >>  **${newChannel.id}**`
    );
  }
});

client.on("message", async message => {
  const re = new RegExp(
    "https://discordapp.com/channels/([0-9]{18})/([0-9]{18})/([0-9]{18})"
  );
  const results = message.content.match(re);
  if (!results) {
    return;
  }

  const sendch_id = message.channel.id;

  console.log(`${message.author.tag} to cite [${message.content}]`);
  const guild_id = results[1];
  const channel_id = results[2];
  const message_id = results[3];

  const channel = client.channels.cache.get(channel_id);
  if (!channel) {
    return;
  }


  channel.messages.fetch(message_id);

  const cEmbed = new Discord.MessageEmbed()
    .setAuthor(
      `${message.member.displayName}`,
      `${message.member.user.displayAvatarURL()}`
    )
    .setDescription(`${message.content}`)
    .setImage(`${message.attachments.map(attachment => attachment.url)[0]}`)
    .setFooter(
      `${message.guild.name} #${message.channel.name}`,
      `${message.guild.iconURL()}`
    )
    .setTimestamp(`${message.createdTimestamp}`);

  client.channels.cache.get(sendch_id).send(cEmbed);

});

// BotをDiscordに接続
bot.connect();

client.on("message", message => {
  // ----------------------------------------------------------------------------------------------------------- //

  if (message.author.bot) return; // bot自身の発言は無視

  if (message.content.includes("everyone")) return; // everyoneを無視

  // 敗北者
  if (message.content.includes("敗北者")) {
    message.channel.send(
      "ハァ...ハァ...敗北者...?\n取り消せよ...!!今の言葉...!!"
    );
    return;
  }

  // mention
  if (message.mentions.has(client.user)) {
    message.reply("問題が発生した時は、Noko#2123 に連絡してください。");
    return;
  }

  //Emoji react
  if (message.channel.type == "dm") {
    message.channel.send("foeiwwfjewoawp")
      .then(message.react("🔼"));
    console.log("aaa");
    return;
  }
  
  //つぎ
  if(command === "te"){
    let user = client.users.cache.get(message.author.id);
    user.send("aiueo")
    .then(async message => {
      
      await message.react("🔼")
   
    });
    console.log("BBB");
    return;
  }

  if (!message.content.startsWith(prefix)) return; //prefixがついてないコマンドを無視

  let msg = message.content.toUpperCase();
  let sender = message.author;

  let args = message.content
    .slice(prefix.length)
    .trim()
    .split(` `);
  let cmd = args.shift().toLowerCase();

  try {
    delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    console.log(e.stack);
  } finally {
    console.log(`${message.author.tag} ran the command ${cmd}`);
  }

  if (message.content.startsWith("$")) {
    args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    command = args.shift().toLowerCase();
  } else {
    args = 0;
    command = 0;
  }

  //ResetRoom
  if (command === "resetroom") {
    setroomid = null;
    message.channel.send("ルームIDの固定を解除しました");
    return;
  }

  //Tenhou Set Room ID

  var roomrep = message.content.replace(/^\$setroom /, "");

  if (command === "setroom") {
    if (
      roomrep >= 1000 &&
      roomrep <= 7999 &&
      roomrep.length === 4 && //文字数指定
      /\d{4}/.test(roomrep) && //正規表現(0x1F1Fみたいなのはじくやつ)
      Number.isInteger(Number(roomrep)) //自然数のみのやつ？しらんけど
    ) {
      setroomid = roomrep;
      message.channel.send("ルームIDを " + setroomid + " に固定しました");
      return;
    } else {
      message.channel.send(
        "ルームIDは 半角数字で `1000 ~ 7999` の中から指定してください"
      );
      return;
    }
  }

  //ランダム
  var roomidMIN = 1000;
  var roomidMAX = 7999;

  var roomid =
    Math.floor(Math.random() * (roomidMAX + 1 - roomidMIN)) + roomidMIN;

  //Tenhou room
  if (command === "room") {
    if (setroomid == null) {
      message.channel.send(
        "ルームIDは " +
          roomid +
          " です\n固定する場合は、`$setroom " +
          roomid +
          "` と入力してください\nhttps://tenhou.net/0/?" +
          roomid
      );
      return;
    } else {
      message.channel.send(
        "ルームIDは " +
          setroomid +
          " で固定中です\n固定を解除する場合は、`$resetroom` と入力してください"
      );
      message.channel.send("https://tenhou.net/0/?" + setroomid);
      return;
    }
  }

  //確認用
  if (command === "id") {
    message.channel.send("roomid: " + roomid + " | setroomid: " + setroomid);
    return;
  }

  //bosyu

  if (command === "bosyu" && !RcheckOn) {
    message.channel.send("`$boend`で募集を終了します");
    if (args[0] === undefined) {
      var bosyuTitle = "Users";
    } else {
      var bosyuTitle = args[0];
    }
    var RListOld = new Discord.MessageEmbed().setTitle(bosyuTitle);
    RcheckOn = true;
    message.channel.send(RListOld).then(message => {
      message.react("🔼");
      var messageId = 0;

      function addo(reaction, user) {
        if (user.bot) {
          messageId = message.id;
          return;
        }
        if (!user.bot && RcheckOn && reaction.message.id === messageId) {
          ReactuserList.push(user.username);
          var RListB = ReactuserList.join("\n");
          var RListNew = new Discord.MessageEmbed()
            .setTitle(bosyuTitle)
            .setDescription(RListB);
          message.edit(RListNew);
        }
      }

      function remobe(reaction, user) {
        if (RcheckOn && reaction.message.id === messageId) {
          ReactuserList.splice(ReactuserList.indexOf(user.username), "1");
          var RListB = ReactuserList.join("\n");
          var RListNew = new Discord.MessageEmbed()
            .setTitle(bosyuTitle)
            .setDescription(RListB);
          message.edit(RListNew);
        }
      }

      function stpo(message) {
        if (command === "boend") {
          if (message.author.bot) return;
          RcheckOn = false;
          ReactuserList.length = 0;
          client.removeListener("messageReactionAdd", addo);
          client.removeListener("messageReactionRemove", remobe);
          client.removeListener("message", stpo);
          message.channel.send("募集を停止します");
        }
      }

      client.on("messageReactionAdd", addo);

      client.on("messageReactionRemove", remobe);

      client.on("message", stpo);
    });
    return;
  }

  // ----------------------------------------------------------------------------------------------------------- //
});

if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("please set ENV: DISCORD_BOT_TOKEN");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);
