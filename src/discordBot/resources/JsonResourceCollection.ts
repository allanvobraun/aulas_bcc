import JsonResource from "src/discordBot/resources/JsonResource";

export default abstract class JsonResourceCollection extends JsonResource {

    entity: object[];
    formatedEntity: object[];

    constructor(entity: object) {
        super(entity);
    }

    protected tranformEntity(): void {
        this.formatedEntity = this.entity.map((entityObj: object) => this.toObject(entityObj));
    }

    abstract toObject(entity: object): object;
}
