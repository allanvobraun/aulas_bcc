export default class JsonResouce implements ObjectSerializer {

    static transform(entity: object): Response {
        const instance = new this();
        const formatedObject = instance.toObject(entity);
        return instance.toJsonMarkdown(formatedObject);
    }

    static collection(entities: object[]): Response {
        const instance = new this();
        const formatedEntities: object[] = entities.map((entity: object) => instance.toObject(entity));
        return instance.toJsonMarkdown(formatedEntities);
    }

    toObject(entity: object): object {
        return entity;
    }

    toJsonMarkdown(formatedEntity: object): string {
        const stringEntity: string =  JSON.stringify(formatedEntity, null, 2);
        return `\`\`\`json\n${stringEntity}\n\`\`\``;
    }
}
