import{b as d,aE as c,eT as u,eU as f,a4 as g}from"./index-DKbcOXvO.js";async function $(t,s,i,e){if(!s)throw new d("start-reading:missing-guid","guid for version is missing");const a=c(t),r=u(a.query,{query:f({sessionId:i,f:"json"}),...e,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const o=`${a.path}/versions/${s}/startReading`,{data:n}=await g(o,r);return n||{success:!1}}export{$ as startReading};
