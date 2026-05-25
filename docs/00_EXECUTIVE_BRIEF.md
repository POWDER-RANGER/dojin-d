# Dojin D — Executive Brief

## Project Identity
Dojin D is a deterministic, rollback-networked combat simulation built on a strict ECS runtime model. It is designed as a living system: every mechanic, rule, and service is versioned, executable, and traceable.

## Core Pillars
- **Deterministic simulation** — same input yields identical output across all clients
- **Rollback-first netcode** — input latency is masked; state is authoritative at server resolution
- **Dojo Rule Engine** — modular, composable, sandboxed rulesets per match context
- **Spectator pipeline** — event-stream-driven broadcast and clip generation
- **Governance layer** — anti-cheat, version enforcement, rule validation

## Current Status
`0.1.0-alpha` — ECS scaffold instantiated. Not yet playable. Implementation phase active.

## Vertical Slice Target
A controllable entity moving deterministically in fixed-timestep simulation with debug hitbox visualization and local rollback test harness.
