const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("activa")
    .setDescription("Mensaje de estatus del bot"),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  execute(interaction) {
    interaction.reply({ content: "Actualmente estoy prendida!", ephemeral: false });
  },
};