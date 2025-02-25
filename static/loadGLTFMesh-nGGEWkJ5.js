import{b as D,a4 as G,ga as O,bO as v,j6 as V,j7 as S,j8 as N,ep as h,bR as U,aI as q,bm as K,fi as Q}from"./index-DKbcOXvO.js";import{e as _}from"./mat3f64-q3fE-ZOt.js";import{w as k,m as H,f as J,i as W}from"./MeshComponent-CC6QSfeQ.js";import{p as X}from"./MeshVertexAttributes-Bv228uze.js";import{l as C}from"./meshVertexSpaceUtils-CfGZx6xv.js";import{c as A,x as I,L as Y,O as R,i as F,E as Z,T as ee,u as te}from"./BufferView-D2bmREm3.js";import{e as re,f as oe,s as ne,u as M}from"./vec3-BD8BDYjc.js";import{n as se,u as le,c as j}from"./vec4-Cb4Vvl8H.js";import{e as ae}from"./types-D0PSWh4d.js";import{loadGLTF as ie}from"./loader-BwUa72sZ.js";import{n as ue,o as fe,b as ce,l as pe}from"./indexUtils-iaiUoChQ.js";import{B as me}from"./vertexSpaceConversion-BzRKYr1N.js";import{n as de}from"./resourceUtils-C5mzIYAw.js";import"./meshProperties-C4iW0Ukm.js";import"./MeshLocalVertexSpace-G-ckTliX.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-DJFaUi3d.js";import"./quatf64-aQ5IuZRd.js";import"./Indices-BXKfqXXh.js";import"./spatialReferenceEllipsoidUtils-C9-_MkCK.js";import"./computeTranslationToOriginAndRotation-zNEjyUkY.js";import"./projectPointToVector-CdtaoGVc.js";import"./basicInterfaces-CZwQPxTp.js";function ye(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride,l=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*n,c=((r==null?void 0:r.srcIndex)??0)*s;for(let f=0;f<l;++f){for(let u=0;u<9;++u)i[a+u]=o[c+u];a+=n,c+=s}}Object.freeze(Object.defineProperty({__proto__:null,copy:ye},Symbol.toStringTag,{value:"Module"}));function ge(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,s=t.typedBufferStride,l=r?r.count:t.count;let a=((r==null?void 0:r.dstIndex)??0)*n,c=((r==null?void 0:r.srcIndex)??0)*s;for(let f=0;f<l;++f){for(let u=0;u<16;++u)i[a+u]=o[c+u];a+=n,c+=s}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t){P(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function P(e,t,r=3,i=r){const n=t.length/i;let o=0,s=0;for(let l=0;l<n;++l)e[o]=t[s],e[o+1]=t[s+1],e[o+2]=t[s+2],o+=r,s+=i}function z(e,t,r,i,n){const o=e.typedBuffer,s=e.typedBufferStride,l=(n==null?void 0:n.count)??e.count;let a=((n==null?void 0:n.dstIndex)??0)*s;for(let c=0;c<l;++c)o[a]=t,o[a+1]=r,o[a+2]=i,a+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:P,copyView:xe,fill:z},Symbol.toStringTag,{value:"Module"}));function Te(e,t){L(e.typedBuffer,t,e.typedBufferStride)}function L(e,t,r=4){const i=t.typedBuffer,n=t.typedBufferStride,o=t.count;let s=0,l=0;for(let a=0;a<o;++a)e[s]=i[l],e[s+1]=i[l+1],e[s+2]=i[l+2],e[s+3]=i[l+3],s+=r,l+=n}function $(e,t,r,i,n,o){const s=e.typedBuffer,l=e.typedBufferStride,a=(o==null?void 0:o.count)??e.count;let c=((o==null?void 0:o.dstIndex)??0)*l;for(let f=0;f<a;++f)s[c]=t,s[c+1]=r,s[c+2]=i,s[c+3]=n,c+=l}Object.freeze(Object.defineProperty({__proto__:null,copy:L,copyView:Te,fill:$},Symbol.toStringTag,{value:"Module"}));function x(e,t){return new e(new ArrayBuffer(t*e.ElementCount*ae(e.ElementType)))}async function Ze(e,t,r){const i=new ue($e(r)),n=(await ie(i,t,r,!0)).model,o=n.lods.shift(),s=new Map,l=new Map;n.textures.forEach((g,b)=>s.set(b,Be(g))),n.materials.forEach((g,b)=>l.set(b,we(g,s)));const a=he(o);for(const g of a.parts)ve(a,g,l);const{position:c,normal:f,tangent:u,color:p,texCoord0:m}=a.vertexAttributes,d=C(e,r),B=e.spatialReference.isGeographic?C(e):d,w=me({vertexAttributes:{position:c.typedBuffer,normal:f==null?void 0:f.typedBuffer,tangent:u==null?void 0:u.typedBuffer},vertexSpace:B,spatialReference:e.spatialReference},d,{allowBufferReuse:!0,sourceUnit:r!=null&&r.unitConversionDisabled?void 0:"meters"});if(!w)throw new D("load-gltf-mesh:vertex-space-projection",`Failed to load mesh from glTF because we could not convert the vertex space from ${B.type} to ${d.type}`);return{transform:null,vertexSpace:d,components:a.components,spatialReference:e.spatialReference,vertexAttributes:new X({...w,color:p==null?void 0:p.typedBuffer,uv:m==null?void 0:m.typedBuffer})}}function $e(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,i,n)=>{const o=(t==null?void 0:t(r))??r;return(await G(o,{responseType:i==="image"?"image":i==="binary"||i==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${O(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function be(e){return e!=null?e.toString():"-"}function he(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},i=new Map,n=new Map,o=[];for(const s of e.parts){const{position:l,normal:a,color:c,tangent:f,texCoord0:u}=s.attributes,p=`
      ${T(l,i)}/
      ${T(a,i)}/
      ${T(c,i)}/
      ${T(f,i)}/
      ${T(u,i)}/
      ${be(s.transform)}
    `;let m=!1;const d=O(n,p,()=>(m=!0,{start:t,length:l.count}));m&&(t+=l.count),a&&(r.normal=!0),c&&(r.color=!0),f&&(r.tangent=!0),u&&(r.texCoord0=!0),o.push({gltf:s,writeVertices:m,region:d})}return{vertexAttributes:{position:x(ee,t),normal:r.normal?x(F,t):null,tangent:r.tangent?x(A,t):null,color:r.color?x(I,t):null,texCoord0:r.texCoord0?x(te,t):null},parts:o,components:[]}}function Be(e){return new k({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new v(Re(e.color,e.opacity)),i=e.emissiveFactor?new v(Me(e.emissiveFactor)):null,n=o=>o?new W({scale:o.scale?[o.scale[0],o.scale[1]]:[1,1],rotation:K(o.rotation??0),offset:o.offset?[o.offset[0],o.offset[1]]:[0,0]}):null;return new H({color:r,colorTexture:t.get(e.colorTexture),normalTexture:t.get(e.normalTexture),emissiveColor:i,emissiveTexture:t.get(e.emissiveTexture),occlusionTexture:t.get(e.occlusionTexture),alphaMode:_e(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.metallicRoughnessTexture),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function ve(e,t,r){t.writeVertices&&Se(e,t);const{indices:i,attributes:n,primitiveType:o,material:s}=t.gltf;let l=fe(i||n.position.count,o);const a=t.region.start;if(a){const c=new Uint32Array(l);for(let f=0;f<l.length;f++)c[f]+=a;l=c}e.components.push(new J({name:t.gltf.name,faces:l,material:r.get(s),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function Se(e,t){const{position:r,normal:i,tangent:n,color:o,texCoord0:s}=e.vertexAttributes,l=t.region.start,{attributes:a,transform:c}=t.gltf,f=a.position.count;if(re(r.slice(l,f),a.position,c),a.normal!=null&&i!=null){const u=V(_(),c),p=i.slice(l,f);oe(p,a.normal,u),S(u)&&ne(p,p)}else i!=null&&z(i,0,0,1,{dstIndex:l,count:f});if(a.tangent!=null&&n!=null){const u=N(_(),c),p=n.slice(l,f);se(p,a.tangent,u),S(u)&&le(p,p)}else n!=null&&$(n,0,0,1,1,{dstIndex:l,count:f});if(a.texCoord0!=null&&s!=null?ce(s.slice(l,f),a.texCoord0):s!=null&&pe(s,0,0,{dstIndex:l,count:f}),a.color!=null&&o!=null){const u=a.color,p=o.slice(l,f);if(u.elementCount===4)u instanceof A?j(p,u,1,255):(u instanceof I||u instanceof Y)&&j(p,u,1/255,255);else{$(p,255,255,255,255);const m=R.fromTypedArray(p.typedBuffer,p.typedBufferStride);u instanceof F?M(m,u,1,255):(u instanceof R||u instanceof Z)&&M(m,u,1/255,255)}}else o!=null&&$(o.slice(l,f),255,255,255,255)}function _e(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:E(e.s),vertical:E(e.t)}}function E(e){switch(e){case h.CLAMP_TO_EDGE:return"clamp";case h.MIRRORED_REPEAT:return"mirror";case h.REPEAT:return"repeat"}}function y(e){return e**(1/Q)*255}function Re(e,t){return U(y(e[0]),y(e[1]),y(e[2]),t)}function Me(e){return q(y(e[0]),y(e[1]),y(e[2]))}export{Ze as loadGLTFMesh};
