import {UnknownRouteError} from "src/discordBot/exceptions/UnknownRouteError";
import {Command, Handler} from "src/types/discord";
import ControllerActivator from "src/discordBot/ControllerActivator";
import BaseController from "src/discordBot/controllers/BaseController";

class Router {
    private static routeControllerRecord: Record<string, ControllerActivator<any, any>> = {};

    static make<Type extends BaseController, Key extends keyof Type>
    (endpoint: string, controller: new () => Type, controllerMethod: Key): void {

        this.routeControllerRecord[endpoint] = new ControllerActivator<Type, Key>(controller, controllerMethod);
    }

    static getHandlerForCommand(command: Command): Handler {
        const controllerActivator = Router.routeControllerRecord[command.type];
        const controllerCallback = controllerActivator.getControllerBindedMethod();
        if (controllerCallback) {
            return controllerCallback;
        }

        throw new UnknownRouteError(command.type);
    }
}

export default Router;
