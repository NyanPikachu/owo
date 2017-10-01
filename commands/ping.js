const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('Pinging..').then(sent => {
            sent.edit(`**poNG!**\nmy latency is \`${sent.createdTimestamp - message.createdTimestamp}\`ms. - api latency is \`${Math.round(client.ping)}\`ms`);
        });
    }
}