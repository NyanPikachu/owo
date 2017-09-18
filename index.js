/*
*  @author apap04
*  @description owo, a bot for (me) everyone
*/

const Discord = require('discord.js')
const bot = new Discord.Client
const config = require('./config.json')
const prefix = "owo^";

// worst thing is, i'm storing all the commands here

bot.on('ready', () => {
    console.log("On.")
    bot.user.setGame('owo^help');
    bot.user.setStatus("online")
    console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "help")) {
        message.reply(`sent help.`)
        message.member.send("helpo here\n`owo^kick` Kicks a user.\n`^ban` Bans a user.\n`^eval` Can eval JS code. Only used by owner of bot and NOT by anyone else.\n`^contact` DMs contact info to you about the owner(s) of the bot.\n`^status` Shows status of bot.")
    }

    const args = message.content.split(" ").slice(1);

    if (message.content.startsWith(prefix + "eval")) {
        if (message.author.id !== config.ownerID) {
            return message.channel.send("nope");
        }
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(clean(evaled), { code: "xl" });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }

    if (message.content.startsWith(prefix + 'ban')) {
        if (!message.member.roles.some(r => ["Administrator", "Moderator", "Mod", "Admin", "Owner", "Co-Owner", "Modeh", "my love"].includes(r.name))) {
            return message.reply("You can't ban.")
        }
        if (message.mentions.users.size === 0) {
            return message.reply("I need a mention to ban.");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) {
            return ("That user does not seem to exist.");
        }
        if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
            return message.reply("I can't ban this user.")
        }
        banMember.ban().then(member => {
            message.channel.send(`${member.user.username} was banned`)
        }).catch(e => {
            console.error(e)
        })
    }

    if (message.content.startsWith(prefix + 'contact')) {
        message.reply("sent contact info.")
        message.member.send("Email: apap04@otakoapp.com\nDiscord: apap04#7823\nIf you have any concerns about anything, feel free to message me. It would be also be appreciated if you report any leaks too. :)")
    }

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
        if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("I can't kick this user.")
        }
        kickMember.kick().then(member => {
            message.channel.send(`${member.user.username} was kicked.`)
        }).catch(e => {
            console.error(e)
        })
    }

    if (message.content.startsWith(prefix + 'status')) {
        message.channel.send({embed: {
            title: "Bot status",
            description: "The bot's functionality status.",
            fields: [{
                color: 3447003,
                name: "Music",
                value: "Offline"
            }]
        }});
    }
});

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.login(config.token)
