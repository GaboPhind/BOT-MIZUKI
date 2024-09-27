const { execute } = require("./ready");

module.exports = {
	name: "messageCreate",
	async execute(message, client) {
		const prefixs = "!"
		if (!message.content.startsWith(prefixs) || message.author.bot) return;

		const args = message.content.slice(prefixs.length).split(/ +/);
		const command = args.shift().toLowerCase();
		const cmd = client.prefixs.get(command) || client.prefixs.find((cmd) => command.aliases && cmd.aliases.includes(command));
		
		if(!cmd) return;

		cmd.execute(message, args);
	},
};