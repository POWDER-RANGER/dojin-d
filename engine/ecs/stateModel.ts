export interface WorldState {
    entities: Record<number, any>;
    frame: number;
    checksum: string;
}
