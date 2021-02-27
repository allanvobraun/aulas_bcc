export class Router {
    static routeFunctionRecord: Record<string, ControllerCallback> = {};

    static make(endpoint: string, callback: ControllerCallback): void {
        this.routeFunctionRecord[endpoint] = callback;
    }
}
