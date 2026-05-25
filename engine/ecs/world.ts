/**
 * Dojin D — ECS World
 * Central coordinator for system registration, update ticks, and render.
 * World owns the system array and drives the simulation tick loop.
 */

import { System } from "../systems/system";

/**
 * Main ECS world container.
 * Holds all systems and dispatches update() and render() calls per frame.
 */
export class World {
  /** Ordered array of registered systems */
  private systems: System[] = [];

  /** Current simulation tick number (for diagnostics and determinism) */
  private tick = 0;

  /**
   * Register a system into the world.
   * Systems execute in registration order on each tick.
   * @param system - System instance to register
   */
  addSystem(system: System): void {
    this.systems.push(system);
  }

  /**
   * Advance all systems by one simulation tick.
   * @param dt - Delta time in seconds (fixed timestep, typically 1/60)
   */
  update(dt: number): void {
    for (const system of this.systems) {
      system.update(dt);
    }
    this.tick++;
  }

  /**
   * Dispatch render() to all systems that implement it.
   * Render is separated from simulation; never mutates world state.
   */
  render(): void {
    for (const system of this.systems) {
      if ((system as any).render) {
        (system as any).render();
      }
    }
  }

  /** Current tick number since world initialization. */
  get currentTick(): number {
    return this.tick;
  }

  /** Number of systems registered in this world. */
  get systemCount(): number {
    return this.systems.length;
  }
}
