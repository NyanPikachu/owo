








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
        message.member.send("helpo here\n```Moderation Commands\n==========================\ne!kick Kicks a user.\ne!ban Bans a user.\ne!purge Purges specific amount of messages. 100 message limit.\n\n'Fun' Commands\n==========================\ne!say Says what you told the bot to say.\ne!kiss You can kiss someone.\ne!discrim Change your discrim. Usage: e!discrim 0001\ne!succ Succ someone xd\n\nMisc Commands\n==========================\ne!contact DMs contact info to you about the owner(s) of the bot.\ne!status Shows status of bot.\ne!github Source code link.\ne!ping Gets ping.```")
    }
}