/**
 * Dojin D -- System Registration
 * Registers all ECS systems in deterministic update order.
 * Systems are added in priority: Test > SpatialGrid > Movement > Combat > NetworkSync.
 */

import { World } from "../ecs/world";
import { SpatialGridSystem } from "./spatialGridSystem";
import { MovementSystem } from "./movementSystem";
import { CombatSystem } from "./combatSystem";
import { NetworkSyncSystem } from "./networkSyncSystem";
import { TestSystem } from "./testSystem";

export function registerSystems(world: World): void {
  world.addSystem(new TestSystem());
  world.addSystem(new SpatialGridSystem());
  world.addSystem(new MovementSystem());
  world.addSystem(new CombatSystem());
  world.addSystem(new NetworkSyncSystem());
}
