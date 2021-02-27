import {Router} from "src/discordBot/Router";
import {batata} from "src/discordBot/controllers/testController";

export function registerRoutes(): void {
    Router.make('ping', batata);
}
