/**
 * File name: help.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "help")) {
        message.reply(`sent help.`)
        message.member.send("helpo here\n```Moderation Commands\n==========================\nowo^kick Kicks a user.\nowo^ban Bans a user.\nowo^purge Purges specific amount of messages. 100 message limit.\n\n'Fun' Commands\n==========================\nowo^pat Pat your favorite person uwu\nowo^snuggle Snuggle with ur fav person uwuuuu\nowo^avatar Get other's avatar. (Disabled)\nowo^hug Hug ur fav person uwuwuwu\nowo^sh SEXUAL HARRASMENT REE\nowo^say Says what you told the bot to say.\nowo^kiss You can kiss someone.\nowo^discrim Change your discrim. Usage: owo^discrim 0001\nowo^succ Succ someone xd\n\nMisc Commands\n==========================\nowo^contact DMs contact info to you about the owner(s) of the bot.\nowo^status Shows status of bot.\nowo^github Source code link.\nowo^ping Gets ping.```")
    }
}
