const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "help")) {
        message.reply(`sent help.`)
        message.member.send("helpo here\n`owo^kick` Kicks a user.\n`owo^ban` Bans a user.\n`owo^eval` Can eval JS code. Only used by owner of bot and NOT by anyone else.\n`owo^contact` DMs contact info to you about the owner(s) of the bot.\n`owo^status` Shows status of bot.")
    }
}