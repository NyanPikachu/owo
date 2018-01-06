/**
 * File name: succ.js
 * Description: SUCC PEOPLE OFF YES :^))))))))))))))))
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "e!"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'succ')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("sUCC wHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO tAsTy :^)");
        }
        message.channel.send(`${message.author} SUCCE ${mention}!11!!1!!!1`)
    }
}
