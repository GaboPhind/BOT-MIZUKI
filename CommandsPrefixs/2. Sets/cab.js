const { EmbedBuilder, Message } = require('discord.js');

// Embed
const cab_embed = new EmbedBuilder()
  .setAuthor({ name: 'Lords Mobile ES', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s' })
  .setColor('#000080')
  .setFooter({ text: 'Discord', iconURL: 'https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless' })
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/1e14432b84860cbe88a4844172575be7c70bc19344f44f2a70d74737e9a48093.png')
  .setTitle('Cabalerria')
  .setThumbnail('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png');

module.exports = {
  name: 'cab',
  /**
   * @param {Message} message 
   */

  async execute(message) {
    try {
      await message.author.send({ embeds: [cab_embed] })
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al eliminar un mensaje en @${message.author.username}`);
      message.send('Hubo un error al intentar borrar tu mensaje ');
    }
  },
};