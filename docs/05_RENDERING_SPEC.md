# Rendering Specification

## Core Rules
- Rendering **never mutates simulation state**
- Render pipeline consumes World snapshot — read only
- VFX layer is purely cosmetic and non-deterministic

## Pipeline Stages
1. Camera transform resolve
2. Animation sampling from component state
3. VFX powder layer (particle emission)
4. Post-processing chain (bloom, contrast, stylization)

## Hair + Cloth
- Simulated on render thread, not simulation thread
- No feedback loop into physics or combat

## Debug Mode
- Hitbox overlays drawn by `DebugRenderer`
- Entity position labels
- Frame counter + state labels
