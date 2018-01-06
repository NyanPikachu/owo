/**
 * File name: say.js
 * Description: Make the bot say stuff.
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "e!"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "say")) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    }
}