const { EmbedBuilder, Message } = require('discord.js');

// Embed
const calculadoras_embed = new EmbedBuilder()
  .setColor('#000080')
  .setAuthor({ iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s", name: 'Lords Mobile ES' })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless", text: 'Discord' })
  .setTitle('**Calculadoras de Lords Mobile**')
  .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/e64ba2bdbf1df7b918f719824e684f6f721bab2d4cce74e1bbb8bad65886c9ad.png')
  .setDescription('**Calculadora de Aceleradores:**\nhttps://lordsmobile.igg.com/project/game_tool/index.php?action=accelerate&lang=esn\n**Calculadora de Proyectos:**\nhttps://lordsmobile.igg.com/project/game_tool/index.php?action=development&lang=esn\n**Calculadora de Entrenamiento:**\nhttps://lordsmobile.igg.com/project/game_tool/index.php?action=baobing&lang=esn\n**Calculadora de Gimnasios:**\nhttps://lordsmobile.igg.com/project/game_tool/index.php?action=xunmo&lang=esn\n**Calculadora de EXP:**\nhttps://lordsmobile.igg.com/project/game_tool/index.php?action=tongyu&lang=esn')

module.exports = {
  name: 'calculadoras',
  /**
   * @param {Message} message 
   */
  async execute(message) {
    try {
      await message.author.send({ embeds: [calculadoras_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error al mandar/borrar el mensaje de ${message.author.username}`);
    }
  },
};