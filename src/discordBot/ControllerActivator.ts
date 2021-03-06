import {Handler} from "src/types/discord";
import SupportController from "src/discordBot/controllers/SupportController";
import BaseController from "src/discordBot/controllers/BaseController";

class ControllerActivator<Type extends BaseController, Key extends keyof Type> {
    controllerClassReference: new () => Type;
    controllerMethodName: keyof Type;

    constructor(controller: new () => Type, controllerMethodName: Key) {
        this.controllerClassReference = controller;
        this.controllerMethodName = controllerMethodName;
    }

    getControllerInstance(): Type {
        return new this.controllerClassReference();
    }

    getControllerBindedMethod(): Handler {
        const controller: Type = this.getControllerInstance();
        const method = controller[this.controllerMethodName] as unknown as Handler;
        return method.bind(controller);
    }

}


const act = new ControllerActivator(SupportController, 'about');


function builder<Type extends BaseController, Key extends keyof Type>(controller: new () => Type, controllerMethodName: Key): ControllerActivator<Type, Key> {
    return new ControllerActivator(controller, controllerMethodName);
}
builder(SupportController, "about");

export default ControllerActivator;
