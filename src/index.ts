import "reflect-metadata";
import {createConnection} from "typeorm";
import Index from "src/discordBot/index";


createConnection().then(async connection => {

    const discordBotIndex: Index = Index.getInstance();
    discordBotIndex.listen();

    // const teacher = new Teacher();
    // teacher.name = "Timber";
    // await connection.manager.save(teacher);
    // console.log("Saved a new user with id: " + teacher.id);
    //
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(Teacher);
    // console.log("Loaded users: ", users);
    //
    // client.on('message', msg => {
    //     if (msg.content === 'ping') {
    //         msg.channel.send('pong');
    //     }
    // });


}).catch(error => console.log(error));
