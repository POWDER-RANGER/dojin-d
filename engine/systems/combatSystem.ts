/**
 * Dojin D — Combat System
 * Frame-based hitbox resolution. Reads hitbox/hurtbox/combat state components.
 * Writes damage events and state transitions via event bus.
 */

import { System } from "./system";

/** Combat state machine phases */
export enum CombatState {
  IDLE = 0,
  STARTUP,       // Attack buff active (powder leaves spawn)
  ACTIVE,        // Hitbox window open
  RECOVERY,      // Cooldown frames
  STUNNED        // Hit stun from opponent
}

/** Powders focus counter — builds towards powder move release */
export interface PowderFocus {
  level: number;       // Accumulated powder units (0-3)
  accumulator: number; // Sub-frame powder meter
  isReleasing: boolean;
}

/**
 * Combat system queries SpatialGrid for potential hitbox intersections,
 * validates cancel windows, and resolves damage via deterministic state updates.
 */
export class CombatSystem implements System {
  private hitBuffer: { attacker: number; defender: number; frame: number }[] = [];

  /**
   * Resolve combat for one simulation tick.
   * Pipeline: iterate active hitboxes -> spatial query -> cancel window check
   * -> powder focus state check -> apply damage -> push event.
   * @param dt - Delta time (fixed timestep)
   */
  update(dt: number): void {
    // Hitbox evaluation via SpatialGrid query
    // TODO: resolve SpatialGrid dependency injection
    for (const hit of this.hitBuffer) {
      if (hit.attacker > 0 && hit.defender > 0) {
        // Damage resolution stub
      }
    }
    this.hitBuffer = [];
  }

  /**
   * Queue a potential hit event for resolution this tick.
   * @param attacker - Entity owning the active hitbox
   * @param defender - Entity with overlapping hurtbox
   * @param frame - Frame number when hit was queued
   */
  queueHit(attacker: number, defender: number, frame: number): void {
    this.hitBuffer.push({ attacker, defender, frame });
  }

  render?(): void {
    // Debug: draw hitbox/hurtbox overlays in simulation coordinates
  }
}
