/**
 * File name: index.js
 * Description: Main file for running bot
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention, ...reason]) => {
    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.member.hasPermission(4)) {
            return message.reply("You can't ban.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to ban.");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) {
            return ("That user does not seem to exist.");
        }
        if (!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
            return message.reply("I can't ban this user.")
        }
        banMember.ban(reason.join(" ")).then(member => {
            message.channel.send(`${member.user.username} was banned`)
        }).catch(e => {
            console.error(e)
        })
    }
}