const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "hp5",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {
    // Embed
    const hp5_embed = new EmbedBuilder()
      .setTitle("*Hiper Producción de Oro*")
      .setColor("#000080")
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/99e83efcfceb2c74196c3545d0ea47d10f4933c532b8c6486645bbd90b291eab.png")
      .setAuthor({
        name: "Lords Mobile ES",
        iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s"
      })
      .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
      .setFooter({
        text: "Discord",
        iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless",
      })
    // Mandar el embed y borrar los mensajes
    try {
      await message.author.send({ embeds: [hp5_embed] });
      // Borrar el mensaje
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  },
};