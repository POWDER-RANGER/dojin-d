# Spectator System

## Data Flow
```
Match → Event Stream → Director Layer → Broadcast Output
```

## Features
- Top-N match surfacing by engagement score
- Replay reconstruction from event graph
- Clip generation at combat resolution peaks
- Spectator count fed back to matchmaking priority

## API
See `services/spectator_api/`

## Constraints
- Spectator feed is delayed minimum 2 frames to prevent input scouting
- Broadcast output is read-only — no state injection from spectator layer
