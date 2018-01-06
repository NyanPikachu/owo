/**
 * File name: avatar.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message) => {
    if (message.content.startsWith(prefix + 'avatar')) {
        message.reply(message.author.avatarURL);
    }
}
