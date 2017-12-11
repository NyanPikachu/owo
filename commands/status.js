const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'status')) {
        message.channel.send({embed: {
            fields: [{
                name: "Author",
                value: "apap04#3393",
                name: "Uptime",
                value: `${client.uptime}`
            }]
        }});
    }
}