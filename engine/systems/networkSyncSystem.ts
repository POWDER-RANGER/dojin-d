/**
 * Dojin D -- Network Sync System
 * Rollback reconciliation and deterministic packet queuing for netcode.
 * Reads: InputBuffer, WorldState checksum
 * Writes: replication packet queue (consumed by WebSocket client)
 */

import { System } from "./system";

/** Network state held for a single frame. */
interface FrameState {
  frameNum: number;
  inputHash: number;   // CRC32 of input buffer
  worldHash: number;   // CRC32 of world snapshot
}

/** Queued replication packet for remote peers. */
interface ReplicationPacket {
  targetFrame: number;
  inputs: number[];    // Serialized input bytes
  stateHash: number;   // Hash for rollback verification
}

export class NetworkSyncSystem implements System {
  private pendingPackets: ReplicationPacket[] = [];
  private lastFrameStates: Map<number, FrameState> = new Map();
  private maxHistoryFrames: number = 60;

  /**
   * Main tick: collects inputs, reconciles rollbacks, queues packets.
   */
  update(dt: number): void {
    this.collectInputs();
    this.applyRollback();
    this.validateStateHashes();
    this.queueReplicationPackets();
  }

  /**
   * Reads from InputBuffer and serializes inputs for this frame.
   */
  private collectInputs(): void {
    // TODO: retrieve frame input from InputBuffer
    // TODO: compute CRC32 hash of input snapshot
  }

  /**
   * Reconciles rollback when local state diverges from authoritative.
   */
  private applyRollback(): void {
    // TODO: compare worldHash with server snapshot
    // TODO: revert to last matching FrameState if needed
  }

  /**
   * Validates deterministic hash agreement with authoritative source.
   */
  private validateStateHashes(): void {
    // TODO: log mismatch events to debug log
    // TODO: mark tick as non-deterministic if hashes diverge
  }

  /**
   * Builds replication packets for queued transmission.
   */
  private queueReplicationPackets(): void {
    // TODO: serialize inputs into ReplicationPacket structs
    // TODO: push to WebSocket outbound buffer
  }

  /**
   * Returns all queued packets and clears the queue (called by net transport).
   */
  drainPackets(): ReplicationPacket[] {
    const packets = this.pendingPackets;
    this.pendingPackets = [];
    return packets;
  }

  /** Records a FrameState snapshot for rollback history. */
  recordFrameState(state: FrameState): void {
    this.lastFrameStates.set(state.frameNum, state);
    this.pruneOldHistory(state.frameNum);
  }

  /** Looks up a previously recorded frame by number. */
  getFrameState(frameNum: number): FrameState | undefined {
    return this.lastFrameStates.get(frameNum);
  }

  /** Removes history older than maxHistoryFrames. */
  private pruneOldHistory(currentFrame: number): void {
    for (const [frame] of this.lastFrameStates) {
      if (frame < currentFrame - this.maxHistoryFrames) {
        this.lastFrameStates.delete(frame);
      }
    }
  }

  /** Sets the maximum number of frames to keep in rollback history. */
  setMaxHistoryFrames(frames: number): void {
    this.maxHistoryFrames = Math.max(1, frames);
  }
}
