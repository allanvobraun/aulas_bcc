import client from "src/discordBot/discordContext";
import {Message} from "discord.js";
import {Router} from "src/discordBot/Router";
import {registerRoutes} from "src/discordBot/routes";

export default class Index {
    private static instance: Index;
    commandPrefix: string = "??";

    private constructor() {
        registerRoutes();
    }

    static getInstance(): Index {
        if (!Index.instance) {
            Index.instance = new Index();
        }
        return Index.instance;
    }

    resolveCommand(message: Message): Command {
        const commandBody = message.content.slice(this.commandPrefix.length);
        const [type, ...args] = commandBody.split(' ');
        return {
            type,
            args
        };
    }

    listen(): void {
        client.on("message", async (message: Message) => {
            if (message.author.bot) return;
            if (!message.content.startsWith(this.commandPrefix)) return;
            const command: Command = this.resolveCommand(message);

            const controllerCallback: ControllerCallback = Router.routeFunctionRecord[command.type];
            const response: Response = controllerCallback(command);
            await message.reply(response);
        });
    }
}
