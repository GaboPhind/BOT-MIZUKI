const {
  EmbedBuilder,
  Message,
} = require('discord.js');

module.exports = {
  name: 'lejercito',
  /** 
   * @param {Message} message 
   */
  async execute(message, args, interaction) {
    const Embed = new EmbedBuilder()
      .setTitle("*Investigacion de la rama Liderazgo de Ejercito*") // Título
      .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/f2e11a37fc0c3f6cb953f0bd178202352cc366214a029df40f8d3f984d36b50f.png')// Imágen
      .setAuthor({ name: "Lords Mobile ES", iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s" }) // Autor
      .setColor("#000080") // Color
      .setFooter({ text: "Discord", iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless" }) // Footer
      .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png") // Thumbnail

    // Mandar Embed, borrar mensajes
    try {
      await message.author.send({ embeds: [Embed] });
      await message.delete();

    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
    }
  }
}