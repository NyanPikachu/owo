/**
 * File name: discrim.js
 * Description: change ur discrim (not really)
 * Authors: Andreas P. <apap04@otakoapp.com>
 * Licensed under Apache 2.0.
 */

const prefix = "e!"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + 'discrim')) {
        const discrim = args.join(" ");
        message.reply("Your discriminator has been changed to " + discrim)
    }
}