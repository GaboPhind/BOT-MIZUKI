const { EmbedBuilder, Message } = require('discord.js');

// Embed
const etapaE_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Etapas de Heroes Elite**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/fce1fcb7b11e490cb7b86e37438d263feb6d5e6bf4acb7d74f3e0b3a5fc3ec21.png');

module.exports = {
  name: 'etapae',
  /**
   * 
   * @param {Message} message 
   */

  async execute(message) {
    try {
      await message.author.send({ embeds: [etapaE_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};