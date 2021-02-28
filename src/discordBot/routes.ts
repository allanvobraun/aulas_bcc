import {Router} from "src/discordBot/Router";
import ClassesController from "src/discordBot/controllers/ClassesController";
import TeachersController from "src/discordBot/controllers/TeachersController";
import CoursesController from "src/discordBot/controllers/CoursesController";
import TestController from "src/discordBot/controllers/TestController";

export function registerRoutes(): void {
    Router.make('aulas', ClassesController.index);
    Router.make('professores', TeachersController.index);
    Router.make('materias', CoursesController.index);
    Router.make('teste', TestController.index);
}
