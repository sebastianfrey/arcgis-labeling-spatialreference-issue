import{au as r,c3 as e}from"./index-BPaEurMl.js";import{d as s}from"./queryTopFeatures-Bobhfe9X.js";import u from"./TopFeaturesQuery-BQqFPXGH.js";import"./query-DFHyY4-p.js";import"./pbfQueryUtils-iExHIreZ.js";import"./pbf-6qAjFn40.js";async function y(o,n,i){const m=r(o),a=await s(m,u.from(n),{...i}),t=a.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:a.data.count,extent:null}:{count:a.data.count,extent:e.fromJSON(t)}}export{y as executeForTopExtents};