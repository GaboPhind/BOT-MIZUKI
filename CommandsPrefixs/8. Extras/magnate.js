const { EmbedBuilder, Message } = require('discord.js');

// Embed
const magnate_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Rotacion del Magnate**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/2f20e8468bc072b69099a67464f50c94c4fd0502e92b835d30d834cfc9df0c8e.png')
  .setDescription('**Probabilidad de Obtención:**\n Aparición de Duende guardián: 1%\n Bolsa de gemas: 0.69%');

module.exports = {
  name: 'magnate',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [magnate_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};