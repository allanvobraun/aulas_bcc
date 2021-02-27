import {Teacher} from "src/entity/Teacher";
import JsonResouce from "src/discordBot/resources/JsonResouce";

export default class TeacherResource extends JsonResouce {

    toObject(entity: Teacher): object {
        return {
            nome: entity.name,
        };
    }
}
