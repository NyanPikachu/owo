/**
 * File name: kiss.js
 * Description: Kissing people ;)
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention]) => {
    if (message.content.startsWith(prefix + 'avatar')) {
        message.reply(message.author.avatarURL);
    }
}
