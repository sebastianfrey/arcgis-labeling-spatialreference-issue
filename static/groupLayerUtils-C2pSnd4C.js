import{P as l,$ as y}from"./utils-GVUev5lA.js";import{o as f}from"./jsonContext-CXFBlzff.js";import{a2 as v,a as d,f as s,i as I}from"./index-BPaEurMl.js";import{p as i}from"./resourceUtils-GM0fOEEX.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-BdGOG-5W.js";import"./resourceUtils-B8owz4CB.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:v(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function m(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),d(r,s.METADATA),I(r,o)}async function $(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:A,createJSONContext:t=>u(t,e),createItemData:m,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function b(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>u(a,e),createItemData:m,errorNamePrefix:P,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{$ as save,b as saveAs};