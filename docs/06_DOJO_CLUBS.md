# Dojo Clubs Specification

## Concept
Dojos are player-organized social + competitive units. Each Dojo may define custom rule contexts for matches hosted under their banner.

## Rule Engine
- Rulesets are modular, composable functions
- Versioned and shareable (JSON schema)
- Validated against sandbox constraints before activation

## Constraints
- All dojo rules must be deterministic
- Rules must not break rollback sync
- Rules must pass schema validation at load time

## Social Systems
- Dojo roster management
- Match history and record tracking
- Ranked ladder scoped per Dojo context

## Backend
See `services/dojo_backend/` for service layer.
