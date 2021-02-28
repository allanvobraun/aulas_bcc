import Response from "src/discordBot/Response";

interface Command {
    type: string;
    args: string[];
}
type Handler = (command: Command) => Promise<Response> | Response;
