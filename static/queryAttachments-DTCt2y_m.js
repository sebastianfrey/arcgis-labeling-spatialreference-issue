import{fI as h,fJ as i,as as p}from"./index-BPaEurMl.js";import{t as d}from"./query-DFHyY4-p.js";import{a as l}from"./AttachmentInfo-l3k_GIvM.js";import"./pbfQueryUtils-iExHIreZ.js";import"./pbf-6qAjFn40.js";function I(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function A(s,t){const e={};for(const o of t){const{parentObjectId:a,parentGlobalId:n,attachmentInfos:c}=o;for(const r of c){const{id:u}=r,f=h(i(`${s.path}/${a}/attachments/${u}`)),m=l.fromJSON(r);m.set({url:f,parentObjectId:a,parentGlobalId:n}),e[a]?e[a].push(m):e[a]=[m]}}return e}function g(s,t,e){let o={query:d({...s.query,f:"json",...I(t)})};return e&&(o={...e,...o,query:{...e.query,...o.query}}),p(s.path+"/queryAttachments",o).then(a=>a.data.attachmentGroups)}async function k(s,t,e){const{objectIds:o}=t,a=[];for(const n of o)a.push(p(s.path+"/"+n+"/attachments",e));return Promise.all(a).then(n=>o.map((c,r)=>({parentObjectId:c,attachmentInfos:n[r].data.attachmentInfos})))}export{g as executeAttachmentQuery,k as fetchAttachments,A as processAttachmentQueryResult};
