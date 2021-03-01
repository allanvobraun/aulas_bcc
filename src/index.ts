import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import Kernel from "src/discordBot/Kernel";
import {container} from "tsyringe";
import {Class} from "src/entity/Class";


container.register('MinhaDependencia', {useFactory: () => getRepository(Class)});

createConnection().then(connection => {
    const dicordBot: Kernel = Kernel.getInstance();
    dicordBot.listen();
}).catch(error => console.log(error));
