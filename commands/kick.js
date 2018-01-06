/**
 * File name: kick.js
 * Description: kick users
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "owo^"

exports.run = (client, message, [mention, ...reason]) => {
    if (message.content.startsWith(prefix + 'kick')) {
        if (!message.member.hasPermission(2)) {
            return message.reply("You can't kick.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to kick.");
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) {
            return ("That user does not seem to exist.");
        }
        if (!message.guild.member(client.user).hasPermission(2)) {
            return message.reply("I can't kick this user. I don't have permission!")
        }
        kickMember.kick(reason.join(" ")).then(member => {
            message.channel.send(`${member.user.username} was kicked.`)
        }).catch(e => {
            console.error(e)
        })
    }
} 