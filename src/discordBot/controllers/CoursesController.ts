import {getRepository} from "typeorm";
import {Course} from "src/entity/Course";
import CoursesResource from "src/discordBot/resources/CourseResource";
import {Command} from "src/types/discord";
import Response from "src/discordBot/Response";
import BaseController from "src/discordBot/controllers/BaseController";

export default class CoursesController extends BaseController {
    async index(command: Command): Promise<Response> {
        const coursesRepository = getRepository(Course);
        const courses = await coursesRepository.find();
        return new CoursesResource(courses).resolve();
    }
}
