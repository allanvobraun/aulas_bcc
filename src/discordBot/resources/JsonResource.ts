export default abstract class JsonResource {

    entity: object;
    formatedEntity: object;

    protected constructor(entity: object) {
        this.entity = entity;
        this.tranformEntity();
    }

    protected abstract toObject(entity: object): object;

    resolve(): Response {
        return this.toJsonMarkdown();
    }

    preFormat(): object {
        return this.formatedEntity;
    }

    protected toJsonMarkdown(): string {
        const stringEntity: string = JSON.stringify(this.formatedEntity, null, 2);
        return `\`\`\`json\n${stringEntity}\n\`\`\``;
    }

    protected tranformEntity(): void {
        this.formatedEntity = this.toObject(this.entity);
    }
}
