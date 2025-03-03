const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Pong! Get the bots ping"),

    async execute(interaction) {
        const ping = `${Date.now() - interaction.createdTimestamp}ms`;
        await interaction.reply({ content: `Pong! ${ping}`, ephemeral: true });
    },
};