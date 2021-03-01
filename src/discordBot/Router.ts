import {UnknownRouteError} from "src/discordBot/exceptions/UnknownRouteError";
import {Command, Handler} from "src/types/discord";
import BaseController from "src/discordBot/controllers/BaseController";
import {container} from "tsyringe";
import ClassesController from "src/discordBot/controllers/ClassesController";

export class Router {
    private static routeFunctionRecord: Record<string, Handler> = {};

    static make(endpoint: string, classRef: typeof BaseController, handlerCallback: Handler): void {
        // TODO instanciar controller e fazer metodo para chamar o metodo com call dentro do router
        const instance: BaseController = container.resolve(classRef);
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
