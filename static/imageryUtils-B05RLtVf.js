import{P as o,$ as c}from"./utils-BuL2VgvA.js";import{l as p,c as u,u as g,E as s}from"./index-DKbcOXvO.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-GHE_62Qs.js";import"./saveUtils-i8KBblQs.js";const y="Image Service",v="imagery-layer-save",f="imagery-layer-save-as",d="imagery-tile-layer-save",I="imagery-tile-layer-save-as",l="WCS",T="wcs-layer-save",w="wcs-layer-save-as";function m(a){var t;if(a.type==="imagery"||a.type==="wcs")return{isValid:!0};const{raster:e}=a,r=(e==null?void 0:e.datasetFormat)==="Function"?(t=e.primaryRasters)==null?void 0:t.rasters[0]:e;return{isValid:(r==null?void 0:r.datasetFormat)==="RasterTileServer"&&(r.tileType==="Raster"||r.tileType==="Map"),errorMessage:"imagery tile layer should be created from a tiled image service."}}function n(a){const e=a.layerJSON;return Promise.resolve(e&&Object.keys(e).length?e:null)}async function x(a,e){const{parsedUrl:r,title:t,fullExtent:i}=a;e.url=r.path,e.title||(e.title=t);try{e.extent=await p(i)}catch{e.extent=void 0}u(e,s.METADATA),g(e,s.TILED_IMAGERY,a.type==="imagery-tile")}async function R(a,e){const r=a.type==="imagery"?v:a.type==="imagery-tile"?d:T,t=a.type==="wcs"?l:y;return o({layer:a,itemType:t,validateLayer:m,createItemData:n,errorNamePrefix:r},e)}async function S(a,e,r){const t=a.type==="imagery"?f:a.type==="imagery-tile"?I:w,i=a.type==="wcs"?l:y;return c({layer:a,itemType:i,validateLayer:m,createItemData:n,errorNamePrefix:t,newItem:e,setItemProperties:x},r)}export{R as save,S as saveAs};
