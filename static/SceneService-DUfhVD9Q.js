import{as as f,s as y,ak as l,al as d,eS as $,bC as _,dl as m,c3 as S,jC as P,eU as L,fm as O,am as U,g1 as K,jD as V,d as C,jE as M,jF as k,aj as w,jG as q,$ as z,an as F,a3 as J}from"./index-BPaEurMl.js";import{i as N}from"./originUtils-D69mHv66.js";import{o as A}from"./jsonContext-CXFBlzff.js";import{p as D,n as B}from"./resourceUtils-GM0fOEEX.js";import{t as Z}from"./saveUtils-BdGOG-5W.js";async function G(s,a,e,t,i,r,n){let o=null;if(e!=null){const h=`${s}/nodepages/`,j=h+Math.floor(e.rootIndex/e.nodesPerPage);try{return{type:"page",rootPage:(await f(j,{query:{f:"json",...t,token:i},responseType:"json",signal:n})).data,rootIndex:e.rootIndex,pageSize:e.nodesPerPage,lodMetric:e.lodSelectionMetricType,urlPrefix:h}}catch(E){r!=null&&r.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",j,E),o=E}}if(!a)return null;const p=a==null?void 0:a.split("/").pop(),c=`${s}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await f(u,{query:{f:"json",...t,token:i},responseType:"json",signal:n})).data,urlPrefix:c}}catch(h){throw new y("sceneservice:root-node-missing","Root node missing.",{pageError:o,nodeError:h,url:u})}}let H=null;function Q(){return H}const re=s=>{let a=class extends s{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=K(async(e,t,i)=>{switch(e){case g.SAVE:return this._save(t);case g.SAVE_AS:return this._saveAs(i,t)}})}readSpatialReference(e,t){return I(t)}readFullExtent(e,t,i){if(e!=null&&typeof e=="object"){const o=e.spatialReference==null?{...e,spatialReference:I(t)}:e;return S.fromJSON(o,i)}const r=t.store,n=I(t);return n==null||(r==null?void 0:r.extent)==null||!Array.isArray(r.extent)||r.extent.some(o=>o<x)?null:new S({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:n})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},i=e.split(".");return i.length>=2&&(t.major=parseInt(i[0],10),t.minor=parseInt(i[1],10)),t}readVersion(e,t){const i=t.store,r=i.version!=null?i.version.toString():"";return this.parseVersionString(r)}readTitlePortalItem(e){return this.sublayerTitleMode!=="item-title"?void 0:e}readTitleService(e,t){var n;const i=(n=this.portalItem)==null?void 0:n.title;if(this.sublayerTitleMode==="item-title")return this.url?V(this.url,t.name):t.name;let r=t.name;if(!r&&this.url){const o=C(this.url);o!=null&&(r=o.title)}return this.sublayerTitleMode==="item-title-and-service-name"&&i&&(r=i+" - "+r),M(r)}set url(e){if(e==null)return void this._set("url",e);const t=k({layer:this,url:e,nonStandardUrlAllowed:!1,logger:w.getLogger(this)});this._set("url",t.url),t.layerId!=null&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){q(this,e,"layers",t,r)}get parsedUrl(){const e=this._get("url"),t=z(e);return t&&this.layerId!=null&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){var i;this.indexInfo=G(((i=this.parsedUrl)==null?void 0:i.path)??"",this.rootNode,e,this.customParameters,this.apiKey,w.getLogger(this),t),this.fullExtent==null||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){var t,i,r,n;if((e==null?void 0:e.type)==="page"){const o=e.rootIndex%e.pageSize,p=(i=(t=e.rootPage)==null?void 0:t.nodes)==null?void 0:i[o];if(((r=p==null?void 0:p.obb)==null?void 0:r.center)==null||p.obb.halfSize==null)throw new y("sceneservice:invalid-node-page","Invalid node page.");if(p.obb.center[0]<x||this.fullExtent==null||this.fullExtent.hasZ)return;const c=p.obb.halfSize,u=p.obb.center[2],h=Math.sqrt(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);this.fullExtent.zmin=u-h,this.fullExtent.zmax=u+h}else if((e==null?void 0:e.type)==="node"){const o=(n=e.rootNode)==null?void 0:n.mbs;if(!Array.isArray(o)||o.length!==4||o[0]<x)return;const p=o[2],c=o[3],{fullExtent:u}=this;u&&(u.zmin=p-c,u.zmax=p+c)}}async _fetchService(e){if(this.url==null)throw new y("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(this.layerId==null&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);t!=null&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const t=await f(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(t.data&&Array.isArray(t.data.layers)&&t.data.layers.length>0)return t.data.layers[0].id}async _fetchServiceLayer(e){var n;const t=await f(((n=this.parsedUrl)==null?void 0:n.path)??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});t.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let i=!1;if(t.data.layerType&&t.data.layerType==="Voxel"&&(i=!0),i)return this._fetchVoxelServiceLayer();const r=t.data;this.read(r,this._getServiceContext()),this.validateLayer(r)}async _fetchVoxelServiceLayer(e){var i;const t=(await f(((i=this.parsedUrl)==null?void 0:i.path)+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,this._getServiceContext()),this.validateLayer(t)}_getServiceContext(){var e;return{origin:"service",portalItem:this.portalItem,portal:(e=this.portalItem)==null?void 0:e.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&typeof this.beforeSave=="function"&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const i={...T,...t};let r=F.from(e);if(!r)throw new y("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");r.id&&(r=r.clone(),r.id=null);const n=r.portal||J.getDefault();await this._ensureLoadBeforeSave(),r.type=b,r.portal=n;const o=A(r,"portal-item",!0),p={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(p,o,i),this.url&&(r.url=this.url),r.title||(r.title=this.title),R(r,i,v.newItem),await n.signIn(),await n.user.addItem({item:r,folder:i==null?void 0:i.folder,data:p}),await D(this.resourceReferences,o),this.portalItem=r,N(o),o.portalItem=r,r}async _save(e){const t={...T,...e};if(!this.portalItem)throw new y("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==b)throw new y("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${b}"`);await this._ensureLoadBeforeSave();const i=A(this.portalItem,"portal-item",!0),r={layers:[this.write({},i)]};return await Promise.all(i.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(r,i,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),R(this.portalItem,t,v.existingItem),await B(this.portalItem,r,this.resourceReferences,i),N(i),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const r=i==null?void 0:i.validationOptions;Z(t,{errorName:"sceneservice:save"},{ignoreUnsupported:r==null?void 0:r.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const n=r==null?void 0:r.enabled,o=Q();if(n&&o){const p=(await o()).validate(e,i.portalItemLayerType);if(!p.length)return;const c=`Layer item did not validate:
${p.join(`
`)}`;if(w.getLogger(this).error(`_validateAgainstJSONSchema(): ${c}`),r.failPolicy==="throw"){const u=p.map(h=>new y("sceneservice:schema-validation",h));throw new y("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:u})}}}};return l([d($)],a.prototype,"id",void 0),l([d({type:_})],a.prototype,"spatialReference",void 0),l([m("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readSpatialReference",null),l([d({type:S})],a.prototype,"fullExtent",void 0),l([m("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],a.prototype,"readFullExtent",null),l([d({readOnly:!0,type:P})],a.prototype,"heightModelInfo",void 0),l([d({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],a.prototype,"minScale",void 0),l([d({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],a.prototype,"maxScale",void 0),l([d({readOnly:!0})],a.prototype,"version",void 0),l([m("version",["store.version"])],a.prototype,"readVersion",null),l([d({type:String,json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),l([d({type:String,json:{read:!1}})],a.prototype,"sublayerTitleMode",void 0),l([d({type:String})],a.prototype,"title",void 0),l([m("portal-item","title")],a.prototype,"readTitlePortalItem",null),l([m("service","title",["name"])],a.prototype,"readTitleService",null),l([d({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],a.prototype,"layerId",void 0),l([d(L)],a.prototype,"url",null),l([O("url")],a.prototype,"writeUrl",null),l([d()],a.prototype,"parsedUrl",null),l([d({readOnly:!0})],a.prototype,"store",void 0),l([d({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],a.prototype,"rootNode",void 0),a=l([U("esri.layers.mixins.SceneService")],a),a},x=-1e38;function I(s){if(s.spatialReference!=null)return _.fromJSON(s.spatialReference);const a=s.store,e=a.indexCRS||a.geographicCRS,t=e&&parseInt(e.slice(e.lastIndexOf("/")+1),10);return t!=null?new _(t):null}function R(s,a,e){s.typeKeywords||(s.typeKeywords=[]);const t=a.getTypeKeywords();for(const i of t)s.typeKeywords.push(i);s.typeKeywords&&(s.typeKeywords=s.typeKeywords.filter((i,r,n)=>n.indexOf(i)===r),e===v.newItem&&(s.typeKeywords=s.typeKeywords.filter(i=>i!=="Hosted Service")))}var v;(function(s){s[s.existingItem=0]="existingItem",s[s.newItem=1]="newItem"})(v||(v={}));const b="Scene Service",T={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var g;(function(s){s[s.SAVE=0]="SAVE",s[s.SAVE_AS=1]="SAVE_AS"})(g||(g={}));export{re as R,g as V,G as r};
