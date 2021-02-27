export default class ClassesController {
    static async batata(command: Command) : Promise<Response> {
        console.log("entrou na batata");
        return '```json\n{"batata": "arroz"}\n```';
    }
}
