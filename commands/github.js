/**
 * File name: github.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "github")) {
        message.channel.send("Here's the source code to the bot.\nhttps://github.com/owo-bot/owo")
    }
}