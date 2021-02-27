interface Command {
    type: string;
    args: string[];
}
type Response = string;
type ControllerCallback = (command: Command) => Promise<Response>;
interface ObjectSerializer {
    toObject(entity: object): object;
}
