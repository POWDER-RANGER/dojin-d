import { World } from "../ecs/world";
import { registerSystems } from "../systems/registerSystems";

const FIXED_DT = 1 / 60;

const world = new World();
registerSystems(world);

let last = performance.now();
let acc = 0;

function frame(t: number): void {
    const dt = (t - last) / 1000;
    last = t;
    acc += dt;

    while (acc >= FIXED_DT) {
        world.update(FIXED_DT);
        acc -= FIXED_DT;
    }

    world.render();
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
