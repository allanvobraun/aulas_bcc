import {MessageOptions} from "discord.js";

export default class Response {

    content: string;
    discordMessage: MessageOptions;

    constructor(content: string | object, options?: MessageOptions) {
        this.content = typeof content === 'string' ? content : this.toJson(content);
        this.discordMessage = options ?? {content: this.content};
        this.discordMessage.split = true;
    }

    resolve(): MessageOptions {
        return this.discordMessage;
    }

    protected toJson(content: object): string {
        this.discordMessage.code = 'json';
        return JSON.stringify(content, null, 2);
    }

}
