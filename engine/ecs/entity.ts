/**
 * Dojin D — ECS Entity System
 * Entity: immutable opaque handle. Internally a packed EID (entity ID) bitmask.
 * Generation bits prevent stale references after entity recycling.
 * 
 * Layout (32-bit EID):
 *  - Bits  0-23:  index  (up to ~16M concurrent entities)
 *  - Bits 24-31:  gen    (entity generation, wraps per index slot)
 */

/** Entity handle — conforms to Handle pattern in deterministic ECS */
export type Entity = number;

/** Sentinel value for null / unassigned entity */
export const NULL_ENTITY: Entity = -1;

/**
 * Maximum valid entity index. Chosen to fit 24-bit index space
 * while keeping the upper 8 bits for generation rollover.
 */
export const MAX_ENTITY_INDEX = 0x00FFFFFF;

/**
 * Check if an Entity handle refers to a valid, non-null entity.
 * @param entity - The entity handle to validate
 * @returns true if entity is a positive non-null handle
 */
export function isValidEntity(entity: Entity): boolean {
  return entity > NULL_ENTITY;
}
