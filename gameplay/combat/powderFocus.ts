/**
 * PowderFocus State Machine
 * Transitions: INACTIVE → CHARGING → ACTIVE → RECOVER → INACTIVE
 */
export enum PowderState {
    INACTIVE,
    CHARGING,
    ACTIVE,
    RECOVER
}

export interface PowderContext {
    state: PowderState;
    meter: number;       // 0.0 – 1.0
    timeScale: number;   // 1.0 = normal, < 1.0 = focus dilation
}

export function transitionPowder(ctx: PowderContext, input: { focus: boolean }, dt: number): PowderContext {
    switch (ctx.state) {
        case PowderState.INACTIVE:
            if (input.focus && ctx.meter >= 0.25) {
                return { ...ctx, state: PowderState.CHARGING };
            }
            return ctx;

        case PowderState.CHARGING:
            if (ctx.meter >= 1.0) {
                return { ...ctx, state: PowderState.ACTIVE, timeScale: 0.6 };
            }
            return { ...ctx, meter: Math.min(ctx.meter + dt * 0.5, 1.0) };

        case PowderState.ACTIVE:
            if (!input.focus || ctx.meter <= 0) {
                return { ...ctx, state: PowderState.RECOVER, timeScale: 1.0 };
            }
            return { ...ctx, meter: Math.max(ctx.meter - dt * 0.3, 0) };

        case PowderState.RECOVER:
            if (ctx.meter <= 0) {
                return { ...ctx, state: PowderState.INACTIVE };
            }
            return { ...ctx, meter: Math.max(ctx.meter - dt * 0.2, 0) };

        default:
            return ctx;
    }
}
