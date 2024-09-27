const { EmbedBuilder, WebhookClient } = require('discord.js');
const { inspect } = require('util');
const webhook = new WebhookClient({
  url: 'https://discord.com/api/webhooks/1285000923000868884/qbSj2BIZ5d3UJCpTrMgUinwnEaAL4bsm4kj7ieyn4hpU8xiSCOte8pIhza15yN0-jS3-',
});

module.exports = (client) => {
  const embed = new EmbedBuilder()
  .setColor('#ee0000');

  client.on("error", (err) => {
    console.log(err);
    embed
    .setTitle("Discord API Error")
    .setURL("https://discordjs.guide/popular-topics/errors.html#api-errors")
    .setDescription(`\`\`\`${inspect(err, {depth: 0}).slice(0, 1000)}\`\``)
    .setTimestamp()

    return webhook.send({ embeds: [embed] })
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.log(reason, "\n", promise);

    embed
    .setTitle('UnHandled Rejection/Catch')
    .setURL('https://nodejs.org/api/process.html#event-unhandledrejection')
    .setTimestamp()
    .addFields(
      {
        name: 'Reason', 
        value: `\`\`\`${inspect(reason, {depth: 0}).slice(0, 1000)}\`\``
      },
      {
        name: 'Promise',
        value: `\`\`\`${inspect(promise, {depth: 0}).slice(0, 1000)}\`\``,
      });

      return webhook.send({ embeds: [embed] });
  });

  process.on("uncaughtException", (err, origin) => {
    console.log(err, "\n", origin);

    embed
    .setTitle('UnCaught Exception')
    .setURL('https://nodejs.org/api/process.html#event-uncaughtexception')
    .setTimestamp()
    .addFields(
      {
        name: 'Error', 
        value: `\`\`\`${inspect(err, {depth: 0}).slice(0, 1000)}\`\``
      },
      {
        name: 'Origin',
        value: `\`\`\`${inspect(origin, {depth: 0}).slice(0, 1000)}\`\``,
      });

      return webhook.send({ embeds: [embed] });
  });

  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(err, "\n", origin);

    embed
    .setTitle('UnCaught Exception Monitor')
    .setURL('https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor')
    .setTimestamp()
    .addFields(
      {
        name: 'Error', 
        value: `\`\`\`${inspect(err, {depth: 0}).slice(0, 1000)}\`\``
      },
      {
        name: 'Origin',
        value: `\`\`\`${inspect(origin, {depth: 0}).slice(0, 1000)}\`\``,
      });

      return webhook.send({ embeds: [embed] });
  });

  process.on("warning", (warn) => {
    console.log(warn);

    embed
    .setTitle('UnCaught Exception Monitor Warning')
    .setURL('https://nodejs.org/api/process.html#event-warning')
    .setTimestamp()
    .addFields(
      {
        name: 'Warning',
        value: `\`\`\`${inspect(warn, {depth: 0}).slice(0, 1000)}\`\``,
      });

      return webhook.send({ embeds: [embed] });
  });


}