/**
 * Dojin D -- Movement System
 * Deterministic position integration using semi-implicit Euler.
 * Reads: PositionComponent, VelocityComponent, StaminaComponent
 * Writes: PositionComponent (coordination via World tick)
 */

import { System } from "./system";

/** Movement policy flags for player state transitions. */
enum MovePolicy {
  FREE = 0,
  GROUNDED,
  AIR,
  WALLRUN,
  DASH_LOCK,
}

export class MovementSystem implements System {
  private currentPolicy: Map<number, MovePolicy> = new Map();

  /**
   * Advances entities one tick using velocity and delta time.
   * Respects stamina, ground/wall state, and dash locks.
   */
  update(dt: number): void {
    this.applyIntegration(dt);
    this.applyConstraints();
    this.applyStateTransitions();
  }

  /**
   * Semi-implicit Euler: pos += vel * dt; then position clamped to world bounds.
   */
  private applyIntegration(dt: number): void {
    // TODO: integrate Position from Velocity per entity
    // TODO: perform world-space clamp and collision response
  }

  /**
   * Applies stamina decay, enforces speed caps, and prevents overshoot.
   */
  private applyConstraints(): void {
    // TODO: clamp speed to max based on stamina state
    // TODO: mark entity as dash-locked during stamina penalty
  }

  /**
   * Transitions MovePolicy based on collision flags and input.
   */
  private applyStateTransitions(): void {
    // TODO: apply wall-run / air / grounded transitions
    // TODO: exit dash-lock when stamina recovers above threshold
  }

  /** Debug render hook for movement visualization (used by inspector). */
  render(): void {
    // optional debug lines for velocity / position history
  }

  /** Sets the move policy for a given entity id. */
  setPolicy(entityId: number, policy: MovePolicy): void {
    this.currentPolicy.set(entityId, policy);
  }

  /** Gets the current move policy for a given entity id. */
  getPolicy(entityId: number): MovePolicy | undefined {
    return this.currentPolicy.get(entityId);
  }

  /** Clears policies (useful between scene transitions). */
  clearPolicies(): void {
    this.currentPolicy.clear();
  }
}
