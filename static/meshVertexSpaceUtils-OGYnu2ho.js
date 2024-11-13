import{ao as p,ap as u,aj as l,aq as s}from"./index-BPaEurMl.js";import{a as f,b as d}from"./MeshLocalVertexSpace-3IbSTvfD.js";function a(){return l.getLogger("esri.geometry.Mesh")}function c(e){return e.origin!=null}function w(e){return c(e.vertexSpace)}function y(e,r){if(!c(e))return null;const[i,o,n]=e.origin;return new p({x:i,y:o,z:n,spatialReference:r})}function S(e,r){const{x:i,y:o,z:n,spatialReference:g}=e,t=[i,o,n??0];return(r==null?void 0:r.geographic)!==void 0&&(u(a(),"option: geographic",{replacement:"Use the `vertexSpace` option instead.",version:"4.29",warnOnce:!0}),r.vertexSpace&&a().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")),((r==null?void 0:r.vertexSpace)??x(r==null?void 0:r.geographic)??v(g))==="local"?new f({origin:t}):new d({origin:t})}function v(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function x(e){return e==null?void 0:e?"local":"georeferenced"}function $(e,r){return e.type===r.type&&(e.origin===r.origin||e.origin!=null&&r.origin!=null&&s(e.origin,r.origin))}export{c as a,w as g,$ as m,S as s,y as u};
