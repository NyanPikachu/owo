const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "say")) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
}