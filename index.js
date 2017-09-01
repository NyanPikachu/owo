const Discord = require('discord.js')
const bot = new Discord.Client
const config = require('./config.json')
const prefix = "^";

bot.on('ready', () => {
    console.log("On.")
    bot.user.setStatus("dnd")
    bot.user.setGame("^help")
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + "help")) {
        message.member.send("helpo here\n:mmLol:")
    }

    if (message.content.startsWith(prefix + "eval")) {
        if (message.author.id !== config.ownerID) {
            return message.channel.send("no u")
        }
        if (message.content = "config.token") {
            return message.channel.send("how bout no");
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
});

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}

bot.login(config.token)