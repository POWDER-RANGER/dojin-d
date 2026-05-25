import { System } from "../systems/system";

export class World {
    private systems: System[] = [];

    addSystem(system: System): void {
        this.systems.push(system);
    }

    update(dt: number): void {
        for (const system of this.systems) {
            system.update(dt);
        }
    }

    render(): void {
        for (const system of this.systems) {
            if ((system as any).render) {
                (system as any).render();
            }
        }
    }
}
