import {getRepository} from "typeorm";
import {Teacher} from "src/entity/Teacher";
import TeacherResource from "src/discordBot/resources/TeacherResource";

export default class TeachersController {
    static async index(command: Command): Promise<Response> {
        const teacherRepository = getRepository(Teacher);
        const teachers = await teacherRepository.find();
        return TeacherResource.collection(teachers);
    }
}
