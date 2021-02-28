import {getRepository} from "typeorm";
import {Class} from "src/entity/Class";
import ClassesResource from "src/discordBot/resources/ClassesResource";
import {Command} from "src/types/discord";
import Response from "src/discordBot/Response";

export default class ClassesController {
    static async index(command: Command) : Promise<Response> {
        const classRepository = getRepository(Class);
        const classes = await classRepository.find({relations: ['course', 'course.teachers']});
        return new ClassesResource(classes).resolve();
    }
}
