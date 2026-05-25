/**
 * Dojin D — ECS Component Store
 * Generic archetype storage for a single component type.
 * Unstructured map backing; systems query by entity handle.
 * Type parameter T is the component data shape.
 */

import { Entity } from "./entity";

/**
 * Dense component storage for a single component type.
 * Maps entity handles to component data. Supports set/get/delete/iteration.
 */
export class ComponentStore<T> {
  /** Internal sparse map: entityId -> component data */
  private data: Map<number, T> = new Map();

  /**
   * Attach a component to an entity.
   * Overwrites any existing value for this entity.
   * @param entity - Target entity handle
   * @param component - Component data instance
   */
  set(entity: Entity, component: T): void {
    this.data.set(entity, component);
  }

  /**
   * Retrieve a component for an entity, if present.
   * @param entity - Target entity handle
   * @returns Component data, or undefined if entity has no component of type T
   */
  get(entity: Entity): T | undefined {
    return this.data.get(entity);
  }

  /**
   * Remove a component from an entity.
   * @param entity - Target entity handle
   */
  delete(entity: Entity): void {
    this.data.delete(entity);
  }

  /**
   * Check if an entity has a component of this type.
   * @param entity - Target entity handle
   * @returns true if entity has a stored component
   */
  has(entity: Entity): boolean {
    return this.data.has(entity);
  }

  /**
   * Get the number of entities with a component of this type.
   */
  get size(): number {
    return this.data.size;
  }

  /**
   * Iterate over all [entity, component] pairs.
   * Intended for system query loops.
   */
  *entries(): IterableIterator<[number, T]> {
    yield* this.data.entries();
  }
}
