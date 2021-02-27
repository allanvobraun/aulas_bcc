import "reflect-metadata";
import {createConnection} from "typeorm";
import Kernel from "src/discordBot/Kernel";

createConnection().then(connection => {
    const dicordBot: Kernel = Kernel.getInstance();
    dicordBot.listen();
}).catch(error => console.log(error));
