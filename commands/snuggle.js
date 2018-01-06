/**
 * File name: kiss.js
 * Description: Kissing people ;)
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "e!"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'snuggle')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("snuggle who :>");
        }
        message.channel.send(`${message.author} snuggled ${mention}. http://i0.kym-cdn.com/photos/images/newsfeed/000/987/510/f81.gif`)
    }
}
