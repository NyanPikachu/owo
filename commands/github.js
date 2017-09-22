const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "github")) {
        message.channel.send("Here's the source code to the bot.\nhttps://github.com/apap04/owo")
    }
}