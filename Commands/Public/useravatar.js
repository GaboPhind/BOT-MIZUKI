const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  EmbedBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("useravatar")
    .setDescription("Mandare la informacion especifica de ese usuario!")
    .addUserOption((options) => options.setName(`avatar`).setDescription('Usuario a ver su avatar')),
  /**
  * 
  * @param {ChatInputCommandInteraction} interaction  
  */
  async execute(interaction) {
    const avatar = interaction.options.getUser(`avatar`) || interaction.user;
    const icon_avatar = avatar.displayAvatarURL({ size: 1024 });

    const avatar_embed = new EmbedBuilder()
      .setColor("#000080")
      .setAuthor({ name: avatar.tag, iconURL: icon_avatar })
      .setTitle(`Avatar de ${avatar.tag}`)
      .setImage(avatar.displayAvatarURL({ size: 256 }));

    await interaction.reply({ embeds: [avatar_embed] });
  }
};