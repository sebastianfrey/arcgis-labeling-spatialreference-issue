import{K as f,aU as c,a4 as y,ad as S,ge as l,fy as p,av as R,aE as g}from"./index-DKbcOXvO.js";import{t as d}from"./query-BjWjpyMW.js";import{c as x}from"./AttributeBinsFeatureSet-CwxDCUav.js";import E from"./AttributeBinsQuery-fsjlXaIs.js";import"./pbfQueryUtils-BvVNb_8W.js";import"./pbf-GrhhwAw9.js";import"./queryUtils-hVslpV8d.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-DNz8ezTp.js";function J(n){const e=n.geometry,i=n.toJSON(),t=i;let r,a,o;if(e!=null&&(a=e.spatialReference,o=l(a),t.geometryType=p(e),t.geometry=JSON.stringify(e),t.inSR=o),i.outSR?(t.outSR=l(i.outSR),r=n.outSpatialReference):e&&(t.outSR=t.inSR,r=a),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),i.timeExtent){const s=i.timeExtent,{start:u,end:m}=s;u==null&&m==null||(t.time=u===m?u:`${u??"null"},${m??"null"}`),delete i.timeExtent}return n.defaultSpatialReference&&R(a,r)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function N(n,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await O(n,e,i)}async function O(n,e,i={}){const t=typeof n=="string"?f(n):n,r=e.geometry?[e.geometry]:[],a=await c(r,null,{signal:i.signal}),o=a==null?void 0:a[0];o!=null&&((e=e.clone()).geometry=o);const s=d({...t.query,f:"json",...J(e)});return y(S(t.path,"queryBins"),{...i,query:{...s,...i.query}})}async function h(n,e,i){const{data:t}=await N(g(n),E.from(e),i);return x.fromJSON(t)}export{h as executeAttributeBinsQuery};
