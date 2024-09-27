const { EmbedBuilder, Message } = require('discord.js');

// Embed
const mixF2P_embed = new EmbedBuilder()
  .setAuthor({ name: 'Lords Mobile ES', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s' })
  .setColor('#000080')
  .setFooter({ text: 'Discord', iconURL: 'https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless' })
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/a6da916c5d2df1df151f856811b853bbaaf9dfe92e5907ea2caf516150a47454.png')
  .setTitle('**Mixto F2P**')
  .setThumbnail('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png');

module.exports = {
  name: 'mixf2p',
  /**
   * 
   * @param {Message} message 
   */

  async execute(message) {
    try {
      await message.author.send({ embeds: [mixF2P_embed] });
      await message.delete();
    } catch (error) {
      console.log(`Hubo un error al mandar/borrar el mensaje a @${message.author.username}\nId: ${message.author.id}`);
      message.author.send('Epa mano, no pude borrar tu mensaje, acaso eres un dios?!?!?')
    }
  },
};