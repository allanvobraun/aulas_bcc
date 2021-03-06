import {getRepository} from "typeorm";
import {Class} from "src/entity/Class";
import ClassesResource from "src/discordBot/resources/ClassesResource";
import {Command} from "src/types/discord";
import Response from "src/discordBot/Response";

export default class ClassesController {
    static async index(command: Command): Promise<Response> {

        switch (command.args[0]) {
            case 'hoje':
                return ClassesController.today(command);
            case 'amanha':
                return ClassesController.tomorrow(command);
        }

        const classRepository = getRepository(Class);
        const classes = await classRepository.find({
            relations: ['course', 'course.teachers'],
            order: {
                day: 'ASC',
                startTime: 'ASC'
            }
        });
        return new ClassesResource(classes).resolve();
    }

    static async today(command: Command): Promise<Response> {
        const classRepository = getRepository(Class);
        const classes = await classRepository.find({
            relations: ['course', 'course.teachers'],
            where: {day: (new Date()).getDay() - 1},
            order: {
                startTime: 'ASC'
            }
        });

        return new ClassesResource(classes).resolve();
    }

    // TODO refatorar para tirar essa repetição
    static async tomorrow(command: Command): Promise<Response> {
        const classRepository = getRepository(Class);
        const classes = await classRepository.find({
            relations: ['course', 'course.teachers'],
            where: {day: (new Date()).getDay()},
            order: {
                startTime: 'ASC'
            }
        });

        return new ClassesResource(classes).resolve();
    }
}
