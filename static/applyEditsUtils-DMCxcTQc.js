import{av as j,aw as x,ax as T,ay as X,az as h,aA as v,ak as F,b as G,aB as M,aC as Y}from"./index-DKbcOXvO.js";import{N as Z}from"./MeshTransform-DvRjNF6Y.js";import{isFeatureIdentifierArrayWithGlobalId as L,isFeatureIdentifierArrayWithObjectId as N}from"./editingSupport-DyW4W_CP.js";async function P(e,t,s){const{geometry:n}=t,a={...t.attributes};if(s!=null&&(n==null?void 0:n.type)==="mesh"){const{transformFieldRoles:r}=s,{origin:u,spatialReference:o,vertexSpace:p}=n,l=n.transform??new Z,d=p.type==="local",i=e.spatialReference,R=i.isGeographic,w=j(i,o),$=x(o,i)&&T(o,i);if(!(d&&R&&$||!d&&!R&&w))return null;const m=X(u,o,i);if(m==null)return null;if(a[r.originX]=m.x,a[r.originY]=m.y,a[r.originZ]=m.z??0,l!=null){const{translation:b,scale:I,rotation:f}=l,y=d?1:h(o)/h(i);a[r.translationX]=b[0]*y,a[r.translationY]=b[2]*y,a[r.translationZ]=-b[1]*y,a[r.scaleX]=I[0],a[r.scaleY]=I[2],a[r.scaleZ]=I[1],a[r.rotationX]=f[0],a[r.rotationY]=f[2],a[r.rotationZ]=-f[1],a[r.rotationDeg]=f[3]}return{attributes:a}}return n==null?{attributes:a}:n.type==="mesh"||n.type==="extent"?null:{geometry:n.toJSON(),attributes:a}}async function S(e,t){const s=await Promise.all((t.addAttachments??[]).map(r=>A(e,r))),n=await Promise.all((t.updateAttachments??[]).map(r=>A(e,r))),a=t.deleteAttachments??[];return s.length||n.length||a.length?{adds:s,updates:n,deletes:[...a]}:null}async function A(e,t){var d;const{feature:s,attachment:n}=t,{globalId:a,name:r,contentType:u,data:o,uploadId:p}=n,l={globalId:a};if(s&&("attributes"in s?l.parentGlobalId=(d=s.attributes)==null?void 0:d[e.globalIdField]:s.globalId&&(l.parentGlobalId=s.globalId)),p)l.uploadId=p;else if(o){const i=await v(o);i&&(l.contentType=i.mediaType,l.data=i.data),o instanceof File&&(l.name=o.name)}return r&&(l.name=r),u&&(l.contentType=u),l}function U(e,t,s){if(!t||t.length===0)return[];if(s&&L(t))return t.map(a=>a.globalId);if(N(t))return t.map(a=>a.objectId);const n=s?e.globalIdField:e.objectIdField;return n?t.map(a=>a.getAttribute(n)):[]}function W(e){var a,r,u;const t=e==null?void 0:e.assetMaps;if(t){for(const o of t.addResults)o.success||F.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`);for(const o of t.updateResults)o.success||F.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${o.globalId}.`)}const s=e==null?void 0:e.attachments,n={addFeatureResults:((a=e==null?void 0:e.addResults)==null?void 0:a.map(c))??[],updateFeatureResults:((r=e==null?void 0:e.updateResults)==null?void 0:r.map(c))??[],deleteFeatureResults:((u=e==null?void 0:e.deleteResults)==null?void 0:u.map(c))??[],addAttachmentResults:s!=null&&s.addResults?s.addResults.map(c):[],updateAttachmentResults:s!=null&&s.updateResults?s.updateResults.map(c):[],deleteAttachmentResults:s!=null&&s.deleteResults?s.deleteResults.map(c):[]};return e!=null&&e.editMoment&&(n.editMoment=e.editMoment),n}function c(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new G("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}function g(e,t){return new M({attributes:e.attributes,geometry:Y({...e.geometry,spatialReference:t})})}function k(e,t){var s,n,a;return{adds:((s=e==null?void 0:e.adds)==null?void 0:s.map(r=>g(r,t)))||[],updates:((n=e==null?void 0:e.updates)==null?void 0:n.map(r=>({original:g(r[0],t),current:g(r[1],t)})))||[],deletes:((a=e==null?void 0:e.deletes)==null?void 0:a.map(r=>g(r,t)))||[],spatialReference:t}}function B(e){const t=e.details.raw,s=+t.code,n=+t.extendedCode;return s===500&&(n===-2147217144||n===-2147467261)}export{k as I,c as R,U as b,S as f,B as j,P as m,W as y};
