# Balance and Meta Specification

## Balance Philosophy
- No single dominant strategy — all routes have counter-routes
- Powder Focus is powerful but counterable in startup
- Meta evolves via Dojo rule variation, not only patch cycles

## Tools
- `tools/balance_simulator/` — offline match simulation for stat impact analysis
- `tools/replay_viewer/` — frame-level inspection of combat sequences

## Patch Protocol
- Balance changes are PATCH version increments
- Must pass determinism check post-patch
- Changelog entry required in `docs/CHANGELOG.md`
