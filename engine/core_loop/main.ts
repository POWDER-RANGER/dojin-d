/**
 * Dojin D -- Core Game Loop
 * Fixed-timestep accumulator loop running at 60 Hz.
 * Ticks World.update() deterministically; calls render() for visual output.
 * This is the engine entry point used by the browser animation frame scheduler.
 */

import { World } from "../ecs/world";
import { registerSystems } from "../systems/registerSystems";

/** Simulation tick rate: 60 updates per second. */
const FIXED_DT: number = 1 / 60;

/** Global simulation world shared by all systems. */
const world: World = new World();

/** Registers all systems in deterministic order on startup. */
registerSystems(world);

/** Last frame timestamp in milliseconds. */
let lastFrameMs: number = performance.now();

/** Accumulator for fractional leftover time between fixed ticks. */
let timeAccumulator: number = 0;

/**
 * Main game loop: computes delta time, accumulates into fixed ticks,
 * then runs World update and render phases.
 */
function gameLoop(currentTime: number): void {
  const deltaMs: number = currentTime - lastFrameMs;
  lastFrameMs = currentTime;
  const deltaSec: number = deltaMs / 1000;
  timeAccumulator += deltaSec;

  while (timeAccumulator >= FIXED_DT) {
    world.update(FIXED_DT);
    timeAccumulator -= FIXED_DT;
  }

  world.render();
  requestAnimationFrame(gameLoop);
}

// Start the engine.
requestAnimationFrame(gameLoop);
