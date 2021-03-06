import {getRepository} from "typeorm";
import {Teacher} from "src/entity/Teacher";
import TeachersResource from "src/discordBot/resources/TeachersResource";
import {Command} from "src/types/discord";
import Response from "src/discordBot/Response";
import BaseController from "src/discordBot/controllers/BaseController";

export default class TeachersController extends BaseController {
    async index(command: Command): Promise<Response> {
        const teacherRepository = getRepository(Teacher);
        const teachers = await teacherRepository.find();
        return new TeachersResource(teachers).resolve();
    }
}
