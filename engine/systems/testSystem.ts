/**
 * Dojin D -- Test System
 * Accumulates elapsed simulation time for tick-accurate profiling.
 * Used for deterministic reproducibility checks and frame timing.
 */

import { System } from "./system";

export class TestSystem implements System {
  private tickTime: number = 0;

  /** Accumulates delta time for total elapsed time tracking. */
  update(dt: number): void {
    this.tickTime += dt;
  }

  /** Returns total elapsed time since engine start. */
  getElapsed(): number {
    return this.tickTime;
  }

  /** Resets elapsed time counter (use on scene restart). */
  reset(): void {
    this.tickTime = 0;
  }
}
