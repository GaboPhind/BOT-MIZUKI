const { EmbedBuilder, Message } = require('discord.js');

// Embed
const etapaN_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Etapas de Heroes Normal**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/8b5fdc583e08d0ea8b59ad54e9e3cec8781a1248688d6f38530e9ce853f4b45b.png');

module.exports = {
  name: 'etapan',
  /**
   * 
   * @param {Message} message 
   */

  async execute(message) {
    try {
      await message.author.send({ embeds: [etapaN_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};