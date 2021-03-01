import Discord from 'discord.js';
import dicordConfig from 'root/botConfig.json';

const client = new Discord.Client();
client.login(dicordConfig.BOT_TOKEN).then(() => {
    console.log("Discord bot loged");
});

export default client;


interface Humanoide {
    nome: string;

    falar(): void;
}

const roberto: Humanoide = {
    nome: '2222', falar(): void {
        console.log("oi");
    }
};


function humanoideFactory(): Humanoide {
    return {
        nome: '2222', falar(): void {
            console.log("oi");
        }
    };
}
