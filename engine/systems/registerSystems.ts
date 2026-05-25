import { World } from "../ecs/world";
import { MovementSystem } from "./movementSystem";
import { CombatSystem } from "./combatSystem";
import { NetworkSyncSystem } from "./networkSyncSystem";
import { TestSystem } from "./testSystem";

export function registerSystems(world: World): void {
    world.addSystem(new TestSystem());
    world.addSystem(new MovementSystem());
    world.addSystem(new CombatSystem());
    world.addSystem(new NetworkSyncSystem());
}
