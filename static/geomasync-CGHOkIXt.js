const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./unitConversion-CzRBBR1u.js","./executionError-DhMmVYP7.js","./index-DKbcOXvO.js","./index-C9zlu8m2.css"])))=>i.map(i=>d[i]);
import{hL as d,aC as y,hK as v,aa as R,cf as M,_ as Q,aq as b,cg as L,cW as X,P as B}from"./index-DKbcOXvO.js";import{j as S,P as Y,x as T,I as $,R as nn,t as z,c as x}from"./arcade-BfFnI3OG.js";import{a as o,r as s}from"./executionError-DhMmVYP7.js";import{o as O}from"./TimeOnly-D9V4gdT1.js";import{F as f,o as m,g as V,h as W,i as H,y as Z,a as J,A as q,B as D,J as E,M as U,R as k,b as P,Z as tn,q as j,j as C}from"./languageUtils-Dw31acRB.js";import{l as K}from"./portalUtils-CNcb9VMc.js";import{a as u}from"./operatorsWorkerConnection-Cc8ZsYxW.js";import{r as G}from"./utils-DuPJhWsX.js";import"./WhereClause-CwBWhUUt.js";import"./unitConversion-CzRBBR1u.js";import"./number-BXlzBnh7.js";function g(i){if(i==null)return i;switch(typeof i){case"string":case"number":return i;default:throw new o(null,s.InvalidParameter,null)}}function hn(i){i.mode==="async"&&(i.functions.disjoint=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]===null||n[1]===null||u("disjoint",[n[0].toJSON(),n[1].toJSON()])))},i.functions.intersects=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("intersects",[n[0].toJSON(),n[1].toJSON()])))},i.functions.touches=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("touches",[n[0].toJSON(),n[1].toJSON()])))},i.functions.crosses=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("crosses",[n[0].toJSON(),n[1].toJSON()])))},i.functions.within=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("within",[n[0].toJSON(),n[1].toJSON()])))},i.functions.contains=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("contains",[n[0].toJSON(),n[1].toJSON()])))},i.functions.overlaps=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(n=f(n),S(n,t,e),n[0]!==null&&n[1]!==null&&u("overlaps",[n[0].toJSON(),n[1].toJSON()])))},i.functions.equals=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>(m(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?u("equals",[n[0].toJSON(),n[1].toJSON()]):(V(n[0])&&V(n[1])||!!(W(n[0])&&W(n[1])||H(n[0])&&H(n[1])))&&n[0].equals(n[1]))))},i.functions.relate=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>{if(n=f(n),m(n,3,3,t,e),n[0]instanceof d&&n[1]instanceof d)return u("relate",[n[0].toJSON(),n[1].toJSON(),Z(n[2])]);if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new o(t,s.InvalidParameter,e)})},i.functions.intersection=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>(n=f(n),S(n,t,e),n[0]===null||n[1]===null?null:y(await u("intersection",[n[0].toJSON(),n[1].toJSON()]))))},i.functions.union=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if((n=f(n)).length===0)throw new o(t,s.WrongNumberOfParameters,e);const r=[];if(n.length===1)if(v(n[0])){for(const a of f(n[0]))if(a!==null){if(!(a instanceof d))throw new o(t,s.InvalidParameter,e);r.push(a.toJSON())}}else{if(!J(n[0])){if(n[0]instanceof d)return q(O(n[0]),t.spatialReference);if(n[0]===null)return null;throw new o(t,s.InvalidParameter,e)}for(const a of f(n[0].toArray()))if(a!==null){if(!(a instanceof d))throw new o(t,s.InvalidParameter,e);r.push(a.toJSON())}}else for(const a of n)if(a!==null){if(!(a instanceof d))throw new o(t,s.InvalidParameter,e);r.push(a.toJSON())}return r.length===0?null:y(await u("union",[r]))})},i.functions.difference=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>(n=f(n),S(n,t,e),n[0]===null?null:n[1]===null?O(n[0]):y(await u("difference",[n[0].toJSON(),n[1].toJSON()]))))},i.functions.symmetricdifference=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>(n=f(n),S(n,t,e),n[0]===null&&n[1]===null?null:n[0]===null?O(n[1]):n[1]===null?O(n[0]):y(await u("symmetricDifference",[n[0].toJSON(),n[1].toJSON()]))))},i.functions.clip=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,2,t,e),!(n[1]instanceof R)&&n[1]!==null)throw new o(t,s.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);return n[1]===null?null:y(await u("clip",[n[0].toJSON(),n[1].toJSON()]))})},i.functions.cut=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,2,t,e),!(n[1]instanceof M)&&n[1]!==null)throw new o(t,s.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);return n[1]===null?[O(n[0])]:(await u("cut",[n[0].toJSON(),n[1].toJSON()])).map(r=>y(r))})},i.functions.area=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(m(n,1,2,t,e),n=f(n),D(n[0])){const a=await n[0].sumArea(g(n[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new o(t,s.Cancelled,e);return a}let r=n[0];if((v(r)||J(r))&&(r=E(n[0],t.spatialReference)),r===null)return 0;if(!(r instanceof d))throw new o(t,s.InvalidParameter,e);return u("area",[r.toJSON(),g(n[1])])})},i.functions.areageodetic=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(m(n,1,2,t,e),n=f(n),D(n[0])){const a=await n[0].sumArea(g(n[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new o(t,s.Cancelled,e);return a}let r=n[0];if((v(n[0])||J(n[0]))&&(r=E(n[0],t.spatialReference)),r===null)return 0;if(!(r instanceof d))throw new o(t,s.InvalidParameter,e);return u("geodeticArea",[r.toJSON(),g(n[1])])})},i.functions.length=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(m(n,1,2,t,e),n=f(n),D(n[0])){const a=await n[0].sumLength(g(n[1]),!1,t.abortSignal);if(t.abortSignal.aborted)throw new o(t,s.Cancelled,e);return a}let r=n[0];if((v(n[0])||J(n[0]))&&(r=U(n[0],t.spatialReference)),r===null)return 0;if(!(r instanceof d))throw new o(t,s.InvalidParameter,e);return u("length",[r.toJSON(),g(n[1])])})},i.functions.length3d=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(m(n,1,2,t,e),(n=f(n))[0]===null)return 0;let r=n[0];if((v(n[0])||J(n[0]))&&(r=U(n[0],t.spatialReference)),r===null)return 0;if(!(r instanceof d))throw new o(t,s.InvalidParameter,e);if(r.hasZ===!0){const{convertFromSpatialReferenceUnit:a,toLengthUnit:w}=await Q(()=>import("./unitConversion-CzRBBR1u.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),h=Y(r);return a(r.spatialReference,w(n[1]),h)}return u("length",[r.toJSON(),g(n[1])])})},i.functions.lengthgeodetic=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(m(n,1,2,t,e),n=f(n),D(n[0])){const a=await n[0].sumLength(g(n[1]),!0,t.abortSignal);if(t.abortSignal.aborted)throw new o(t,s.Cancelled,e);return a}let r=n[0];if((v(n[0])||J(n[0]))&&(r=U(n[0],t.spatialReference)),r===null)return 0;if(!(r instanceof d))throw new o(t,s.InvalidParameter,e);return u("geodeticLength",[r.toJSON(),g(n[1])])})},i.functions.distance=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{n=f(n),m(n,2,3,t,e);let r=n[0];if((v(n[0])||J(n[0]))&&(r=k(n[0],t.spatialReference)),!(r instanceof d))throw new o(t,s.InvalidParameter,e);let a=n[1];if((v(n[1])||J(n[1]))&&(a=k(n[1],t.spatialReference)),!(a instanceof d))throw new o(t,s.InvalidParameter,e);return u("distance",[r.toJSON(),a.toJSON(),g(n[2])])})},i.functions.distancegeodetic=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{n=f(n),m(n,2,3,t,e);const r=n[0];if(!(r instanceof b))throw new o(t,s.InvalidParameter,e);const a=n[1];if(!(a instanceof b))throw new o(t,s.InvalidParameter,e);const w=new M({paths:[],spatialReference:r.spatialReference});return w.addPath([r,a]),u("geodeticLength",[w.toJSON(),g(n[2])])})},i.functions.densify=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);if(r<=0)throw new o(t,s.InvalidParameter,e);switch(n[0].type){case"polygon":case"polyline":case"extent":return y(await u("densify",[n[0].toJSON(),r,g(n[2])]));default:return n[0]}})},i.functions.densifygeodetic=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);if(r<=0)throw new o(t,s.InvalidParameter,e);switch(n[0].type){case"polygon":case"polyline":case"extent":return y(await u("geodeticDensify",[n[0].toJSON(),r,g(n[2])]));default:return n[0]}})},i.functions.generalize=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);const a=tn(j(n[2],!0));return y(await u("generalize",[n[0].toJSON(),r,g(n[3]),{removeDegenerateParts:a}]))})},i.functions.buffer=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);return r===0?O(n[0]):y(await u("buffer",[n[0].toJSON(),r,g(n[2])]))})},i.functions.buffergeodetic=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);return r===0?O(n[0]):y(await u("geodesicBuffer",[n[0].toJSON(),r,g(n[2])]))})},i.functions.offset=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof L||n[0]instanceof M))throw new o(t,s.InvalidParameter,e);const r=P(n[1]);if(isNaN(r))throw new o(t,s.InvalidParameter,e);const a=Z(n[3]??"round").toLowerCase();let w;switch(a){case"round":case"bevel":case"miter":case"square":w=a;break;default:w="round"}const h=P(j(n[4],10));if(isNaN(h))throw new o(t,s.InvalidParameter,e);const N=P(j(n[5],0));if(isNaN(N))throw new o(t,s.InvalidParameter,e);return y(await u("offset",[n[0].toJSON(),r,g(n[2]),{joins:w,miterLimit:h,flattenError:N}]))})},i.functions.rotate=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{var h;if(n=f(n),m(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);const r=n[0]instanceof R?L.fromExtent(n[0]):n[0],a=P(n[1]);if(isNaN(a))throw new o(t,s.InvalidParameter,e);const w=j(n[2],null);if(w===null){const N=r.type==="point"?r:(h=r.extent)==null?void 0:h.center;return y(await u("rotate",[r.toJSON(),a,N==null?void 0:N.x,N==null?void 0:N.y]))}if(w instanceof b)return y(await u("rotate",[r.toJSON(),a,w.x,w.y]));throw new o(t,s.InvalidParameter,e)})},i.functions.centroid=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,1,2,t,e),n[0]===null)return null;const r=Z(n[1]??"geometric").toLowerCase();if(r!=="geometric"&&r!=="labelpoint")throw new o(t,s.InvalidParameter,e);let a=n[0];if((v(n[0])||J(n[0]))&&(a=r==="geometric"?k(n[0],t.spatialReference):E(n[0],t.spatialReference),a===null))return null;if(!(a instanceof d))throw new o(t,s.InvalidParameter,e);return y(r==="geometric"?await u("centroid",[a.toJSON()]):await u("labelPoint",[a.toJSON()]))})},i.functions.measuretocoordinate=function(t,e){return i.standardFunctionAsync(t,e,T)},i.functions.pointtocoordinate=function(t,e){return i.standardFunctionAsync(t,e,$)},i.functions.distancetocoordinate=function(t,e){return i.standardFunctionAsync(t,e,nn)},i.functions.multiparttosinglepart=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);if(n[0]instanceof b)return[q(O(n[0]),t.spatialReference)];if(n[0]instanceof R)return[q(O(n[0]),t.spatialReference)];const r=y(await u("simplify",[n[0].toJSON()]));if(r instanceof L){const a=[],w=[];for(let h=0;h<r.rings.length;h++)if(r.isClockwise(r.rings[h])){const N=y({rings:[r.rings[h]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});a.push(N)}else w.push({ring:r.rings[h],pt:r.getPoint(h,0)});for(let h=0;h<w.length;h++)for(let N=0;N<a.length;N++)if(a[N].contains(w[h].pt)){a[N].addRing(w[h].ring);break}return a}if(r instanceof M){const a=[];for(let w=0;w<r.paths.length;w++){const h=y({paths:[r.paths[w]],hasZ:r.hasZ===!0,hasM:r.hasM===!0,spatialReference:r.spatialReference.toJSON()});a.push(h)}return a}if(n[0]instanceof X){const a=[],w=q(O(n[0]),t.spatialReference);for(let h=0;h<w.points.length;h++)a.push(w.getPoint(h));return a}return null})},i.functions.issimple=function(t,e){return i.standardFunctionAsync(t,e,(l,c,n)=>{if(n=f(n),m(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);return u("isSimple",[n[0].toJSON()])})},i.functions.simplify=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);return y(await u("simplify",[n[0].toJSON()]))})},i.functions.convexhull=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new o(t,s.InvalidParameter,e);return y(await u("convexHull",[n[0].toJSON()]))})},i.functions.getuser=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{var h,N;m(n,0,2,t,e);let r=j(n[1],""),a=r===!0;if(r=r===!0||r===!1?"":Z(r),n.length===0||n[0]instanceof z){let I;I=(h=t.services)!=null&&h.portal?t.services.portal:B.getDefault(),n.length>0&&(I=K(n[0],I));const F=await G(I,r,a);if(F){const A=JSON.parse(JSON.stringify(F));for(const p of["lastLogin","created","modified"])A[p]!==void 0&&A[p]!==null&&(A[p]=new Date(A[p]));return x.convertObjectToArcadeDictionary(A,C(t))}return null}let w=null;if(D(n[0])&&(w=n[0]),w){if(a=!1,r)return null;await w.load();const I=await w.getOwningSystemUrl();if(!I){if(!r){const p=await w.getIdentityUser();return p?x.convertObjectToArcadeDictionary({username:p},C(t)):null}return null}let F;F=(N=t.services)!=null&&N.portal?t.services.portal:B.getDefault(),F=K(new z(I),F);const A=await G(F,r,a);if(A){const p=JSON.parse(JSON.stringify(A));for(const _ of["lastLogin","created","modified"])p[_]!==void 0&&p[_]!==null&&(p[_]=new Date(p[_]));return x.convertObjectToArcadeDictionary(p,C(t))}return null}throw new o(t,s.InvalidParameter,e)})},i.functions.nearestcoordinate=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new o(t,s.InvalidParameter,e);if(!(n[1]instanceof b||n[1]===null))throw new o(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const r=n[0]instanceof R?L.fromExtent(n[0]):n[0],a=await u("getNearestCoordinate",[r.toJSON(),n[1].toJSON(),{calculateLeftRightSide:!0}]);return a===null?null:x.convertObjectToArcadeDictionary({coordinate:y(a.coordinate),distance:a.distance,sideOfLine:a.distance===0?"straddle":a.rightSide?"right":"left"},C(t),!1,!0)})},i.functions.nearestvertex=function(t,e){return i.standardFunctionAsync(t,e,async(l,c,n)=>{if(n=f(n),m(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new o(t,s.InvalidParameter,e);if(!(n[1]instanceof b||n[1]===null))throw new o(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const r=n[0]instanceof R?L.fromExtent(n[0]):n[0],a=await u("getNearestVertex",[r.toJSON(),n[1].toJSON()]);return a===null?null:x.convertObjectToArcadeDictionary({coordinate:y(a.coordinate),distance:a.distance,sideOfLine:a.distance===0?"straddle":a.rightSide?"right":"left"},C(t),!1,!0)})})}export{hn as registerFunctions};
