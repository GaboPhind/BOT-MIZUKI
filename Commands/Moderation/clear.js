const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Eliminara la cantidad de mensajes que desees!")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addIntegerOption((option) => option.setName("cantidad").setDescription(`Cantidad de mensajes a eliminar`).setRequired(true).setMinValue(1).setMaxValue(999))
    .addUserOption((option) => option.setName("usuario").setDescription("Usuario del cual quieres eliminar mensajes")),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  async execute(interaction) {
    const cantidad = interaction.options.getInteger('cantidad')
    const user = interaction.options.getInteger('usuario')

    const mensajes = await interaction.channel.messages.fetch()

    if (user) {
      let i = 0
      let mensajeseliminar = []
      mensajes.filter((message) => {
        if (message.author.id === user.id && cantidad > i) {
          mensajeseliminar.push(message)
          i++
        }
      })

      interaction.channel.bulkDelete(mensajeseliminar, true).then((mensaje) => {
        interaction.reply({ content: `He eliminado ${mensaje.size} de ${interaction.user.username}` })
      })
    } else {
      interaction.channel.bulkDelete(cantidad, true).then((mensaje) => {
        interaction.reply({ content: `He eliminado ${mensaje.size} de ${interaction.user.username}`, ephemeral: true })
      })
    }
  },
};