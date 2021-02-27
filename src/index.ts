import "reflect-metadata";
import {createConnection} from "typeorm";
import Kernel from "src/discordBot/Kernel";

createConnection().then(async connection => {
    const discordBotIndex: Kernel = Kernel.getInstance();
    discordBotIndex.listen();
}).catch(error => console.log(error));
