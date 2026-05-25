/**
 * Deterministic physics primitives.
 * No Math.random() — all entropy must be externally seeded.
 */

export function integrate(position: number, velocity: number, dt: number): number {
    return position + velocity * dt;
}

export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, value));
}
