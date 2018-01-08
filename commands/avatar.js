/**
 * File name: avatar.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>, YazawaNic0 (https://github.com/YazawaNic0)
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"
const ownerID = "138056116880932864"

exports.run = (client, message) => {
    if (message.content.startsWith(prefix + 'avatar')) {
        if (message.member.id !== ownerID) {
            return message.reply("This command cannot be used yet.")
        }
        message.reply(message.author.avatarURL);
    }
}
