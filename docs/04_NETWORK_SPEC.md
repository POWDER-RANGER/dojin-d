# Network Specification

## Architecture
- Rollback-first input model
- Server authoritative for conflict resolution
- Client-side prediction for responsiveness

## Sync Priority
1. Inputs (highest — never dropped)
2. Combat resolution
3. Position correction
4. Camera events (non-authoritative, lowest)

## Packet Schema
See `netcode/packet_schema/inputPacket.json`

## Rollback Model
- InputBuffer stores per-frame inputs with rewind capability
- Frame hash validation detects divergence
- Divergence triggers rollback; severe divergence triggers match reset

## Determinism Contract
- State hash must match across clients at each resolved frame
- No floating point accumulation without correction step
- All RNG seeded from server-issued entropy
