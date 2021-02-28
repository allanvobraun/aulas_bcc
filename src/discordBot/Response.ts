import {MessageOptions} from "discord.js";

export default class Response {

    content: string | object;
    formatedContent: string;
    discordMessage: MessageOptions = {split: true};

    constructor(content: string | object, options?: MessageOptions) {
        this.content = content;
        this.discordMessage = options ?? this.discordMessage;
        this.formatedContent = '';
    }

    resolve(): MessageOptions {
        this.formatedContent = typeof this.content === 'object' ?
            this.toJsonString(this.content) :
            this.content as string;

        this.discordMessage.content = this.formatedContent;
        return this.discordMessage;
    }

    protected toJsonString(content: object): string {
        this.discordMessage.code = 'json';
        return JSON.stringify(content, null, 2);
    }

}
