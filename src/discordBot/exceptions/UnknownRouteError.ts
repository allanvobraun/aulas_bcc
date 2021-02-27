export class UnknownRouteError extends Error {
    constructor(command: string) {
        const message = `Unknown route to process the command ${command}`;
        super(message);

        this.name = 'UnknownRouteError';
    }
}
