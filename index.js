/*
*  @author apap04
*  @description owo, a bot for (me) everyone
*/

const Discord = require('discord.js')
const bot = new Discord.Client
const config = require('./config.json')
const prefix = "^";

// worst thing is, i'm storing all the commands here

bot.on('ready', () => {
    console.log("On.")
    bot.user.setStatus("dnd")
    bot.user.setGame("^help")
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + "help")) {
        message.member.send("helpo here\n`^kick`")
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
        let modRole = message.guild.roles.find("name", "ANIMU!");
        if (!message.member.roles.has(modRole.id)) {
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
            message.reply(`$(member.user.username) was banned`)
        }).catch(e => {
            console.error(e)
        })
    }
});

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.login(config.token)
