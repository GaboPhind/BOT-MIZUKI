const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "camara",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {

    // Embed
    const camara = new EmbedBuilder()
      // Titulo
      .setTitle("*Picos de Cristal necesarios para la Cámara del Tesoro*")

      // Imagen
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/23fba585cd0fc4a0a509a72c9d6a3c793902eda489dcf902dec6367c3b35b082.png")

      // Color
      .setColor("#000080")

      // Autor
      .setAuthor({
        name: "Lords Mobile ES",
        iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s",
      })

      // Thumbnail
      .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")

      // Footer
      .setFooter({
        text: "Discord",
        iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless",
      })
    // Mandar el embed y borrar los mensajes
    try {
      await message.author.send({ embeds: [camara] });
      // Borrar el mensaje
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  },
};