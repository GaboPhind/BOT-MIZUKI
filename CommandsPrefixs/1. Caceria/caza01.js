const {
	EmbedBuilder,
	Message
} = require("discord.js");

module.exports = {
	name: "caza01",
	/**
	* 
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		// Embed
		const caza01_embed = new EmbedBuilder()
			.setTitle("*Gargantúa*")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/a1ee9a2442f57fe693bb38648fc359b4dbe2d034587ae35a6e8893cb7f1c290a.png")
			.setColor("#000080")
			.setAuthor({
				name: "Lords Mobile ES",
				iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s",
			})
			.setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")
			.setFooter({
				text: "Discord",
				iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless",
			})
		// Mandar el embed y borrar los mensajes
		try {
			await message.author.send({ 
				embeds: [caza01_embed],
			});
			// Borrar el mensaje
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};