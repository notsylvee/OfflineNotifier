module.exports = {
    name: "guildMemberAdd",
    async execute(member) {
        if (member.user.bot) return;
        const role = await member.guild.roles.cache.find(role => role.id === '1358633440513233057');
        await member.roles.add(role);
    },
};