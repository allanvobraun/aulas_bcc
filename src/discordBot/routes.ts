import {Router} from "src/discordBot/Router";
import ClassesController from "src/discordBot/controllers/ClassesController";
import TeachersController from "src/discordBot/controllers/TeachersController";

export function registerRoutes(): void {
    Router.make('ping', ClassesController.batata);
    Router.make('professores', TeachersController.index);
}
