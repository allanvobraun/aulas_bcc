import Response from "src/discordBot/Response";

export default abstract class JsonResource {

    entity: object;
    formatedEntity: object;

    protected constructor(entity: object) {
        this.entity = entity;
        this.tranformEntity();
    }

    resolve(): Response {
        return new Response(this.formatedEntity);
    }

    preFormat(): object {
        return this.formatedEntity;
    }

    protected abstract toObject(entity: object): object;

    protected tranformEntity(): void {
        this.formatedEntity = this.toObject(this.entity);
    }
}
