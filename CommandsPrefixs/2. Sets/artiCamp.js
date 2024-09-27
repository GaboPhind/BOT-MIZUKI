const { EmbedBuilder, Message } = require('discord.js');

//  Arti Embed
const articamp_embed = new EmbedBuilder()
  .setAuthor({ name: 'Lords Mobile ES', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s' })
  .setColor('#000080')
  .setFooter({ text: 'Discord', iconURL: 'https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless' })
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/b4feee88b0ce0623f06ad272835febd56e2c15f5dd0ed9efe8e261f877f1e1b7.png')
  .setTitle('**Artilleria Campeón**')
  .setThumbnail('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png');

module.exports = {
  name: 'artiCamp',
  /**
   * @param {Message} message
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [articamp_embed] })
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al eliminar un mensaje en @${message.author.username}`);
      message.send('Hubo un error al intentar borrar tu mensaje ');
    }
  }
}