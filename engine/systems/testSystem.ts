import { System } from "./system";

export class TestSystem implements System {
    private t = 0;

    update(dt: number): void {
        this.t += dt;
    }
}
