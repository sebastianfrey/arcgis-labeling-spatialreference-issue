const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./resourceUtils-B8owz4CB.js","./index-BPaEurMl.js","./index-4QwrctH9.css"])))=>i.map(i=>d[i]);
import{eJ as g,_ as y,eK as S,ar as v,s as E,eL as P}from"./index-BPaEurMl.js";import{getSiblingOfSameTypeI as $,contentToBlob as m}from"./resourceUtils-B8owz4CB.js";async function T(s,t,o){const r=await w(s,t,o);await I(r,t,o)}async function b(s,t,o,r,a){const c=await w(o,r,a);await s.update({data:t}),await I(c,r,a)}async function w(s,t,o){if(!(t!=null&&t.resources))return;const r=t.portalItem===s.portalItem?new Set(s.paths):new Set;s.paths.length=0,s.portalItem=t.portalItem;const a=new Set(t.resources.toKeep.map(e=>e.resource.path)),c=new Set,f=[];a.forEach(e=>{r.delete(e),s.paths.push(e)});const u=[],h=[],p=[];for(const e of t.resources.toUpdate)if(r.delete(e.resource.path),a.has(e.resource.path)||c.has(e.resource.path)){const{resource:n,content:_,finish:d}=e,i=$(n,g());s.paths.push(i.path),u.push({resource:i,content:await m(_),compress:e.compress}),d&&p.push(()=>d(i))}else{s.paths.push(e.resource.path),h.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&p.push(()=>n(e.resource)),c.add(e.resource.path)}for(const e of t.resources.toAdd)if(s.paths.push(e.resource.path),r.has(e.resource.path))r.delete(e.resource.path);else{u.push({resource:e.resource,content:await m(e.content),compress:e.compress});const n=e.finish;n&&p.push(()=>n(e.resource))}if(u.length||h.length){const{addOrUpdateResources:e}=await y(()=>import("./resourceUtils-B8owz4CB.js"),__vite__mapDeps([0,1,2]),import.meta.url);await e(t.portalItem,u,"add",o),await e(t.portalItem,h,"update",o)}if(p.forEach(e=>e()),f.length===0)return r;const l=await S(f);if(v(o),l.length>0)throw new E("save:resources","Failed to save one or more resources",{errors:l});return r}async function I(s,t,o){if(!s||!t.portalItem)return;const r=[];for(const a of s){const c=t.portalItem.resourceFromPath(a);r.push(c.portalItem.removeResource(c,o))}await P(r)}export{b as n,T as p};
