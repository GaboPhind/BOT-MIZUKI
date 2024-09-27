const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "hp4",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {
    // Embed
    const hp4_embed = new EmbedBuilder()
      .setTitle("*Hiper Producción de Mineral*")
      .setColor("#000080")
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/c39c6e6b0653e13ea83f24951621d988ece767ed609bafd42ee7eac7b1b5b2c5.png")
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
      await message.author.send({ embeds: [hp4_embed] });
      // Borrar el mensaje
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  },
};