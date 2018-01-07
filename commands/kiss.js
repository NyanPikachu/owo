/**
 * File name: kiss.js
 * Description: Kissing people ;)
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'kiss')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("kiss who :>");
        }
        message.channel.send(`${message.author} kissed ${mention}.\nhttps://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif`)
    }
}
