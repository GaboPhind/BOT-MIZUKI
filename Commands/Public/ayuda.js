const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
  ComponentType,
} = require("discord.js");

// Embed principal
const help = new EmbedBuilder()
  .setColor('#4488ee')
  .setTitle('Comandos de Mizuki')
  .setDescription("**» Menú de ayuda**\nTenemos `8` categorias y `47` comandos con prefijos y `3` comandos slash!\n**» Menú de categorias**")
  .setFooter({
    text: 'Gabo2447',
    iconURL: 'https://cdn.discordapp.com/avatars/930530005686034503/de0a9eb0928b68cf181972ab2af1e65e.png?size=2048',
  })
  .addFields(
    { name: ':one: Caceria', value: 'Todos los monstruos', inline: true },
    { name: ':two: Sets', value: 'Muestras los mejores sets de batalla', inline: true },
    { name: ':three: Edificio de gemas', value: 'Muestra todos los coste de los edificios de gemas', inline: true },
    { name: ':four: HiperProduccion de recursos', value: 'Muestra las mejores combinaciones', inline: true },
    { name: ':five: Investigación', value: 'Muestra todas las investigaciones', inline: true },
    { name: ':six: Monstruitos', value: 'Toda la información de monstruitos', inline: true },
    { name: ':seven: Etapas de Heroes', value: 'Todas las etapas normales, elite y desafio', inline: true },
    { name: ':eight: Extras!', value: 'Comandos Extras', inline: true },
    { name: '**» Enlaces Útiles**', value: '[Creador](https://discord.com/users/930530005686034503) | [Descargar Wiki](https://google.com) | [Menú guia](https://discord.com/channels/1273821640073150464/1274854489219924049/1274886455172272182)', inline: false },
  )
  .setTimestamp();

// Embed caceria
const embed_caceria = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos de caceria')
  .setAuthor({ name: 'Comandos de Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Caceria**\nInformación detallada sobre un comando: `!<comando>`')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439126446575678/Comandos_de_los_Heroes_para_cada_Monstruo.png?ex=66dea012&is=66dd4e92&hm=4be493c092c4e36c0e008d4b3dcfd01f5cfb25a776f03eaebdf90b9f88c04487&')
  .addFields(
    {
      name: "📖**Comandos**",
      value: "```  !caza01             !caza02              !caza03  \n  !caza04             !caza05              !caza06  \n  !caza07             !caza08              !caza09  \n  !caza10             !caza11              !caza12  \n  !caza13             !caza14              !caza15  \n  !caza16             !caza17              !caza18  \n  !caza19             !caza20              !caza21  \n  !caza22             !caza23              !caza24  \n```",
      inline: false
    },
  );

// Embed sets
const embed_sets = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos de sets')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Sets**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439127864246314/Comandos_de_los_Sets_de_Guerra.png?ex=66df48d3&is=66ddf753&hm=07539a0479fa65f7d8ca4ef7345312695837a8e1079182a607dc3906571d05e1&')
  .addFields(
    {
      name: "⚔️ **Sets de guerra**",
      value: "``` !mix\n !infa\n !arti\n !cab ```",
      inline: false
    },
    {
      name: "🏆 **Sets de  campeón**",
      value: "``` !mixCamp\n !infaCamp\n !artiCamp\n !cabCamp ```",
      inline: true
    },
    {
      name: "☑️ **Sets F2P**",
      value: "``` !mixF2P ```",
      inline: false
    },
  );

// Embeds Gemas
const embed_gemas = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos de edificio de gemas')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Gemas**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439125729345536/Comandos_de_los_Edificios_de_Gemas.png?ex=66df48d2&is=66ddf752&hm=6c10d808c6341754fb923e5f77198cfcc70faeffb673d878e6e9492c6f60f425&')
  .addFields(
    {
      name: '☑️ **Edificios de gemas**',
      value: "``` !camara\n !salon\n !prision\n !altar ```",
      inline: false
    }
  );

// Embed Investigación
const embed_investigacion = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos de las ramas de investigacion')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Investigacion**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439124873838622/Comandos_de_las_Investigaciones.png?ex=66df48d2&is=66ddf752&hm=4fca3789ccf07f6bbe61af2b6728e45b766704d3affeb8fcb12ccf2fa9fa7a8c&')
  .addFields(
    {
      name: '📕 **Ramas de investigacion**',
      value: "```\n !economia     !defensa     !ejercito\n !caceria      !Mdefensa    !Mmilitar\n !LEjercito    !Cmilitar    !monstruito\n !Cmonstruitos !sigilos     !Bmaravillas\n      !Equipo       !BmaravillasA\n```",
      inline: false,
    }
  );

// Embed HP
const embed_hp = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos de hiper produccion de recursos')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Hiper Produccion**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439129239978046/Comandos_para_Hiper_de_Produccion.png?ex=66df48d3&is=66ddf753&hm=b6a833a3da6c4a2ab7dccd1ebc032c2c08d2ed3b2de3153f5fe18c1eb4c42eee&')
  .addFields(
    {
      name: '🌽 **Hiper Produccion**',
      value: '``` !HP1\n !HP2\n !HP3\n !HP4\n !HP5 ```',
      inline: false,
    }
  );

//Embed monstruitos
const embed_monstruitos = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos para monstruitos')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Monstruitos**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1137985764152586251/1646035248406.png?ex=66df3514&is=66dde394&hm=9d3e3032977c71642c84edc7dde12d15f65926d7dbe644f85a554410373c3a7c&')
  .addFields(
    {
      name: '⚔️ **Monstruitos**',
      value: '```Actualmente los comandos para monstruitos estan en mantenimiento!```',
      inline: false,
    }
  );

//Embed Etapas
const embed_etapas = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos para Etapas de Heroes')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Etapas de Heroes**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439124152287233/Comandos_de_las_Etapas_de_Heroes.png?ex=66df48d2&is=66ddf752&hm=b7590c11a1a601a1afb42245eb5a584e6c9a307bcd8e4ff0bd3141ee4a0baa67&')
  .addFields(
    {
      name: '👑 **Etapas de Heroes**',
      value: '``` !etapaE    !etapaN    !etapaD ```',
      inline: false,
    }
  );

//Embed Etapas
const embed_extras = new EmbedBuilder()
  .setColor('#000080')
  .setTitle('Lista de comandos Extras')
  .setAuthor({ name: 'Comandos Mizuki', iconURL: 'https://cdn.discordapp.com/avatars/1275876168028917823/ef4ab52bc6bd7ddf8123c5e56fea165e.png?size=2048' })
  .setDescription('<:LM_01:1279964802768306186> **Extras**\nInformación detallada sobre un comando: `!<comando>`\n📖**Comandos** ')
  .setImage('https://cdn.discordapp.com/attachments/895115069459935252/1276439128430350357/Comandos_Extras.png?ex=66df48d3&is=66ddf753&hm=f90c5fc791b475a7d16dd1e10e28d09c58607de49d5212eaceaf70b46e2dfea4&')
  .addFields(
    {
      name: '💎 **Extras**',
      value: '``` !papiros      !pcanjes    !gef2p\n !calculadoras !laberinto  !magnate ```',
      inline: false,
    }
  );

// Categorias del menu
const categorias = [
  // Principal
  {
    label: 'Categorias',
    description: 'Mira la lista de categorias',
    value: 'principal',
    emoji: '❔',
  },
  // Caceria
  {
    label: 'Caceria',
    description: 'Muestra todos los comandos de caza',
    value: 'caceria',
    emoji: '1️⃣',
  },
  // Sets
  {
    label: 'Sets',
    description: 'Muestra todos los comandos de sets de guerra',
    value: 'sets',
    emoji: '2️⃣',
  },
  // Edificio de gemas
  {
    label: 'Edificio de Gemas',
    description: 'Muestra todos los comandos de cada edificio de gemas',
    value: 'edg',
    emoji: '3️⃣',
  },
  // Investigacion
  {
    label: 'Investigación',
    description: 'Muestra todas las ramas disponibles',
    value: 'investigacion',
    emoji: '4️⃣',
  },
  // HP
  {
    label: 'Hiper Produccion',
    description: 'Hiper Produccion de rss',
    value: 'hp',
    emoji: '5️⃣',
  },
  // Monstruitos
  {
    label: 'Monstruitos',
    description: 'Muestra la información de todos los monstruitos',
    value: 'monstruo',
    emoji: '6️⃣',
  },
  // Etapas Heroes
  {
    label: 'Etapas de Heroes',
    description: 'Muestra los heroes para cada etapa',
    value: 'heroe',
    emoji: '7️⃣',
  },
  {
    label: 'Extras!',
    description: 'Comandos extras!',
    value: 'extra',
    emoji: '8️⃣',
  },
]


module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Comandos del Bot"),

  // Param

  /**
   * @param {Object} object
   * @param {ChatInputCommandInteraction} interaction
  */

  async execute(interaction, object) {
    const selectMenu = new StringSelectMenuBuilder()
      .setCustomId(interaction.id)
      .setPlaceholder('Selecciona tu categoria')
      .addOptions(
        categorias.map((categorias) =>
          new StringSelectMenuOptionBuilder()
            .setLabel(categorias.label)
            .setDescription(categorias.description)
            .setValue(categorias.value)
            .setEmoji(categorias.emoji)
        )
      );

    const actionRow = new ActionRowBuilder()
      .addComponents(selectMenu);

    const reply = await interaction.reply({ content: 'Todos las categorias', embeds: [help], components: [actionRow] });

    const collector = reply.createMessageComponentCollector({
      componentType: ComponentType.StringSelect,
      time: 60_000,
    })

    collector.on('collect', async interaction => {
      let selectedOption = interaction.values[0];

      switch (selectedOption) {
        // Principal
        case 'principal':
          interaction.reply({ content: 'Todas las categorías', embeds: [help], components: [actionRow], ephemeral: true });
          break;
        // Caceria
        case 'caceria':
          interaction.reply({ content: 'Comandos caceria', embeds: [embed_caceria], components: [actionRow], ephemeral: true });
          break;
        // Sets
        case 'sets':
          interaction.reply({ content: 'Comandos sets', embeds: [embed_sets], components: [actionRow], ephemeral: true });
          break;
        // Gemas
        case 'edg':
          interaction.reply({ content: 'Comandos de edificios', embeds: [embed_gemas], components: [actionRow], ephemeral: true });
          break;
        // Investigacion
        case 'investigacion':
          interaction.reply({ content: 'Comandos de investigacion', embeds: [embed_investigacion], components: [actionRow], ephemeral: true });
          break;
        // Hiper produccion
        case 'hp':
          interaction.reply({ content: 'Comandos de Hiper produccion de rss', embeds: [embed_hp], components: [actionRow], ephemeral: true });
          break;

        // Monstruitos
        case 'monstruo':
          interaction.reply({ content: 'Comandos de Monstruitos', embeds: [embed_monstruitos], components: [actionRow], ephemeral: true });
          break;

        // Heroes
        case 'heroe':
          interaction.reply({ content: 'Comandos de Etapas de Heroes', embeds: [embed_etapas], components: [actionRow], ephemeral: true });
          break;

        // Extras
        case 'extra':
          interaction.reply({ content: 'Comandos Extras!', embeds: [embed_extras], components: [actionRow], ephemeral: true });
          break;

        default:
          interaction.reply(`Opción no válida: ${selectedOption}`);
      }

      console.log(`Usuario seleccionó: ${selectedOption}`);
    })
  }
}; 