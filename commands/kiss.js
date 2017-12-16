/**
 * File name: kiss.js
 * Description: Kissing people ;)
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

//const prefix = "owo^"
// help pls

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'kiss')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("kiss who :>");
        }
        message.channel.send(`${member.user.username} has been kissed!`)
    }
}