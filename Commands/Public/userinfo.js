const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Te mostare la informacion de ese usuario")
    .addUserOption((option) => option.setName('usuario').setDescription('Menciona a un usuario:')),
  /**
  *
  * @param {ChatInputCommandInteraction} interaction
  */
  async execute(interaction) {
    const user = interaction.options.getUser("usuario") || interaction.user;
    const member = await interaction.guild.members.fetch(user.id);
    const icon = user.displayAvatarURL();
    const tag = user.tag;

    const embed = new EmbedBuilder()
      .setColor('#000080')
      .setAuthor({ name: tag, iconURL: icon })
      .setThumbnail(icon)
      .setFooter({ text: `ID Usuario ${user.id}` })
      .setTimestamp()
      .addFields(
        { name: "Miembro", value: `${user}`, inline: false },
        { name: "Roles", value: `${member.roles.cache.map(r => r).join(" ")}`, inline: false },
        { name: "Se ha unido al Servidor", value: `${parseInt(member.joinedAt / 1000)}:R`, inline: true },
        { name: "Se ha unido al Discord", value: `${parseInt(user.createdAt / 1000)}:R`, inline: true },
      );

    await interaction.reply({ embeds: [embed] });
  },
};