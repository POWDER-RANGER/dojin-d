/**
 * SpatialGridSystem — broadphase collision reduction
 * Enables fast hitbox queries for combat resolution.
 * Clear() must be called at start of each simulation tick.
 */
export class SpatialGridSystem {
    private grid: Map<string, number[]> = new Map();

    private hash(x: number, y: number): string {
        return `${Math.floor(x)}:${Math.floor(y)}`;
    }

    insert(entity: number, x: number, y: number): void {
        const key = this.hash(x, y);
        if (!this.grid.has(key)) this.grid.set(key, []);
        this.grid.get(key)!.push(entity);
    }

    query(x: number, y: number): number[] {
        return this.grid.get(this.hash(x, y)) ?? [];
    }

    clear(): void {
        this.grid.clear();
    }
}
