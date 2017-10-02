const prefix = "owo^"

exports.run = (client, message, [mention, ...reason]) => {
    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.member.roles.some(r => ["Administrator", "Admin", "Owner", "Co-Owner", "my love"].includes(r.name))) {
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
            message.channel.send(`${member.user.username} was banned for ${reason}`)
        }).catch(e => {
            console.error(e)
        })
    }
}