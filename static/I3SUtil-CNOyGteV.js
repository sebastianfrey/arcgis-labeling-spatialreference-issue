import{jz as m,bL as u,as as d,lm as C,ln as g}from"./index-BPaEurMl.js";import"./mat4f64-CSKppSlJ.js";import"./projectVectorToVector-Bl1Gql_J.js";import"./sphere-aHz4UbGv.js";import{I as h}from"./I3SBinaryReader-C_NWimOf.js";import"./floatRGBA-DJAxlG7l.js";import"./NormalAttribute.glsl-D7pj7gRl.js";import"./interfaces-DDtDqZYj.js";import"./BindType-BmZEZMMh.js";import"./VertexAttribute-BdZWZuT1.js";import{I as A}from"./orientedBoundingBox-BSLKFfGm.js";var e;(function(n){n[n.TRANSPARENT=0]="TRANSPARENT",n[n.OPAQUE=1]="OPAQUE"})(e||(e={}));var S;(function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"})(S||(S={}));var E,p;(function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"})(E||(E={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(p||(p={}));function P(n){return{...x,...n,type:E.Solid}}const x={color:m(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:e.OPAQUE,hasSlicePlane:!1};m(0,0,0,.2),e.OPAQUE;u();var I;async function H(n,a,t,N,U,R,y,s){const c=[];for(const r of a)if(r&&U.includes(r.name)){const o=`${n}/nodes/${t}/attributes/${r.key}/0`;c.push({url:o,storageInfo:r})}const f=await Promise.allSettled(c.map(r=>d(r.url,{responseType:"array-buffer",query:{...y,token:R},signal:s==null?void 0:s.signal}).then(o=>h(r.storageInfo,o.data)))),l=[];for(const r of N){const o={};for(let i=0;i<f.length;i++){const T=f[i];if(T.status==="fulfilled"){const O=T.value;o[c[i].storageInfo.name]=L(O,r)}}l.push(o)}return l}(function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"})(I||(I={}));const D=-32768,_=-(2**31);function L(n,a){if(!n)return null;const t=n[a];return C(n)?t===D?null:t:g(n)?t===_?null:t:t!=t?null:t}P({color:[0,0,0,0],opacity:0});u();u();new A;new Array(72);export{H as V};
