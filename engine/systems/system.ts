/**
 * Dojin D — ECS System Contract
 * Abstract interface for all game systems.
 * Systems are registered with World and ticked in registration order.
 */

/**
 * Base system contract.
 * Every system must implement update(). render() is optional.
 * update() runs every fixed tick; must be deterministic.
 * render() is called after update; may be non-deterministic (e.g., VFX).
 */
export interface System {
  /**
   * Advance system simulation by dt.
   * Called every fixed timestep tick. Must be deterministic.
   * @param dt - Delta time in seconds
   */
  update(dt: number): void;

  /**
   * Optional render hook for debug visualization or cosmetic effects.
   * Render must never mutate ECS component state.
   */
  render?(): void;
}

/**
 * Declare a system as simulation-only (no render).
 * Useful for systems that only mutate ECS state.
 */
export interface SimulationSystem extends System {
  render?: never;
}

/**
 * Declare a system as render-only (no simulation update).
 * Useful for debug renderers and visual-only effects.
 */
export interface RenderOnlySystem extends System {
  update(dt: number): void;
}
