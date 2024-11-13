import{ar as p,s as m,az as s}from"./index-BPaEurMl.js";import{p as a}from"./MeshVertexAttributes-BHU4fxRc.js";import{B as n}from"./vertexSpaceConversion-BtsofoDo.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-CSKppSlJ.js";import"./spatialReferenceEllipsoidUtils-DmQo40A6.js";import"./computeTranslationToOriginAndRotation-BnnGkffl.js";import"./projectPointToVector-12IhzQAt.js";import"./meshVertexSpaceUtils-OGYnu2ho.js";import"./MeshLocalVertexSpace-3IbSTvfD.js";import"./vec3-BIGuGZ_c.js";import"./BufferView-DmPu2JKY.js";import"./vec4-BhCMIgH9.js";async function E(r,o,t){await Promise.resolve(),p(t);const e=n(r,o,{useEllipsoid:t==null?void 0:t.useEllipsoid});if(!e)throw new m("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=r.cloneAndModifyVertexAttributes(new a({...e,uv:s(r.vertexAttributes.uv),color:s(r.vertexAttributes.color)}),o);return i.transform=null,i}export{E as convertMeshVertexSpace};
