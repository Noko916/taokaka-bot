const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let replies = ["r", "p", "s"];
  let result = Math.floor(Math.random() * replies.length);

  let uReply = args[0];
  if (!uReply)
    return message.channel.send(
      `**$rps <?>**　と打ってください： \n\`r (グー) , p (パー) , s (チョキ)\``
    );
  if (!replies.includes(uReply))
    return message.channel.send(
      `この中からえらんでください：\n\`r (グー) , p (パー) , s (チョキ)\``
    );
  //rock
  else if (uReply === "r") {
    console.log(replies[result]);
    if (replies[result] === "r")
      return message.channel.send(
        "[YOU]   :right_facing_fist:  vs  :left_facing_fist:   [BOT]\n　　 引き分けで～～す"
      );
    if (replies[result] === "p")
      return message.channel.send(
        "[YOU]   :right_facing_fist:  vs  :raised_hand:   [BOT]\n　　 あなたの負けです"
      );
    else
      return message.channel.send(
        "[YOU]   :right_facing_fist:  vs  :metal:   [BOT]\n　　 あなたの勝ち！"
      );
  }

  //paper
  else if (uReply === "p") {
    console.log(replies[result]);
    if (replies[result] === "p")
      return message.channel.send(
        "[YOU]   :raised_back_of_hand:  vs  :raised_hand:   [BOT]\n　 引き分けで～～～す"
      );
    if (replies[result] === "s")
      return message.channel.send(
        "[YOU]   :raised_back_of_hand:  vs  :metal:   [BOT]\n　 あなたの負けで～す"
      );
    else
      return message.channel.send(
        "[YOU]   :raised_back_of_hand:  vs  :left_facing_fist:   [BOT]\n　 あなたの勝ちです！"
      );
  }

  //scissors
  else if (uReply === "s") {
    console.log(uReply);
    console.log(replies[result]);
    if (replies[result] === "s")
      return message.channel.send(
        "[YOU]   :v:  vs  :metal:   [BOT]\n　 引き分けで～～～す"
      );
    if (replies[result] === "r")
      return message.channel.send(
        "[YOU]   :v:  vs  :left_facing_fist:   [BOT]\n　 あなたの負けで～す"
      );
    else
      return message.channel.send(
        "[YOU]   :v:  vs  :raised_hand:   [BOT]\n　 あなたの勝ちです！"
      );
  }
};
