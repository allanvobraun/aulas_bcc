export default class BaseController {
    teste: string;

    constructor(teste?: string) {
        this.teste = teste ?? '';
    }

}
