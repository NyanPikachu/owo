const ownerID = "138056116880932864" // Use your own ID.
const prefix = "owo^"

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix + "eval")) {
        if (message.author.id !== ownerID) {
            return message.channel.send("nope");
        }
        try {
            const code = args.join(" ");
            let evaled = eval(code);

            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);

            message.channel.send(evaled), { code: "xl" };
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
        }
    }
};
