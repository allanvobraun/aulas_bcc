import Discord from 'discord.js';
import dotenv from "dotenv";

dotenv.config();

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN).then(() => {
    console.log("Bot online!!!!!");
});

export default client;
