import{ag as p,dS as e}from"./index-Dc2kMMi_.js";import{b as s}from"./MeshLocalVertexSpace-DoCW1AnK.js";import{B as m}from"./vertexSpaceConversion-CcuBlIRs.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-D72atvxW.js";import"./computeTranslationToOriginAndRotation-C_1CYyk2.js";import"./projectPointToVector-Bm0S2zMq.js";import"./meshVertexSpaceUtils-C4wFKkl_.js";import"./vec3-DyRn4nkJ.js";import"./BufferView-BL6uRKg_.js";import"./vec4-BJkFelv6.js";function d(t,i){const o=m(t,s.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};
