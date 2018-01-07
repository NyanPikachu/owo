/**
 * File name: suggle.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'snuggle')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("snuggle who :>");
        }
        message.channel.send(`${message.author} snuggled ${mention}.\nhttp://i0.kym-cdn.com/photos/images/newsfeed/000/987/510/f81.gif`)
    }
}
