import { System } from "./system";

/**
 * CombatSystem — frame-based hitbox resolution
 * Reads: HitboxComponent, HurtboxComponent, CombatStateComponent
 * Writes: CombatStateComponent, HealthComponent (via event bus)
 */
export class CombatSystem implements System {

    update(dt: number): void {
        // TODO: hitbox evaluation
        // TODO: hurtbox intersection via SpatialGrid
        // TODO: cancel window validation
        // TODO: powder focus state checks
        // TODO: resolve damage + state transitions via event emit
    }
}
