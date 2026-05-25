/**
 * Dojin D — ECS State Model
 * Snapshot structure for deterministic rollback and replication.
 * WorldState is captured at each committed frame for hash comparison.
 */

import { Entity } from "./entity";

/**
 * Compact component subset for per-entity serialization.
 * Only fields that affect deterministic simulation are included.
 */
export interface SerializedEntityState {
  entityId: Entity;
  /** x, y position in simulation units */
  position: [number, number];
  /** x, y velocity vector */
  velocity: [number, number];
  /** Frame-aligned health (integer) */
  health: number;
  /** Current combat state enum value */
  combatState: number;
  /** Powder Focus accumulator */
  powderFocus: number;
}

/**
 * Full world state snapshot at a given frame.
 * Used for rollback reconciliation and deterministic verification.
 */
export interface WorldState {
  /** All entity states, keyed by entity ID */
  entities: Map<number, SerializedEntityState>;
  /** Simulation frame number (monotonic, tick-aligned) */
  frame: number;
  /** Deterministic hash of this state snapshot */
  checksum: string;
}

/**
 * Compute a deterministic checksum for a WorldState.
 * Implementation detail: network sync layer decides hash algorithm.
 * @param state - WorldState to hash
 * @returns Hex or base-64 encoded hash string
 */
export function computeWorldStateChecksum(state: WorldState): string {
  return state.checksum;
}
