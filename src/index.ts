import "reflect-metadata";
import {createConnection} from "typeorm";
import {Teacher} from "./entity/Teacher";

createConnection().then(async connection => {

    const teacher = new Teacher();
    teacher.name = "Timber";
    await connection.manager.save(teacher);
    console.log("Saved a new user with id: " + teacher.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Teacher);
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));
