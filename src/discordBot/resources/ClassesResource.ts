import JsonResourceCollection from "src/discordBot/resources/JsonResourceCollection";
import {Class} from "src/entity/Class";

export default class ClassesResource extends JsonResourceCollection {

    toObject(entity: Class): object {
        return {
            materia: entity.course.name,
            professor: entity.course.teachers[0].name,
            inicio: entity.startTime,
            fim: entity.endTime,
            dia: entity.dia
        };
    }
}
