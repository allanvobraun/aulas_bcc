import {Router} from "src/discordBot/Router";
import ClassesController from "src/discordBot/controllers/ClassesController";

export function registerRoutes(): void {
    Router.make('ping', ClassesController.batata);
}
