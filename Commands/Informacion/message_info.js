const { Message, ChatInputCommandInteraction,
  SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName("message")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDescription("Informacion del input message"),
  /**
   * @param {Message} Message
   * @param {ChatInputCommandInteraction} interaction 
   */

  execute(interaction, Message) {
    if (interaction.user.id === '930530005686034503') {
      interaction.reply({ content: 'Informacion en consola', ephemeral: true })
      console.log(Message)
    }
    else {
      interaction.reply({ content: "No eres el creador del bot para utilizar este comando ☹️", ephemeral: true });
      console.log(interaction.user.id)
    }
  },
}