import{$ as f,aE as m,as as y,dp as c,fo as s,e9 as S,ag as l,au as p,at as R}from"./index-Dc2kMMi_.js";import{t as g}from"./query-DyJVpaZZ.js";import d from"./BinsQuery-gbRZ06vI.js";import"./pbfQueryUtils-CzcxKm2b.js";import"./pbf-CpaD-NuG.js";import"./queryUtils-C2HDji4l.js";import"./json-Wa8cmqdu.js";function J(r){const e=r.geometry,a=r.toJSON(),t=a;let o,n,i;return e!=null&&(n=e.spatialReference,i=s(n),t.geometryType=S(e),t.geometry=JSON.stringify(e),t.inSR=i),a.outSR?(t.outSR=s(a.outSR),o=r.outSpatialReference):e&&(t.outSR=t.inSR,o=n),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),r.defaultSpatialReference&&l(n,o)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function N(r,e,a){return O(r,e,a)}async function O(r,e,a={}){const t=typeof r=="string"?f(r):r,o=e.geometry?[e.geometry]:[],n=await m(o,null,{signal:a.signal}),i=n==null?void 0:n[0];i!=null&&((e=e.clone()).geometry=i);const u=g({...t.query,f:"json",...J(e)});return y(c(t.path,"queryBins"),{...a,query:{...u,...a.query}})}async function B(r,e,a){const{data:t}=await N(p(r),d.from(e),a);return R.fromJSON(t)}export{B as executeBinsQuery};