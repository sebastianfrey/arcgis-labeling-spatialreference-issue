import{s as u,au as f,dr as c,ds as p,as as m}from"./index-BPaEurMl.js";async function g(i,s,o,r){if(!s)throw new u("post:missing-guid","guid for version is missing");const t=f(i),a=o.toJSON(),e=c(t.query,{query:p({...a,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:n}=await m(d,e);return n}export{g as deleteForwardEdits};