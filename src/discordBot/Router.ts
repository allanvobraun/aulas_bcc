import {UnknownRouteError} from "src/discordBot/exceptions/UnknownRouteError";
import {Command, ControllerCallback} from "src/types/discord";

export class Router {
    private static routeFunctionRecord: Record<string, ControllerCallback> = {};

    static make(endpoint: string, callback: ControllerCallback): void {
        this.routeFunctionRecord[endpoint] = callback;
    }

    static getCallbackForCommand(command: Command): ControllerCallback {
        const controllerCallback: ControllerCallback = Router.routeFunctionRecord[command.type];
        if (controllerCallback) {
            return controllerCallback;
        }

        throw new UnknownRouteError(command.type);
    }
}
