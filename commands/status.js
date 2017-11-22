//const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'status')) {
        message.channel.send({embed: {
            title: "Bot status",
            description: "The bot's functionality status.",
            fields: [{
                color: 3447003,
                name: "Music",
                value: "Offline",
                name: "Main Bot",
                value: "On."
            }]
        }});
    }
}