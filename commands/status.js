const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'status')) {
        message.channel.send({embed: {
            title: "Bot status",
            description: "Guild count, user count and channel count.",
            fields: [{
                name: "Connections",
                value: `${client.guilds.size} guilds, ${client.users.size} users and ${client.channels.size} channels.`
            }]
        }});
    }
}