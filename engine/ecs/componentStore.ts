export class ComponentStore<T> {
    private data: Map<number, T> = new Map();

    set(entity: number, component: T): void {
        this.data.set(entity, component);
    }

    get(entity: number): T | undefined {
        return this.data.get(entity);
    }

    delete(entity: number): void {
        this.data.delete(entity);
    }

    entries(): IterableIterator<[number, T]> {
        return this.data.entries();
    }
}
