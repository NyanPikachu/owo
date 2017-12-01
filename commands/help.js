const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "help")) {
        message.reply(`sent help.`)
        message.member.send("helpo here\n```Moderation Commands\n==========================\nowo^kick Kicks a user.\nowo^ban Bans a user.\nowo^purge Purges specific amount of messages. 100 message limit.\n\n'Fun' Commands\n==========================\nowo^say Says what you told the bot to say.\n\nMisc Commands\n==========================\nowo^contact DMs contact info to you about the owner(s) of the bot.\nowo^status Shows status of bot.\nowo^github Source code link.\nowo^ping Gets ping.```")
    }
}