interface Command {
    type: string;
    args: string[];
}
type Response = string;
type ControllerCallback = (command: Command) => Response;
