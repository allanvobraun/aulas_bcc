import Discord from 'discord.js';
import dicordConfig from 'root/botConfig.json';

const client = new Discord.Client();
client.login(dicordConfig.BOT_TOKEN).then(() => {
    console.log("Discord bot loged");
});

export default client;
