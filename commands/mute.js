/**
 * File name: mute.js
 * Description: mute people
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const ownerID = "138056116880932864"
const prefix = "owo^"

exports.run = (client, message, args, [mention]) => {
    if (message.content.startsWith(prefix + "mute")) {
        if (message.author.id !== ownerID) {
            return message.reply("This command is in development.")
        }
        if (!message.member.hasPermission(268435456)) {
            return message.reply("You can't mute.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to mute.");
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) {
            return ("That user does not seem to exist.");
        }
    }
}
