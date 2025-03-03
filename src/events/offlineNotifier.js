const { Events } = require('discord.js');

module.exports = {
    name: Events.PresenceUpdate,
    async execute (oldStatus, newStatus, client) {
        const channel = await client.channels.fetch("1344570100589662268");
        const botIDs = [
            "1337978432700682371", /*CT*/
            "1337995599743815734", /*E8B*/
            "1318490033464021032", /*IF*/
            "1334767311537836133", /*RT*/
            "1338314970303037440", /*SS*/
            "953885359668871238", /*SB*/
            "1338726967142256716", /*TB*/
        ];
        if (!botIDs.includes(newStatus.user.id)) return;
        if (oldStatus.status !== "offline" && newStatus.status == "offline") {
            channel.send(`<@${oldStatus.user.id}> has gone offline. <@1018686464000807003> please fix`)
        };
    },
};