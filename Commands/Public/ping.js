const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");
const { client } = require("../../index");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Te mostrare mi ping"),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  async execute(interaction) {
    const embed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Ping de ${client.user.username}`)
    .setThumbnail(client.user.displayAvatarURL())
    .addFields(
      { name: '🏓 Latencia del bot:', value: `${interaction.replied ? interaction.repliedCreatedTimestamp - interaction.createdTimestamp : Date.now() - interaction.createdTimestamp}ms`, inline: false },
      { name: '🌐 Latencia API:', value: `${Math.round(interaction.client.ws.ping)}ms`, inline: false },
      { name: '🔄 Latencia de red:', value: `${interaction.client.ws.ping}ms`, inline: false }
    )
    .setTimestamp();

    await interaction.reply({ embeds: [embed] });
  },
};