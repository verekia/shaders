// ----- ShaderMount ----- //
export { ShaderMount } from './shader-mount';

// ----- Fragment shaders ----- //

// Grain clouds
export { GrainClouds, grainCloudsPresets } from './shaders/grain-clouds';
export { type GrainCloudsProps } from './shaders/grain-clouds';
export { type GrainCloudsParams } from './shaders/grain-clouds';
export { type GrainCloudsUniforms } from '@paper-design/shaders';

// Mesh gradient
export { MeshGradient, meshGradientPresets } from './shaders/mesh-gradient';
export { type MeshGradientProps } from './shaders/mesh-gradient';
export { type MeshGradientParams } from './shaders/mesh-gradient';
export { type MeshGradientUniforms } from '@paper-design/shaders';

// Neuro noise
export { NeuroNoise, neuroNoisePresets } from './shaders/neuro-noise';
export { type NeuroNoiseProps } from './shaders/neuro-noise';
export { type NeuroNoiseParams } from './shaders/neuro-noise';
export { type NeuroNoiseUniforms } from '@paper-design/shaders';

// ----- Uniform conversion utils ----- //
export { getShaderColorFromString } from '@paper-design/shaders';
