const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "salon",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {

    // Embed
    const camara = new EmbedBuilder()
      // Titulo
      .setTitle("*Libros de Guerra necesarios para el Salón de Combate*")

      // Imagen
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/5fd9f2442f9fe798d8a5a464570e5b9a2e8787f0a24916e22e664ac85018c787.png")

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