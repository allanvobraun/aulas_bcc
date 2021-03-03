import Response from "src/discordBot/Response";
import {embedHelp} from "src/discordBot/assets/BotEmbetCard";
import commandList from "src/discordBot/assets/commands.json";

export default class SupportController {

    static async index(): Promise<Response> {
        return new Response("pong?");
    }

    static async about(): Promise<Response> {
        return new Response('', {embed: embedHelp()});
    }

    static async commands(): Promise<Response> {
        return new Response(commandList);
    }

}
