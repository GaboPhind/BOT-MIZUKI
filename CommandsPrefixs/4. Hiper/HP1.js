const {
  EmbedBuilder,
  Message
} = require("discord.js");

module.exports = {
  name: "hp1",
  /**
  * 
  * @param {Message} message 
  */
  async execute(message, args, interaction) {
    // Embed
    const hp1_embed = new EmbedBuilder()
      .setTitle("*Hiper Producción de Comida/Trigo*")
      .setColor("#000080")
      .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/0b3cd8cd12542a7e78781cbe137e0d9e5c227eee7528b468eacbc045b9086ec5.png")
      .setAuthor({
        name: "Lords Mobile ES",
        iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s"
      })
      .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
      .setFooter({
        text: "Discord",
        iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless",
      })
    // Mandar el embed y borrar los mensajes
    try {
      await message.author.send({ embeds: [hp1_embed] });
      // Borrar el mensaje
      await message.delete();
    } catch (error) {
      console.error('Error al eliminar el mensaje:', error);
      interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
    }
  },
};