/**
 * File name: mute.js
 * Description: mute people
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const ownerID = "138056116880932864"
const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "mute")) {
        if (message.member.id !== ownerID) {
            return message.reply("This command cannot be used yet.")
        }
        if (!message.member.hasPermission(268435456)) {
            return message.reply("You can't mute.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if (!muteMember) {
            return ("That user does not seem to exist.");
        }
        if (!message.guild.member(client.user).hasPermission(268435456)) {
            return message.reply("I can't mute this user. I don't have permission!")
        }
        muteMember.mute(reason.join(" ")).then(member => {
            message.channel.send(`${member.user.username} was muted.`)
        }).catch(e => {
            console.error(e)
        })
    }
}
