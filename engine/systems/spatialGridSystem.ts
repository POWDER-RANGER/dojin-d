/**
 * Dojin D -- Spatial Grid System
 * Broadphase spatial partitioning using uniform grid hashing.
 * Enables O(1) average-case neighbor queries for combat and movement.
 * Must clear() at the start of each simulation tick.
 */

/** Uniform grid configuration. */
interface SpatialConfig {
  cellSize: number;  // World-space cell dimension
  width: number;     // Grid width in cells
  height: number;    // Grid height in cells
}

export class SpatialGridSystem {
  private grid: Map<string, number[]> = new Map();
  private config: SpatialConfig;

  constructor(config: SpatialConfig = { cellSize: 10, width: 100, height: 100 }) {
    this.config = config;
  }

  /**
   * Hashes a world position to a grid key string.
   */
  private hash(x: number, y: number): string {
    const cx = Math.floor(x / this.config.cellSize);
    const cy = Math.floor(y / this.config.cellSize);
    return `${cx}:${cy}`;
  }

  /**
   * Inserts an entity id at the given world position.
   */
  insert(entity: number, x: number, y: number): void {
    const key = this.hash(x, y);
    if (!this.grid.has(key)) this.grid.set(key, []);
    this.grid.get(key)!.push(entity);
  }

  /**
   * Returns all entities in the same cell as the given position.
   */
  query(x: number, y: number): number[] {
    return this.grid.get(this.hash(x, y)) ?? [];
  }

  /**
   * Returns all entities in neighboring cells (for broadphase collision).
   */
  queryRadius(x: number, y: number, radius: number): number[] {
    const cellsX = Math.ceil(radius / this.config.cellSize);
    const cellsY = Math.ceil(radius / this.config.cellSize);
    const results = new Set<number>();

    for (let dx = -cellsX; dx <= cellsX; dx++) {
      for (let dy = -cellsY; dy <= cellsY; dy++) {
        const cx = Math.floor(x / this.config.cellSize) + dx;
        const cy = Math.floor(y / this.config.cellSize) + dy;
        const key = `${cx}:${cy}`;
        const entities = this.grid.get(key);
        if (entities) {
          for (const e of entities) results.add(e);
        }
      }
    }

    return Array.from(results);
  }

  /** Clears all cells. Must be called at the start of each simulation tick. */
  clear(): void {
    this.grid.clear();
  }

  /** Returns the total number of populated cells (for profiling). */
  cellCount(): number {
    return this.grid.size;
  }

  /** Returns the total number of entities currently in the grid. */
  entityCount(): number {
    let count = 0;
    for (const entities of this.grid.values()) {
      count += entities.length;
    }
    return count;
  }
}
