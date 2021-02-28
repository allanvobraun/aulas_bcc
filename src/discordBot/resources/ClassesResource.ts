import JsonResourceCollection from "src/discordBot/resources/JsonResourceCollection";
import {Class} from "src/entity/Class";
import {Course} from "src/entity/Course";

export default class ClassesResource extends JsonResourceCollection {

    toObject(entity: Class): object {
        const course: Course = entity.course;
        return {
            materia: course.name,
            inicio: entity.startTime,
            fim: entity.endTime
        };
    }
}
