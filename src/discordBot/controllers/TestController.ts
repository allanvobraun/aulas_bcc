import Response from "src/discordBot/Response";

export default class TestController {

    static async  index(): Promise<Response> {
        return new Response("pong");
    }

}
