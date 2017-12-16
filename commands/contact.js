/**
 * File name: contact.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'contact')) 
    message.reply("sent contact info.")
    message.member.send("Email: apap04@otakoapp.com\nDiscord: apap04#3393\nIf you have any concerns about anything, feel free to message me. It would be also be appreciated if you report any leaks too. :)")
}