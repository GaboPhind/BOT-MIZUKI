const {
	EmbedBuilder,
	Message
} = require("discord.js");

module.exports = {
	name: "caza05",
	/**
	* 
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {
		// Embed
		const caza05_embed = new EmbedBuilder()
			.setTitle("*Moai Milenario*")
			.setColor("#000080")
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/45a878ed92d1f64f2cb270ba830e049bb3b0f9a780eb6a4d58af406b58d6295a.png")
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
			await message.author.send({ embeds: [caza05_embed] });
			// Borrar el mensaje
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};