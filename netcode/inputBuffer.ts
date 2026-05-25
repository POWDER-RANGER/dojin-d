/**
 * InputBuffer — deterministic replay and correction core
 * Stores per-frame inputs; supports rewind for rollback.
 */
export class InputBuffer {
    private buffer: Map<number, any> = new Map();

    store(frame: number, input: any): void {
        this.buffer.set(frame, input);
    }

    get(frame: number): any {
        return this.buffer.get(frame);
    }

    rewind(toFrame: number): void {
        for (const key of Array.from(this.buffer.keys())) {
            if (key > toFrame) this.buffer.delete(key);
        }
    }
}
