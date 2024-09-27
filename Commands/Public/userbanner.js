const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("userbanner")
    .setDescription("Mandare la informacion especifica de ese usuario!")
    .addUserOption((options) => options.setName(`banner`).setDescription('Usuario a ver su banner').setRequired(false)),
  /**
   * @param {ChatInputCommandInteraction} interaction 
   * @param {Client} client  
   */
  async execute(interaction) {
    const banner = interaction.options.getUser(`banner`) || interaction.user;
    const bannerimg = banner.bannerURL({ size: 1024 });
    const icon_banner = banner.displayAvatarURL({ size: 256 });

    const banner_embed = new EmbedBuilder()
      .setColor("#000080")
      .setAuthor({ name: banner.tag, iconURL: icon_banner })
      .addFields(
        {
          name: `Banner de ${banner.tag}`,
          value: bannerimg ? '** **' : "Este servidor no tiene un Banner",
        }
      );

    await interaction.reply({ embeds: [banner_embed] });
  }
};