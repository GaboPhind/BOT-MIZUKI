const { ChatInputCommandInteraction, SlashCommandBuilder, PermissionFlagsBits, Client, Options } = require('discord.js');
const { loadCommands } = require(`../../Handlers/commandHandler`)
const { loadEvents } = require(`../../Handlers/eventHandler`)

module.exports = {
  developer: true,
  data: new SlashCommandBuilder()
    .setName('reload')
    .setDescription('Recarga comandos/eventos')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options) => options.setName(`events`).setDescription(`Recarga tus eventos`))
    .addSubcommand((options) => options.setName(`commands`).setDescription(`Recarga tus comandos`)),

  /**
   * 
   * @param {ChatInputCommandInteraction} interaction 
   * @param {Client} client 
   */

  execute(interaction, client) {
    const subCommand = interaction.options.getSubcommand();

    switch (subCommand) {
      case 'events':
        for (const [key, value] of client.events) client.removeListener(`${key}`, value, true);
        loadEvents(client);
        interaction.reply({ content: `Tus eventos han sido recargados`, ephemeral: true });
        break;
      case 'commands':
        loadCommands(client);
        interaction.reply({ content: 'Tus comandos han sido recargados', ephemeral: true });
        break;
    }
  },
};