const { EmbedBuilder, Message } = require('discord.js');

// Embed
const papiros_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Papiros necesarios para Migrar de Reino**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/370e5e6c65eb56c9e38af5933c7a622bbb700cf2aef8e80a5558f080bca8be78.png')
  .setDescription('Pagina para encontrar un buen reino según tu poder, papiros disponibles y la actividad del reino. [Sitio Web para un buen Reino](https://lordsmobile.igg.com/project/game_tool/index.php?action=get_migration_scroll&lang=jp)')

module.exports = {
  name: 'papiros',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [papiros_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};