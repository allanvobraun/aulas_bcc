import Response from "src/discordBot/Response";

interface Command {
    type: string;
    args: string[];
}
type ControllerCallback = (command: Command) => Promise<Response> | Response;
