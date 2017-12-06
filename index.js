/**
 * @author Andreas P. <apap04@otakoapp.com>
 * @description Main file for bot operation.
 * @name index.js
 */

const Discord = require('discord.js')
const client = new Discord.Client()
const chalk = require('chalk')

const config = require('./config.json')
const prefix = "owo^"

client.on('ready', () => {
  client.user.setGame(`owo^help | Guilds: ${client.guilds.size} | Users: ${client.users.size}`)
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

client.login(config.token).catch(console.error)