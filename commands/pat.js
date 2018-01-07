/**
 * File name: pat.js
 * Description:
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"
const gifs = [
    'https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif'
]

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'pat')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("pat who? :V");
        }
        message.channel.send(`${message.author} patted ${mention}.\n` + gifs)
    }
}
