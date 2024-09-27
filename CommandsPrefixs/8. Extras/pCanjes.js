const { EmbedBuilder, Message } = require('discord.js');

// Embed
const pcanjes_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Formas de Canjear Códigos**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/434d893310e5d410475d5ebed68418a573b126f3a3cdd52a2d129de5420f16b0.png')
  .setDescription('**En el juego:**\n :7emoji_discordi: _**Android:** Configuración > Código de canje. :7emoji_discordj:\n **iOS:** Eventos > Noticias > ¡Nuevo centro de intercambio de códigos de regalo!._ [Pagina](https://lordsmobile.igg.com/gifts/?lang=es)');

module.exports = {
  name: 'pcanjes',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [pcanjes_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};