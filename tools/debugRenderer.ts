/**
 * DebugRenderer — visual simulation state validation
 * Read-only. Must never affect simulation state.
 */
export class DebugRenderer {
    drawHitbox(x: number, y: number, size: number): void {
        // visual overlay only — no simulation mutation
    }

    drawEntity(id: number, x: number, y: number): void {
        console.log(`Entity ${id} at (${x.toFixed(3)}, ${y.toFixed(3)})`);
    }

    drawState(id: number, state: string): void {
        console.log(`Entity ${id} state: ${state}`);
    }
}
