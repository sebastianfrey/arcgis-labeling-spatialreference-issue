import{dK as m,mf as _,mg as B,mh as b,mi as g,ar as S,mj as h,as as $,kQ as w,c0 as I,s as j,iR as l,b9 as R}from"./index-BPaEurMl.js";import{l as A,i as T}from"./Indices-E33-sfap.js";function O(e,t){d(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function d(e,t,f=2,o=f){const n=t.length/2;let r=0,a=0;if(m(t)||_(t)){for(let s=0;s<n;++s)e[r]=t[a],e[r+1]=t[a+1],r+=f,a+=o;return}const u=B(t);if(b(t))for(let s=0;s<n;++s)e[r]=Math.max(t[a]/u,-1),e[r+1]=Math.max(t[a+1]/u,-1),r+=f,a+=o;else for(let s=0;s<n;++s)e[r]=t[a]/u,e[r+1]=t[a+1]/u,r+=f,a+=o}function q(e,t,f,o){const n=e.typedBuffer,r=e.typedBufferStride,a=(o==null?void 0:o.count)??e.count;let u=((o==null?void 0:o.dstIndex)??0)*r;for(let s=0;s<a;++s)n[u]=t,n[u+1]=f,u+=r}Object.freeze(Object.defineProperty({__proto__:null,fill:q,normalizeIntegerBuffer:d,normalizeIntegerBufferView:O},Symbol.toStringTag,{value:"Module"}));function x(e,t){y(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function y(e,t,f=3,o=f){const n=t.length/o;let r=0,a=0;for(let u=0;u<n;++u)e[r]=t[a],e[r+1]=t[a+1],e[r+2]=t[a+2],r+=f,a+=o}function v(e,t,f,o,n){const r=e.typedBuffer,a=e.typedBufferStride,u=(n==null?void 0:n.count)??e.count;let s=((n==null?void 0:n.dstIndex)??0)*a;for(let i=0;i<u;++i)r[s]=t,r[s+1]=f,r[s+2]=o,s+=a}Object.freeze(Object.defineProperty({__proto__:null,copy:y,copyView:x,fill:v},Symbol.toStringTag,{value:"Module"}));function z(e,t){p(e.typedBuffer,t,e.typedBufferStride)}function p(e,t,f=4){const o=t.typedBuffer,n=t.typedBufferStride,r=t.count;let a=0,u=0;for(let s=0;s<r;++s)e[a]=o[u],e[a+1]=o[u+1],e[a+2]=o[u+2],e[a+3]=o[u+3],a+=f,u+=n}function M(e,t,f,o,n,r){const a=e.typedBuffer,u=e.typedBufferStride,s=(r==null?void 0:r.count)??e.count;let i=((r==null?void 0:r.dstIndex)??0)*u;for(let c=0;c<s;++c)a[i]=t,a[i+1]=f,a[i+2]=o,a[i+3]=n,i+=u}Object.freeze(Object.defineProperty({__proto__:null,copy:p,copyView:z,fill:M},Symbol.toStringTag,{value:"Module"}));class L{constructor(t){this._streamDataRequester=t}async loadJSON(t,f){return this._load("json",t,f)}async loadBinary(t,f){return g(t)?(S(f),h(t)):this._load("binary",t,f)}async loadImage(t,f){return this._load("image",t,f)}async _load(t,f,o){if(this._streamDataRequester==null)return(await $(f,{responseType:N[t]})).data;const n=await w(this._streamDataRequester.request(f,t,o));if(n.ok===!0)return n.value;throw I(n.error),new j("glt-loader-request-error",`Request for resource failed: ${n.error}`)}}const N={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function V(e,t){switch(t){case l.TRIANGLES:return U(e);case l.TRIANGLE_STRIP:return E(e);case l.TRIANGLE_FAN:return P(e)}}function U(e){return typeof e=="number"?A(e):R(e)?new Uint16Array(e):e}function E(e){const t=typeof e=="number"?e:e.length;if(t<3)return[];const f=t-2,o=T(3*f);if(typeof e=="number"){let n=0;for(let r=0;r<f;r+=1)r%2==0?(o[n++]=r,o[n++]=r+1,o[n++]=r+2):(o[n++]=r+1,o[n++]=r,o[n++]=r+2)}else{let n=0;for(let r=0;r<f;r+=1)r%2==0?(o[n++]=e[r],o[n++]=e[r+1],o[n++]=e[r+2]):(o[n++]=e[r+1],o[n++]=e[r],o[n++]=e[r+2])}return o}function P(e){const t=typeof e=="number"?e:e.length;if(t<3)return new Uint16Array(0);const f=t-2,o=f<=65536?new Uint16Array(3*f):new Uint32Array(3*f);if(typeof e=="number"){let u=0;for(let s=0;s<f;++s)o[u++]=0,o[u++]=s+1,o[u++]=s+2;return o}const n=e[0];let r=e[1],a=0;for(let u=0;u<f;++u){const s=e[u+2];o[a++]=n,o[a++]=r,o[a++]=s,r=s}return o}const k=2.1;export{M as a,O as b,x as c,k as d,z as e,v as f,d as g,y as h,q as l,L as n,V as o,p as t};
