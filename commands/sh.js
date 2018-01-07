/**
 * File name: kiss.js
 * Description: Kissing people ;)
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message) => {
    if (message.content.startsWith(prefix + 'sh')) {
        message.channel.send("https://cdn.discordapp.com/attachments/349663629378846720/398996627269877770/iii.gif");
    }
}
