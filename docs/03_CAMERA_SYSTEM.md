# Camera System Specification

## Authorities
- Camera is **non-authoritative** in netcode sync
- Camera state is derived, never replicated
- Simulation state must never depend on camera state

## Modes
- `FOLLOW` — tracks primary entity with smoothing
- `LOCK_ON` — orbits target with distance clamping
- `SPECTATOR` — free-form, event-directed
- `REPLAY` — deterministic reconstruction path

## Integration Points
- `RenderPipeline.render()` consumes camera transform
- `SpectatorSystem` overrides camera mode via event injection
- Debug mode forces `FOLLOW` with hitbox overlay
