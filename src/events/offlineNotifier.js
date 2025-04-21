const { Events } = require('discord.js');

module.exports = {
    name: Events.PresenceUpdate,
    async execute (oldStatus, newStatus, client) {
        const channel = await client.channels.fetch("1344570100589662268");
        const botIDs = [
            "1337978432700682371", /*Coolio Toolio*/
            "1353297715165007873", /*Dwayne The Rock Johnson*/
            "1357541155973107956", /*El Goblino*/
            "1337995599743815734", /*Enchanted 8 Ball*/
            "1358328263998439445", /*Gabriel*/
            "1318490033464021032", /*Imaginary Friend*/
            "1353099114203840532", /*OmniBot*/
            "1355611589054824469", /*Quag*/
            "1334767311537836133", /*Red Teddy*/
            "1338314970303037440", /*Sebastian Solace*/
            "1353297778163322973", /*Steve*/
            "953885359668871238", /*Sylvbot*/
            "1338726967142256716", /*Teddy Bloxpin*/
            "1360828777952972957", /*p.AI.nter*/
            "1361062973556392207", /*Bouncer*/
            "1362283545023746139", /*Pilby*/
            "1363770199236415560", /*Poob*/
        ];
        if (!botIDs.includes(newStatus.user.id)) return;
        if (oldStatus.status !== "offline" && newStatus.status == "offline") {
            channel.send(`<@&1358635798991208558>, <@${oldStatus.user.id}> has gone offline.\n<@1018686464000807003> will fix this ASAP`)
        };
    },
};