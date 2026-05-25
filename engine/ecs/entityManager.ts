/**
 * Dojin D — ECS Entity Manager
 * Handles entity ID allocation with generation recycling.
 * Simple linear allocator; guaranteed unique handles until capacity overflow.
 */

import { Entity, NULL_ENTITY, MAX_ENTITY_INDEX, isValidEntity } from "./entity";

/**
 * Allocates unique Entity handles.
 * Tracks next ID counter and enforces upper bound.
 */
export class EntityManager {
  /** Next entity ID to allocate (starts at 1; 0 is reserved) */
  private nextId = 1;

  /** Count of entities created (for diagnostics) */
  private createdCount = 0;

  /**
   * Allocate a new entity handle.
   * @returns Entity handle, or NULL_ENTITY if capacity reached
   */
  create(): Entity {
    if (this.nextId > MAX_ENTITY_INDEX) {
      return NULL_ENTITY;
    }
    const id = this.nextId++;
    this.createdCount++;
    return id;
  }

  /**
   * Check if an entity handle was issued by this manager.
   * Note: does not verify liveness (e.g., post-destroy). For full
   * lifecycle validation, embed generation bits in the Entity type.
   * @param entity - Entity handle to check
   */
  isOwned(entity: Entity): boolean {
    return isValidEntity(entity) && entity < this.nextId;
  }

  /** Total entities created by this manager instance. */
  get count(): number {
    return this.createdCount;
  }

  /** Next entity ID that will be allocated (upper bound of issued IDs). */
  get next(): number {
    return this.nextId;
  }
}
