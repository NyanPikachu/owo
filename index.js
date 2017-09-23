const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require('./config.json')
const prefix = "owo^"

client.on('ready', () => {
  client.user.setGame("owo^help")
  console.log(`Currently operating on ${client.channels.size} total channels with ${client.guilds.size} servers, and a total of ${client.users.size} users`)
})

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);