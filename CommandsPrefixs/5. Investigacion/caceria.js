const {
  EmbedBuilder,
  Message
} = require("discord.js");

// Embed
const caceria_embed = new EmbedBuilder()
  .setTitle("*Investigacion de la rama cacería*")
  .setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/021555c55436e7f23a32bc335aaa28596495fbe27f0fb5148258b894ed916ce7.png")
  .setColor("#000080")
  .setAuthor({ name: "Lords Mobile ES", iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s" })
  .setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
  .setFooter({ text: "Discord", iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless" })

module.exports = {
  name: "caceria",
  /**
  * @param {Message} message 
  */
  async execute(message) {
    // Mandar el embed y borrar los mensajes
    try {
      await message.author.send({ embeds: [caceria_embed] });
      await message.delete();
    } catch (error) {
      console.error(`Hubo un error en eliminar el mensaje de @${message.author.username}`);
      message.reply({ content: 'Hubo un error en eliminar el mensaje' });
    }
  },
};