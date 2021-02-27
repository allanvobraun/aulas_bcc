import client from "src/discordBot/discordContext";
import {Message} from "discord.js";
import {Router} from "src/discordBot/Router";
import {registerRoutes} from "src/discordBot/routes";

export default class Kernel {
    private static instance: Kernel;
    commandPrefix: string = "??";

    private constructor() {
        registerRoutes();
    }

    static getInstance(): Kernel {
        if (!Kernel.instance) {
            Kernel.instance = new Kernel();
        }
        return Kernel.instance;
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
        client.on("message", this.resolveClientMessages.bind(this));
    }

    private async resolveClientMessages(message: Message): Promise<void> {
        if (message.author.bot) return;
        if (!message.content.startsWith(this.commandPrefix)) return;

        try {
            const command: Command = this.resolveCommand(message);

            const controllerCallback: ControllerCallback = Router.getCallbackForCommand(command);
            const response: Response = controllerCallback(command);
            await message.reply(response);
        } catch (e) {
            console.log(e.message);
        }
    }
}
