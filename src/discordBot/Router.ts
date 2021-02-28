import {UnknownRouteError} from "src/discordBot/exceptions/UnknownRouteError";
import {Command, Handler} from "src/types/discord";

export class Router {
    private static routeFunctionRecord: Record<string, Handler> = {};

    static make(endpoint: string, callback: Handler): void {
        this.routeFunctionRecord[endpoint] = callback;
    }

    static getHandlerForCommand(command: Command): Handler {
        const controllerCallback: Handler = Router.routeFunctionRecord[command.type];
        if (controllerCallback) {
            return controllerCallback;
        }

        throw new UnknownRouteError(command.type);
    }
}
