/**
 * File name: cara.js
 * Description: cara uwu
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message) => {
    if (message.content.startsWith(prefix + 'cara')) {
        message.channel.send("cara uwu");
        console.log("cara isnt thot!!!")
    }
}