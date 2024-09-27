const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Prueba de error"),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  async execute(interaction) {
    const mensaje_error = await interaction.reply({ content: '' });
    mensaje_error;
  },
}