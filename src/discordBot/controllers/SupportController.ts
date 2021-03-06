import Response from "src/discordBot/Response";
import {embedHelp} from "src/discordBot/assets/BotEmbetCard";
import commandList from "src/discordBot/assets/commands.json";
import BaseController from "src/discordBot/controllers/BaseController";

class SupportController extends BaseController {

    async index(): Promise<Response> {
        return new Response("pong?");
    }

    async about(): Promise<Response> {
        return new Response('', {embed: embedHelp()});
    }

    async commands(): Promise<Response> {
        return new Response(commandList);
    }

}

export default SupportController;
