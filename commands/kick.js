const prefix = "owo^"

exports.run = (client, message, [mention, ...reason]) => {
    if (message.content.startsWith(prefix + 'kick')) {
        if (!message.member.roles.some(r => ["Administrator", "Moderator", "Mod", "Admin", "Owner", "Co-Owner", "Modeh", "my love"].includes(r.name))) {
            return message.reply("You can't kick.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to kick.");
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) {
            return ("That user does not seem to exist.");
        }
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("I can't kick this user. I don't have permission!")
        }
        kickMember.kick(reason.join(" ")).then(member => {
            message.channel.send(`${member.user.username} was kicked for ${reason}.`)
            message.guild.member.send(`You were kicked for ${reason}.`)
        }).catch(e => {
            console.error(e)
        })
    }
} 