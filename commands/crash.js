const ownerID = "138056116880932864"
const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "crash")) {
        if (message.author.id !== ownerID) {
            return message.channel.send("no pls dont");
        }
        try {
            message.channel.send("Quitting..")
            message.client.destroy()
            process.exit()
            return 1
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
    }
}