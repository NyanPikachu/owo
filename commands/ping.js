const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send(new Date().getTime() - client.ping + " ms");  
    }
}