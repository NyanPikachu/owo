/**
 * File name: status.js
 * Description: 
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

//const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'status')) {
        message.channel.send({embed: {
            fields: [{
                name: "Author",
                value: "apap04#3393",
                name: "Uptime",
                value: `${client.uptime}`
            }]
        }});
    }
}