const ownerID = "138056116880932864"
const prefix = "owo^"
const prefix2 = "owo "

exports.run = (client, message, args) => {
    if (message.content.startsWith(prefix2 + "eval")) {
        if (message.author.id !== ownerID) {
            return message.channel.send("nope");
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
};

function clean(text) {
    if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
}
