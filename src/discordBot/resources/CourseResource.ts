import {Course} from "src/entity/Course";
import JsonResourceCollection from "src/discordBot/resources/JsonResourceCollection";

export default class CoursesResource extends JsonResourceCollection {

    toObject(entity: Course): object {
        return {
            nome: entity.name,
        };
    }
}
