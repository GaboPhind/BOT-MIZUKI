const {
  EmbedBuilder,
  Message,
  Embed,
  ChatInputCommandInteraction,
} = require('discord.js');

module.exports = {
  name: 'mmilitar',
  /** 
   * @param {Message} message 
   */
  async execute(message, args, interaction) {
    const Embed = new EmbedBuilder()
      .setTitle("*Investigacion de la rama Mejora Militar*") // Título
      .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/e194030d9fcc27cc23b81694817d164825d3e0f66f8af77df8b01f2fd45d40e2.png')// Imágen
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
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  }
}