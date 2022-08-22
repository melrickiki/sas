require('events').EventEmitter.prototype._maxListeners = 100;
const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("BOT OK!")
});

Client.on("message", (message) => {
    if (message.content === "Bonjour") {
        message.channel.send("Bondook");
    }
});

Client.on("message", (message) => {
    if (message.content === "BABA") {
        message.channel.send("DOOK");
    }
});

Client.on("message", (message) => {
    if (message.content === "mdr") {
        message.channel.send("Mort dook rAwr");
    }
});

Client.on("message", (message) => {
    if (message.content === "Mdr") {
        message.channel.send("Mort dook rAwr");
    }
});

Client.on("message", (message) => {
    if (message.content === "Au revoir") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "bye") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "Bye") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "au revoir") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "en revoir") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "En revoir") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "Ciao") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "ciao") {
        message.channel.send("fils de baba dook💔");
    }
});

Client.on("message", (message) => {
    if (message.content === "pride") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994738984930517085/D9108AA3-C1E8-4B5A-BAA7-431B415BC978.jpeg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Pride") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994738984930517085/D9108AA3-C1E8-4B5A-BAA7-431B415BC978.jpeg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Babadook") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994740011800985640/babadook_dook_dook.jpg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "babadook") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994740011800985640/babadook_dook_dook.jpg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "babadookdook") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994740011800985640/babadook_dook_dook.jpg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Babadookdook") {
        message.channel.send(
            "https://cdn.discordapp.com/attachments/968876095875215430/994740011800985640/babadook_dook_dook.jpg"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Chaton") {
        message.channel.send(
            "BABADOOKDOOK HAHAHHAHAHAHHAHAHA DOOOK DOOOK BABABABBABABBA BABADOOK"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Pute") {
        message.channel.send(
            "slurp🥺🤪🤪🤪🤪"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Oui") {
        message.channel.send(
            "Dook"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Non") {
        message.channel.send(
            "Dook"
        );
    }
});

Client.on("message", (message) => {
    if (message.content === "Lol") {
        message.channel.send(
            "ldookl"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Salut") {
        message.channel.send(
            "Saldook" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "triste") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "mal") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "très mal") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "pas bien") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "je me sens pas bien") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Triste") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Mal") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Très mal") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Pas bien") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Je me sens pas bien") {
        message.channel.send(
            "que ce dook t'il ? Tu peux me parler je souis ton dook dook chery🥺🤪" + " " + message.author.username
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Putain") {
        message.channel.send(
            "Dookta Gueule"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "putain") {
        message.channel.send(
            "Dookta Gueule"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Qui est tu ?") {
        message.reply(
            "BADABADOOK LE BABAOUK QUI TE DOOK"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "caca") {
        message.reply(
            "Oui j'aime sa ouk"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Dook") {
        message.channel.send(
            "Dook Dook"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Dook dook") {
        message.channel.send(
            "Dook Dook Dook"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Dook dook dook") {
        message.channel.send(
            "Dook Dook Dook Dook"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Dook dook dook dook") {
        message.channel.send(
            "Dook Dook Dook Dook Dook"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Dook dook dook dook dook") {
        message.channel.send(
            "Dook Dook Dook Dook Dook Dook"
        );
    }
});

Client.on('message', (message) => {
    if (message.content === "Rafael") {
        message.channel.send(
            "Ook Ne Parle PAS de se Fils de Dook"
        );
    }
});

Client.login("OTk0NzE0MjY5Mzg2MDE0ODgx.GvhHHg.HAF8RsbC5au45xO6xPqDuTfzDQEvEanrlorOz0")