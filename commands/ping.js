/**
 * File name: ping.js
 * Description: ping discord api and bot
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'ping')) {
        message.channel.send('Pinging..').then(sent => {
            sent.edit(`**poNG!**\nmy latency is \`${sent.createdTimestamp - message.createdTimestamp}\`ms. - api latency is \`${Math.round(client.ping)}\`ms`);
        });
    }
}