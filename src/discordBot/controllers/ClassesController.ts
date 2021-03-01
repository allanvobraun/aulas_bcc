import {getRepository, Repository} from "typeorm";
import {Class} from "src/entity/Class";
import ClassesResource from "src/discordBot/resources/ClassesResource";
import {Command} from "src/types/discord";
import Response from "src/discordBot/Response";
import {container, inject, injectable, singleton} from "tsyringe";
import BaseController from "src/discordBot/controllers/BaseController";


@singleton()
@injectable()
export default class ClassesController extends BaseController {
    constructor(@inject('MinhaDependencia') repository: Repository<Class>) {
        super();
    }

    async index(command: Command): Promise<Response> {
        const classRepository = getRepository(Class);
        const classes = await classRepository.find({relations: ['course', 'course.teachers']});
        return new ClassesResource(classes).resolve();
    }
}


container.resolve(ClassesController);
