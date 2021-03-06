import client from "src/discordBot/discordContext";
import {Message, MessageOptions} from "discord.js";
import Router from "src/discordBot/Router";
import {registerRoutes} from "src/discordBot/routes";
import Response from "src/discordBot/Response";
import {Command, Handler} from "src/types/discord";

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
        if (!message.content.startsWith(this.commandPrefix)) return;
        if (message.author.bot) return;

        try {
            const command: Command = this.resolveCommand(message);

            const handler: Handler = Router.getHandlerForCommand(command);
            const controllerResponse: Response = await handler(command);
            const discordMessage: MessageOptions = controllerResponse.resolve();
            await message.channel.send('', discordMessage);
        } catch (e) {
            console.log(e.message);
        }
    }
}
