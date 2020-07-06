const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let pages = ["1st page" , "2nd page", "3rd page", "final page"];
  let page = 1;

  const testtembed = new Discord.MessageEmbed()

    .setColor(8011653)
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page - 1]);

  message.channel.send(testtembed).then(msg => {
    msg.react("⬅️").then(r => {
      msg.react("➡️");

      const backwardsFilter = (reaction, user) =>
        reaction.emoji.name === "⬅️" && user.id === message.author.id;
      const forwardsFilter = (reaction, user) =>
        reaction.emoji.name === "➡️" && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, {
        time: 60000
      });
      const forwards = msg.createReactionCollector(forwardsFilter, {
        time: 60000
      });

      backwards.on("collect", r => {
        if (page === 1) return;
        page--;
        testtembed.setDescription(pages[page - 1]);
        testtembed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(testtembed);
      });

      forwards.on("collect", r => {
        if (page === pages.length) return;
        page++;
        testtembed.setDescription(pages[page - 1]);
        testtembed.setFooter(`Page ${page} of ${pages.length}`);
        msg.edit(testtembed);
      });
    });
  });
};
