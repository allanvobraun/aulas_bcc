import {Teacher} from "src/entity/Teacher";
import CourseResource from "src/discordBot/resources/CourseResource";
import JsonResourceCollection from "src/discordBot/resources/JsonResourceCollection";

export default class TeachersResource extends JsonResourceCollection {

    toObject(entity: Teacher): object {
        return {
            nome: entity.name,
            materias: new CourseResource(entity.courses).preFormat()
        };
    }
}
