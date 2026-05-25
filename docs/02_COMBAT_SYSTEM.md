# Combat System Specification

## Model
Frame-based, hitbox/hurtbox intersection, cancel-window validated.

## States
- IDLE
- STARTUP
- ACTIVE (hitbox live)
- RECOVERY
- HITSTUN
- BLOCKSTUN

## Resolution Order (per tick)
1. Input intake
2. State machine transitions
3. Hitbox activation
4. Intersection query (SpatialGrid)
5. Damage + state assignment
6. Powder Focus evaluation
7. Cancel window check
8. Event emit

## Powder Focus Integration
See `gameplay/combat/powderFocus.ts` for state machine.
Focus state modifies: `timeScale`, `cancel_priority`, `hitbox_extension`.

## Invariants
- CombatSystem never mutates position directly — delegates to MovementSystem
- All damage resolves through event bus, never direct state write
