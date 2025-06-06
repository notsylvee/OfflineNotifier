module.exports = {
    name: "messageCreate",
    async execute(message) {
        if (message.author.bot) return;
        if (message.channel.id !== `1369872487499698349`) return;

        setInterval(() => {
            message.channel.send(`refreshing statuses`);
          }, 3600000);
        console.log('started refreshing');
        message.channel.send(`started refreshing`);
    }
}