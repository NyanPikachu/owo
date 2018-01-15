/**
 * File name: index.js
 * Description: Main file for running bot
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const prefix = "owo^"

client.on('ready', () => {
  client.user.setGame(`owo^help | Guilds: ${client.guilds.size}`)
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
    console.error(err + ". Simply, this module doesn't exist or is a bug.")
  }
});

client.login(process.env.BOT_TOKEN).catch(console.error)

// Web app (Express + EJS)
const http = require('http');
const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the `public` directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', (request, response) => {
    // ejs render automatically looks in the views folder
    response.render('index');
});

app.listen(port, () => {
    // will echo 'Our app is running on http://localhost:5000 when run locally'
    console.log('Our app is running on http://localhost:' + port);
});

// pings server every 15 minutes to prevent dynos from sleeping
setInterval(() => {
 http.get('http://owo-botto.herokuapp.com');
}, 900000);
