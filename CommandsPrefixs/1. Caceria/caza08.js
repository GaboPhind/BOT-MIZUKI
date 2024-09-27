const {
	EmbedBuilder,
	Message
} = require("discord.js");

module.exports = {
	name: "caza08",
	/**
	* 
	* @param {Message} message 
	*/
	async execute(message, args, interaction) {

		// Embed
		const caza08_embed = new EmbedBuilder()
			// Titulo
			.setTitle("*Megalarva*")

			// Imagen
			.setImage("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/7e4ed1094a0fa9039f3cffffe05719222bc41fad5c498104f4d43fff21facce8.png")

			// Color
			.setColor("#000080")

			// Autor
			.setAuthor({
				name: "Lords Mobile ES",
				iconURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgz97b4TPB_ArMAV9U8KPCTSBUNqtlBnAfA&s",
			})

			// Thumbnail
			.setThumbnail("https://cdn-longterm.mee6.xyz/plugins/embeds/images/638754973433331712/271c4ff360c7ff1e09a93b9902df78b23cacbaf4463468ff03f7866b4786afef.png")

			// Footer
			.setFooter({
				text: "Discord",
				iconURL: "https://cdn.discordapp.com/emojis/947776077516898364.webp?size=160&quality=lossless",
			})


		// Mandar el embed y borrar los mensajes
		try {
			await message.author.send({ embeds: [caza08_embed] });
			// Borrar el mensaje
			await message.delete();
		} catch (error) {
			console.error('Error al eliminar el mensaje:', error);
			interaction.reply({ content: 'Hubo un error al intentar eliminar el mensaje.', ephemeral: true });
		}
	},
};