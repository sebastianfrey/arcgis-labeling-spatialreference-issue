import{b as f,as as p,dE as T,cR as E,fQ as q,fr as P,ak as g,fR as y,dv as C,fv as I,fs as b,av as $,ft as j,fu as Q,fw as N}from"./index-DKbcOXvO.js";import{u as O}from"./executeQueryForSnapping-BlBDH5LB.js";import{f as k}from"./FeatureStore-BkhPTKVH.js";import{x as M,j as L}from"./queryUtils-hVslpV8d.js";import{L as v}from"./QueryEngine-c2k67wsL.js";import{o as A,e as U,K as _}from"./wfsUtils-BtlOeARy.js";import"./timeSupport-BntruWY7.js";import"./BoundsStore-Td1v9L83.js";import"./PooledRBush-CXSG86_C.js";import"./optimizedFeatureQueryEngineAdapter-DYyAz28g.js";import"./json-Wa8cmqdu.js";import"./WhereClauseCache-CXapBQXI.js";import"./WhereClause-CwBWhUUt.js";import"./TimeOnly-D9V4gdT1.js";import"./quantizationUtils-Deoeu4Gm.js";import"./utils-CI-74NtM.js";import"./utils-BZPv7EW8.js";import"./utils-D2kOaQ5M.js";import"./ClassBreaksDefinition-C4fAYFNG.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-DNz8ezTp.js";import"./xmlUtils-CtUoQO7q.js";const x="esri.layers.WFSLayer";class mt{constructor(){this._customParameters=null,this._queryEngine=null,this._supportsPagination=!0}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){const{getFeatureUrl:a,getFeatureOutputFormat:s,fields:i,geometryType:u,featureType:o,maxRecordCount:n,maxTotalRecordCount:c,maxPageCount:R,objectIdField:d,customParameters:F}=t,{spatialReference:h,getFeatureSpatialReference:m}=A(a,o,t.spatialReference);try{await M(m,h)}catch{throw new f("unsupported-projection","Projection not supported",{inSpatialReference:m,outSpatialReference:h})}p(e),this._customParameters=F,this._featureType=o,this._fieldsIndex=T.fromLayerJSON({fields:i,dateFieldsTimeReference:i.some(S=>S.type==="esriFieldTypeDate")?{timeZoneIANA:E}:null}),this._geometryType=u,this._getFeatureUrl=a,this._getFeatureOutputFormat=s,this._getFeatureSpatialReference=m,this._maxRecordCount=n,this._maxTotalRecordCount=c,this._maxPageCount=R,this._objectIdField=d,this._spatialReference=h;let l=await this._snapshotFeatures(e);if(l.errors.length>0&&(this._supportsPagination=!1,l=await this._snapshotFeatures(e),l.errors.length>0))throw l.errors[0];return this._queryEngine=new v({fieldsIndex:this._fieldsIndex,geometryType:u,hasM:!1,hasZ:!1,objectIdField:d,spatialReference:h,timeInfo:null,featureStore:new k({geometryType:u,hasM:!1,hasZ:!1})}),this._queryEngine.featureStore.addMany(l.features),{warnings:w(l),extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new f("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),(await this._queryEngine.executeQueryForIds(t,e.signal)).filter(q)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),O(this._queryEngine,t,e.signal)}async queryAttributeBins(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(t,e.signal)}async refresh(t){var e;return this._customParameters=t.customParameters,this._maxRecordCount=t.maxRecordCount,this._maxTotalRecordCount=t.maxTotalRecordCount,this._maxPageCount=t.maxPageCount,(e=this._snapshotTask)==null||e.abort(),this._snapshotTask=P(a=>this._snapshotFeatures({signal:a})),this._snapshotTask.promise.then(a=>{var s;this._queryEngine.featureStore.clear(),this._queryEngine.featureStore.addMany(a.features);for(const i of w(a))g.getLogger(x).warn(new y("wfs-layer:refresh-warning",i.message,i.details));(s=a.errors)!=null&&s.length&&g.getLogger(x).warn(new y("wfs-layer:refresh-error","Refresh completed with errors",{errors:a.errors}))},()=>{this._queryEngine.featureStore.clear()}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _snapshotFeatures(t){const e=t==null?void 0:t.signal,a=this._maxTotalRecordCount,s=this._maxPageCount,i=this._supportsPagination?await U(this._getFeatureUrl,this._featureType.typeName,{customParameters:this._customParameters,signal:e}):void 0;let u=[];const o=[];if(i==null)try{u=await this._singleQuery(e)}catch(n){C(n)||o.push(n)}else{const n=Math.min(i,a),c=Z(this,Math.max(1,Math.min(Math.ceil(n/this._maxRecordCount),s)),e);await Promise.allSettled(Array.from({length:10}).map(()=>J(c,u,o)))}return p(e),{features:u,totalRecordCount:i,maxTotalRecordCount:a,maxPageCount:s,errors:o}}async _singleQuery(t){const e=await _(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,signal:t});return this._processGeoJSON(e,{signal:t})}async _pageQuery(t,e){const a=t*this._maxRecordCount,s=await _(this._getFeatureUrl,this._featureType.typeName,this._getFeatureSpatialReference,this._getFeatureOutputFormat,{customParameters:this._customParameters,startIndex:a,count:this._maxRecordCount,signal:e});return this._processGeoJSON(s,{startIndex:a,signal:e})}_processGeoJSON(t,e){I(t,this._getFeatureSpatialReference.wkid);const{startIndex:a,signal:s}=e;p(s);const i=b(t,{geometryType:this._geometryType,hasZ:!1,objectIdField:this._objectIdField});if(!$(this._spatialReference,this._getFeatureSpatialReference))for(const o of i)o.geometry!=null&&(o.geometry=j(L(Q(o.geometry,this._geometryType,!1,!1),this._getFeatureSpatialReference,this._spatialReference)));let u=a??1;for(const o of i){const n={};N(this._fieldsIndex,n,o.attributes,!0),o.attributes=n,n[this._objectIdField]==null&&(o.objectId=n[this._objectIdField]=u++)}return i}}function*Z(r,t,e){for(let a=0;a<t;a++)yield r._pageQuery(a,e)}async function J(r,t,e){let a=r.next();for(;!a.done;){try{const s=await a.value;t.push(...s)}catch(s){C(s)||e.push(s)}a=r.next()}}function w(r){const t=[];return r.totalRecordCount!=null&&(r.features.length<r.totalRecordCount&&t.push({name:"wfs-layer:maxRecordCount-too-low",message:`Could only fetch ${r.features.length} of ${r.totalRecordCount} in ${r.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount}}),r.totalRecordCount>r.maxTotalRecordCount&&t.push({name:"wfs-layer:large-dataset",message:`The number of ${r.totalRecordCount} features exceeds the maximum allowed of ${r.maxTotalRecordCount}.`,details:{recordCount:r.features.length,totalRecordCount:r.totalRecordCount,maxTotalRecordCount:r.maxTotalRecordCount}})),t}export{mt as default};
