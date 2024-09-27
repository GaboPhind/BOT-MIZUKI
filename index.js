const { 
  Client,
  GatewayIntentBits,
  Partials,
  Collection,

} = require('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
  intents: [53608447],
  partials: [User, Message, GuildMember, ThreadMember]
});

const { loadEvents } = require('./Handlers/eventHandler')

const config = require('./config.json');

client.events = new Collection();
client.commands = new Collection();
client.prefixs = new Collection();

loadEvents(client);

require('./Handlers/anti-crash')(client);

// Iniciar sesión con el bot
client.login(config.token);
client.on(("ready"), async () => {
  client.user.setActivity(`Lords Mobile`)
});

module.exports = { client }