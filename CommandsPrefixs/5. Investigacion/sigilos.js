const { Message, EmbedBuilder } = require('discord.js');

// Embed
const sigilos_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Rama de investigación Sigilo**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/f6e8435734bd516a8f516c6e853022e272002b99fea59bce6d67e5327e7f45bc.png');

module.exports = {
  name: 'sigilos',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [sigilos_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Error al eliminar el mensaje en "${message.author.username}"`);
      message.author.send({ content: 'Hubo un error al intentar eliminar el mensaje.' });
    }
  },
};