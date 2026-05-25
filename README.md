# Dojin D

> Deterministic ECS combat simulation · Rollback netcode · Dojo rule engine

**Version:** `0.1.0-alpha`  
**Status:** ECS scaffold instantiated — implementation phase active

---

## Architecture Overview

| Layer | Purpose |
|---|---|
| Concept | World rules, combat philosophy, aesthetic constraints |
| System | Movement, combat, camera, network, economy, dojo clubs |
| Runtime | ECS, fixed-timestep simulation, event bus |
| Infrastructure | Rollback netcode, rendering pipeline, matchmaking |
| Governance | Anti-cheat, rule validation, version enforcement |

---

## Repository Structure

```
dojin-d/
├── docs/          # Design bible, system specs, changelog
├── engine/        # ECS core, simulation loop, systems
├── netcode/       # Rollback, prediction, packet schema
├── gameplay/      # Combat, movement, dojo rules, AI sparring
├── rendering/     # Pipeline, shaders, VFX, camera FX
├── tools/         # Debug renderer, rules editor, replay viewer
├── services/      # Matchmaking, dojo backend, spectator API
└── tests/         # Determinism, rollback, benchmarks, exploits
```

---

## Vertical Slice Target

System is **playable** only when ALL are true:

**Simulation**
- [ ] Entities move deterministically
- [ ] Frame updates are fixed timestep (60Hz)
- [ ] State is fully reproducible from input logs

**Combat**
- [ ] Hit detection resolves consistently across runs
- [ ] At least 2 entities can interact (attack/defend state changes)

**Netcode (local simulation first)**
- [ ] Input buffer supports rewind
- [ ] Frame correction does not desync state

**Rendering**
- [ ] Debug visualization shows entity + hitbox state
- [ ] No coupling between render and simulation layers

---

## Build Order

1. `EntityManager` + `ComponentStore` wired
2. `MovementSystem` reading from ECS component data
3. `SpatialGridSystem` integrated into combat tick
4. `InputBuffer` wired into simulation tick
5. `CombatSystem` using spatial queries
6. `DebugRenderer` validation pass
7. Rollback simulation test harness

---

## Versioning

`MAJOR.MINOR.PATCH-STATE`

- **MAJOR** — structural redesign (engine, netcode, ECS)
- **MINOR** — feature addition (combat systems, dojo tools)
- **PATCH** — fixes, balance, optimization
- **STATE** — `alpha` · `beta` · `live` · `experimental`

---

## Living System Rules

- No concept exists without implementation mapping
- No system is added without dependency declaration
- No feature exists without ECS or service placement
- No update is valid without determinism check
