const { Message, EmbedBuilder } = require('discord.js');

// Embed
const cmonstruitos_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Rama de investigación Comando militar**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/c27cd698e2b0b6e7c221f9a590ddb25cd311d862edbaa1138103ae4e4d5b1322.png');

module.exports = {
  name: 'cmonstruitos',
  /**
   * @param {Message} message 
   */

  async execute(message) {
    try {
      await message.author.send({ embeds: [cmonstruitos_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Error al eliminar el mensaje en "${message.author.username}"`);
      message.author.send({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  }
}