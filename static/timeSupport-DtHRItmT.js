const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./geometryEngineJSON-BwrklJA_.js","./geometryEngineBase-yFIvKOkM.js","./_commonjsHelpers-DCkdB7M8.js","./json-Wa8cmqdu.js"])))=>i.map(i=>d[i]);
import{lX as Z,dI as G,lY as v,lZ as D,l_ as J,l$ as H,lJ as F,lI as W,m0 as K,m1 as L,bR as M,m2 as O,bn as $,m3 as X,m4 as k,_ as z,s as b,gH as q,e9 as B}from"./index-Dc2kMMi_.js";import{x as Q}from"./queryUtils-C2HDji4l.js";const C=new G,ee=new G,w=new G,d={esriGeometryPoint:v,esriGeometryPolyline:D,esriGeometryPolygon:J,esriGeometryMultipoint:H};function Te(e,t,n,s=e.hasZ,i=e.hasM){if(t==null)return null;const r=e.hasZ&&s,l=e.hasM&&i;if(n){const u=F(w,t,e.hasZ,e.hasM,"esriGeometryPoint",n,s,i);return v(u,r,l)}return v(t,r,l)}function E(e,t,n,s,i,r,l=t,u=n){var c,m,I;const o=t&&l,a=n&&u,f=s!=null?"coords"in s?s:s.geometry:null;if(f==null)return null;if(i){let p=W(ee,f,t,n,e,i,l,u);return r&&(p=F(w,p,o,a,e,r)),((c=d[e])==null?void 0:c.call(d,p,o,a))??null}if(r){const p=F(w,f,t,n,e,r,l,u);return((m=d[e])==null?void 0:m.call(d,p,o,a))??null}return Z(C,f,t,n,l,u),((I=d[e])==null?void 0:I.call(d,C,o,a))??null}function Ge(e){return e&&x in e?JSON.parse(JSON.stringify(e,te)):e}const x="_geVersion",te=(e,t)=>e!==x?t:void 0;function A(e,t){return e?t?4:3:t?3:2}function Pe(e,t,n,s){if(!(t!=null&&t.lengths.length))return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,r=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:o}=t,a=A(n,s);let f=0;for(const c of u){const m=re(l,o,f,c,n,s);m&&r.push(m),f+=c*a}if(r.sort((c,m)=>{let I=c[2]-m[2];return I===0&&n&&(I=c[4]-m[4]),I}),r.length){let c=6*r[0][2];i[0]=r[0][0]/c,i[1]=r[0][1]/c,n&&(c=6*r[0][4],i[2]=c!==0?r[0][3]/c:0),(i[0]<l[0]||i[0]>l[1]||i[1]<l[2]||i[1]>l[3]||n&&(i[2]<l[4]||i[2]>l[5]))&&(i.length=0)}if(!i.length){const c=t.lengths[0]?ne(o,0,u[0],n,s):null;if(!c)return null;i[0]=c[0],i[1]=c[1],n&&c.length>2&&(i[2]=c[2])}return e}function re(e,t,n,s,i,r){const l=A(i,r);let u=n,o=n+l,a=0,f=0,c=0,m=0,I=0;for(let S=0,P=s-1;S<P;S++,u+=l,o+=l){const N=t[u],h=t[u+1],g=t[u+2],y=t[o],R=t[o+1],Y=t[o+2];let T=N*R-y*h;m+=T,a+=(N+y)*T,f+=(h+R)*T,i&&(T=N*Y-y*g,c+=(g+Y)*T,I+=T),N<e[0]&&(e[0]=N),N>e[1]&&(e[1]=N),h<e[2]&&(e[2]=h),h>e[3]&&(e[3]=h),i&&(g<e[4]&&(e[4]=g),g>e[5]&&(e[5]=g))}if(m>0&&(m*=-1),I>0&&(I*=-1),!m)return null;const p=[a,f,.5*m];return i&&(p[3]=c,p[4]=.5*I),p}function ne(e,t,n,s,i){const r=A(s,i);let l=t,u=t+r,o=0,a=0,f=0,c=0;for(let m=0,I=n-1;m<I;m++,l+=r,u+=r){const p=e[l],S=e[l+1],P=e[l+2],N=e[u],h=e[u+1],g=e[u+2],y=s?se(p,S,P,N,h,g):ie(p,S,N,h);if(y)if(o+=y,s){const R=oe(p,S,P,N,h,g);a+=y*R[0],f+=y*R[1],c+=y*R[2]}else{const R=le(p,S,N,h);a+=y*R[0],f+=y*R[1]}}return o>0?s?[a/o,f/o,c/o]:[a/o,f/o]:n>0?s?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function ie(e,t,n,s){const i=n-e,r=s-t;return Math.sqrt(i*i+r*r)}function se(e,t,n,s,i,r){const l=s-e,u=i-t,o=r-n;return Math.sqrt(l*l+u*u+o*o)}function le(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function oe(e,t,n,s,i,r){return[e+.5*(s-e),t+.5*(i-t),n+.5*(r-n)]}function ue(e){return e==="mesh"?K:L(e)}function j(e,t){return e?t?4:3:t?3:2}function ae(e,t,n,s){return U(e,t,n,s.coords[0],s.coords[1])}function ce(e,t,n,s,i,r){const l=j(i,r),{coords:u,lengths:o}=s;if(!o)return!1;for(let a=0,f=0;a<o.length;a++,f+=l)if(!U(e,t,n,u[f],u[f+1]))return!1;return!0}function U(e,t,n,s,i){if(!e)return!1;const r=j(t,n),{coords:l,lengths:u}=e;let o=!1,a=0;for(const f of u)o=fe(o,l,r,a,f,s,i),a+=f*r;return o}function fe(e,t,n,s,i,r,l){let u=e,o=s;for(let a=s,f=s+i*n;a<f;a+=n){o=a+n,o===f&&(o=s);const c=t[a],m=t[a+1],I=t[o],p=t[o+1];(m<l&&p>=l||p<l&&m>=l)&&c+(l-m)/(p-m)*(I-c)<r&&(u=!u)}return u}const _="unsupported-query",me={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},V={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function pe(e){return e!=null&&V.spatialRelationship[e]===!0}function Ie(e){return e!=null&&V.queryGeometry[B(e)]===!0}function Ne(e){return e!=null&&V.layerGeometry[e]===!0}function he(){return z(()=>import("./geometryEngineJSON-BwrklJA_.js").then(e=>e.g),__vite__mapDeps([0,1,2,3]),import.meta.url)}function Ee(e,t,n,s,i){if(M(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains")){const r=O(new G,t,!1,!1);return Promise.resolve(l=>ae(r,!1,!1,l))}if(M(t)&&n==="esriGeometryMultipoint"){const r=O(new G,t,!1,!1);if(e==="esriSpatialRelContains")return Promise.resolve(l=>ce(r,!1,!1,l,s,i))}if($(t)&&n==="esriGeometryPoint"&&(e==="esriSpatialRelIntersects"||e==="esriSpatialRelContains"))return Promise.resolve(r=>X(t,E(n,s,i,r)));if($(t)&&n==="esriGeometryMultipoint"&&e==="esriSpatialRelContains")return Promise.resolve(r=>k(t,E(n,s,i,r)));if($(t)&&e==="esriSpatialRelIntersects"){const r=ue(n);return Promise.resolve(l=>r(t,E(n,s,i,l)))}return he().then(r=>{const l=r[me[e]].bind(null,t.spatialReference,t);return u=>l(E(n,s,i,u))})}async function $e(e,t,n){var r;const{spatialRel:s,geometry:i}=e;if(i){if(!pe(s))throw new b(_,"Unsupported query spatial relationship",{query:e});if(q(i.spatialReference)&&q(n)){if(!Ie(i))throw new b(_,"Unsupported query geometry type",{query:e});if(!Ne(t))throw new b(_,"Unsupported layer geometry type",{query:e});if(e.outSR)return Q((r=e.geometry)==null?void 0:r.spatialReference,e.outSR)}}}function be(e){if($(e))return!0;if(M(e)){for(const t of e.rings)if(t.length!==5||t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1;return!0}return!1}async function _e(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:s,endTimeField:i}=e;let r=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(s&&i)await t.forEach(u=>{const o=n.getAttribute(u,s),a=n.getAttribute(u,i);o==null||isNaN(o)||(r=Math.min(r,o)),a==null||isNaN(a)||(l=Math.max(l,a))});else{const u=s||i;await t.forEach(o=>{const a=n.getAttribute(o,u);a==null||isNaN(a)||(r=Math.min(r,a),l=Math.max(l,a))})}return{start:r,end:l}}function ve(e,t,n){var o;if(!t||!e)return null;const{startTimeField:s,endTimeField:i}=e;if(!s&&!i)return null;const{start:r,end:l}=t;if(r===null&&l===null)return null;if(r===void 0&&l===void 0)return Re();const u=((o=n.getAttributeAsTimestamp)==null?void 0:o.bind(n))??n.getAttribute.bind(n);return s&&i?ye(u,s,i,r,l):ge(u,s||i,r,l)}function ye(e,t,n,s,i){return s!=null&&i!=null?r=>{const l=e(r,t),u=e(r,n);return(l==null||l<=i)&&(u==null||u>=s)}:s!=null?r=>{const l=e(r,n);return l==null||l>=s}:i!=null?r=>{const l=e(r,t);return l==null||l<=i}:void 0}function ge(e,t,n,s){return n!=null&&s!=null&&n===s?i=>e(i,t)===n:n!=null&&s!=null?i=>{const r=e(i,t);return r!=null&&r>=n&&r<=s}:n!=null?i=>{const r=e(i,t);return r!=null&&r>=n}:s!=null?i=>{const r=e(i,t);return r!=null&&r<=s}:void 0}function Re(){return()=>!1}export{be as I,Ee as P,E as a,_e as b,Ge as h,Pe as n,ve as t,$e as v,Te as y};