/**
 * RenderPipeline — read-only consumer of World snapshot
 * Must never mutate simulation state.
 */
export class RenderPipeline {
    render(world: any): void {
        // TODO: camera transform resolve
        // TODO: animation sampling from component state
        // TODO: vfx powder layer
        // TODO: post-processing chain
    }
}
