/**
 * File name: sex.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'sex')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("sex who :>");
        }
        message.channel.send(`${message.author} sexed ${mention}.`)
    }
}
