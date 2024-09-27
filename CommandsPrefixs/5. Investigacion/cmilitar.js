const {
  Message,
  EmbedBuilder,
} = require('discord.js');

// Embed
const cmilitar_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Rama de investigación Comando militar**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/a41f6540811d2cc3c1065b2040ead41c27a9adf431245bd271d8a9598edf5a37.png');

module.exports = {
  name: 'cmilitar',
  /**
   * @param {Message} message
   */
  async execute(message, embed) {
    // Mandar embed
    try {
      await message.author.send({ embeds: [cmilitar_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Error al eliminar el mensaje en "${message.author.username}"`);
      message.author.send({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  }
}