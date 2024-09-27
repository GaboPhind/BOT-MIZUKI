const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "caza14",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {

    // Embed
    const caza14_embed = new EmbedBuilder()
      // Titulo
      .setTitle("*Buen Apetito*")

      // Imagen
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/02b708d4afe7f08ecd21f75f90db1ee719f549e5fd2ca1ff1d1d070e5ab9a2d3.png")

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
      await message.author.send({ embeds: [caza14_embed] });
      // Borrar el mensaje
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  },
};