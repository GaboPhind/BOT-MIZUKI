const { EmbedBuilder, Message } = require('discord.js');

// Embed
const laberinto_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Rotacion de laberinto**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/f4c64d43dad36b7ae332c6aafc68187e59fa7242d414f4411f363ca303fbdb4f.png');

module.exports = {
  name: 'laberinto',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [laberinto_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};