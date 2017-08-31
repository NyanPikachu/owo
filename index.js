const Discord = require('discord.js')
const bot = new Discord.Client
const config = require('./config.json')
const prefix = "^";

bot.on('ready', () => {
    console.log("On.")
    bot.user.setStatus("dnd")
    bot.user.setGame("!help")
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    if (message.content.startsWith(prefix + "help")) {
        message.channel.send("test")
    }
});

bot.login(config.token)