export class EntityManager {
    private nextId = 1;

    create(): number {
        return this.nextId++;
    }
}
