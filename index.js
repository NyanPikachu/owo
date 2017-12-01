/**
 * @author Andreas P. <apap04@otakoapp.com>
 * @description Main file for bot operation.
 * @name index.js
 */

const Discord = require('discord.js')
const DiscordRPC = require("discord-rpc");
const client = new Discord.Client()
const fs = require('fs')
const chalk = require('chalk')

const config = require('./config.json')
const prefix = "owo^"
const prefix2 = "owo"

client.on('ready', () => {
  client.user.setGame("owo^help")
  client.user.setStatus("online")
  console.log(`Currently operating on ${client.channels.size} total channels with ${client.guilds.size} servers, and a total of ${client.users.size} users`)
})

client.on("message", message => {
  if (message.author.bot) return
  if (message.content.indexOf(prefix) !== 0) return

  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()

  try {
    let commandFile = require(`./commands/${command}.js`)
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(chalk.red(err + ". Simply, this module doesn't exist or is a bug."))
  }
});

/* DiscordRPC.register(config.ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log(`RPC ready.`);
  rpc.setActivity({
    details: `owo`,
    state: 'its rpc',
    largeImageKey: 'owo',
    largeImageText: 'owo',
    smallImageKey: 'owo2',
    smallImageText: 'whats this?',
    instance: false,
  });
});

rpc.login(config.ClientId).catch(console.error); */

client.login(config.token)