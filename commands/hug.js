/**
 * File name: hug.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'hug')) {
        if (message.mentions.users.size === 0) {
            return message.channel.send("hug who :>");
        }
        message.channel.send(`${message.author} hugged ${mention}.\nhttps://media1.tenor.com/images/49a21e182fcdfb3e96cc9d9421f8ee3f/tenor.gif`)
    }
}
