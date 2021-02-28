import {getRepository} from "typeorm";
import {Teacher} from "src/entity/Teacher";
import TeachersResource from "src/discordBot/resources/TeachersResource";

export default class TeachersController {
    static async index(command: Command): Promise<Response> {
        const teacherRepository = getRepository(Teacher);
        const teachers = await teacherRepository.find();
        return new TeachersResource(teachers).resolve();
    }
}
