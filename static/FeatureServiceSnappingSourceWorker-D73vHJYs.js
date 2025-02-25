import{cn as z,fr as v,mG as R,ks as b,mH as O,W as l,Z as h,ap as P,bV as $,mI as H,mJ as Q,mK as I,hE as k,s as Z,e9 as K,aj as x,ak as A,ac as W,ao as T,aa as X,mL as M,mM as Y,mN as ee,mO as te,g_ as ie,mP as D,f3 as se,eQ as S,mQ as J,jE as re,f1 as ne,aP as oe,as as p,am as E,eN as ae,a1 as N,gO as le,jS as ue,aC as he}from"./index-DKbcOXvO.js";import{u as ce}from"./executeQueryForSnapping-BlBDH5LB.js";import{f as de}from"./FeatureStore-BkhPTKVH.js";import{L as fe}from"./QueryEngine-c2k67wsL.js";import{i as U,r as j,n as B}from"./symbologySnappingCandidates-D_w7SPRZ.js";import{a as _e}from"./pbfQueryUtils-BvVNb_8W.js";import{x as pe,f as me,c as ge,S as ye}from"./query-BjWjpyMW.js";import{E as Fe}from"./ByteSizeUnit-BsxeN7wM.js";import{o as Ee}from"./BoundsStore-Td1v9L83.js";import"./queryUtils-hVslpV8d.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BntruWY7.js";import"./optimizedFeatureQueryEngineAdapter-DYyAz28g.js";import"./WhereClauseCache-CXapBQXI.js";import"./WhereClause-CwBWhUUt.js";import"./TimeOnly-D9V4gdT1.js";import"./quantizationUtils-Deoeu4Gm.js";import"./utils-CI-74NtM.js";import"./utils-BZPv7EW8.js";import"./utils-D2kOaQ5M.js";import"./ClassBreaksDefinition-C4fAYFNG.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-DNz8ezTp.js";import"./pbf-GrhhwAw9.js";import"./PooledRBush-CXSG86_C.js";class Te{constructor(e,i){this.data=e,this.resolution=i,this.state={type:a.CREATED},this.alive=!0}process(e){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(e,i){return{type:a.FETCH_COUNT,previous:e,task:v(async s=>{const r=await R(i.fetchCount(this,s));this.state.type===a.FETCH_COUNT&&(this.state=Ce(this.state,r.ok?r.value:1/0))})}}_gotoFetchFeatures(e,i){return{type:a.FETCH_FEATURES,previous:e,task:v(async s=>{const r=await R(i.fetchFeatures(this,e.featureCount,s));this.state.type===a.FETCH_FEATURES&&(this.state=ve(this.state,r.ok?r.value:[]))})}}_goToDone(e,i){return i.finish(this,e.features),{type:a.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:a.CREATED},e.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:e.task.abort()}}intersects(e){return e==null||!this.data.extent||(b(e,q),O(this.data.extent,q))}}function Ce(t,e){return{type:a.FETCHED_COUNT,featureCount:e,previous:t}}function ve(t,e){return{type:a.FETCHED_FEATURES,previous:t,features:e}}var a;(function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"})(a||(a={}));const q=z();let c=class extends ${get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const e=new Set;return this.objectIdField&&e.add(this.objectIdField),this.globalIdField&&e.add(this.globalIdField),e}set outFields(e){const i=this._get("outFields"),s=H(e,this._mandatoryOutFields);Q(s,i)||(this._set("outFields",s),I(s,i)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(e){const i=this._get("filter"),s=this._filterProperties(e);JSON.stringify(i)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const i=this._get("customParameters");JSON.stringify(i)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const i=this._get("tileInfo");i!==e&&(e!=null&&i!=null&&JSON.stringify(e)===JSON.stringify(i)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.suspended=!0,this._historicMoment=null,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new k}initialize(){this._initializeFetchExtent(),this._updatingHandles.add(()=>this._configuration,()=>this.refresh()),this._updatingHandles.add(()=>this.tilesOfInterest,()=>{this._updatePriorities(),this._process()},{sync:!0,initial:!0,equals:(e,i)=>Z(e,i,({id:s},{id:r})=>s===r)}),this.addHandles(K(()=>!this.suspended,()=>this._process()))}_updatePriorities(){this.store.setPriorityOrderByKey(this.tilesOfInterest.map(e=>e.id??"")??[])}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}async handleEdits(e){if(e.historicMoment&&(this._historicMoment=e.historicMoment),!e.addedFeatures.length&&!e.updatedFeatures.length&&!e.deletedFeatures.length)return;for(const r of this._pendingTiles.values())r.reset();const i={...e,deletedFeatures:e.deletedFeatures.map(({objectId:r,globalId:n})=>r&&r!==-1?r:this._lookupObjectIdByGlobalId(n))},s=v(async r=>{try{await this.store.processEdits(i,(n,o)=>this._queryFeaturesById(n,o),r),this._processPendingTiles()}catch(n){x(n),A.getLogger(this).warn("Failed to apply edits",n)}});this.addHandles(s),await this._updatingHandles.addPromise(s.promise)}setHistoricMoment(e){var i;(e==null?void 0:e.getTime())!==((i=this._historicMoment)==null?void 0:i.getTime())&&(this._historicMoment=e,this.refresh())}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!W(this.url))return;const e=v(async i=>{var s;try{const r=await pe(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:i});this.store.extent=X.fromJSON((s=r.data)==null?void 0:s.extent)}catch(r){x(r),A.getLogger(this).warn("Failed to fetch data extent",r)}});this._updatingHandles.addPromise(e.promise.then(()=>this._process())),this.addHandles(e)}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const e of this._pendingTiles.values())e.alive=!1}_createPendingTiles(){if(this.suspended)return;const e=this._collectMissingTilesInfo();if(this._setAvailability(e==null?1:e.coveredArea/e.fullArea),e!=null)for(const{data:i,resolution:s}of e.missingTiles){const r=this._pendingTiles.get(i.id);r?(r.resolution=s,r.alive=!0):this._createPendingTile(i,s)}}_collectMissingTilesInfo(){let e=null;for(const i of this.tilesOfInterest){const s=this.store.process(i,(r,n)=>this._verifyTileComplexity(r,n),this.outFields);e==null?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const e of this._pendingTiles.values())e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(i,s)=>this._fetchCount(i,s),fetchFeatures:(i,s,r)=>this._fetchFeatures(i,s,r),finish:(i,s)=>this._finishPendingTile(i,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const i of this._pendingTiles.values())this._verifyTileComplexity(this.store.getFeatureCount(i.data),i.resolution)&&this._updatingHandles.addPromise(i.process(e))}_verifyTileComplexity(e,i){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,i)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<we}_verifyFeatureDensity(e,i){if(this.tileInfo==null)return!1;const s=this.tileSize*i;return e*(Ie/(s*s))<be}_ensureFetchAllCounts(e){let i=!0;for(const s of this._pendingTiles.values())s.state.type<a.FETCHED_COUNT&&this._updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(i=!1);return i}_finishPendingTile(e,i){this.store.add(e.data,i),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(e==null?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,i){const s=new Te(e,i);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,i){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:w,signal:i})}async _fetchFeatures(e,i,s){let r=0;const n=[];let o=0,u=i;for(;;){const d=this._createFeaturesQuery(e),f=this._setPagingParameters(d,r,u),{features:_,exceededTransferLimit:V}=await this._queryFeatures(d,s);f&&(r+=d.num),o+=_.length;for(const G of _)n.push(G);if(u=i-o,!f||!V||u<=0)return n}}_filterProperties(e){return e==null?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const i=this.globalIdField,s=this.objectIdField;if(i==null)throw new Error("Expected globalIdField to be defined");let r=null;const n=e&&M(e);if(this.store.featureStore.forEach(o=>{n===M(o.attributes[i])&&(r=o.objectId??o.attributes[s])}),r==null)throw new Error(`Expected to find a feature with globalId ${e}`);return r}_queryFeaturesById(e,i){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,i)}_queryFeatures(e,i){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,i):this._queryFeaturesJSON(e,i)}async _queryFeaturesPBF(e,i){const{sourceSpatialReference:s}=this,{data:r}=await me(this.url,e,new _e({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:w,signal:i});return Y(r)}async _queryFeaturesJSON(e,i){const{sourceSpatialReference:s}=this,{data:r}=await ge(this.url,e,s,{query:this._configuration.customParameters,timeout:w,signal:i});return ee(r,this.objectIdField)}_createCountQuery(e){const i=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0),i}_createFeaturesQuery(e=null){var n;const i=this._createBaseQuery(e),s=(e==null?void 0:e.data)!=null?this.store.getAttributesForTile((n=e==null?void 0:e.data)==null?void 0:n.id):null,r=H(te(this.outFields,s??new Set),this._mandatoryOutFields);return i.outFields=Array.from(r),i.returnGeometry=!0,e!=null&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(e){const i=new T({returnZ:this.hasZ,returnM:!1,historicMoment:this._historicMoment,geometry:this.tileInfo!=null&&e!=null?ie(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return s!=null&&(i.where=s.where,i.gdbVersion=s.gdbVersion,i.timeExtent=s.timeExtent),i.outSpatialReference=this.spatialReference,i}_setPagingParameters(e,i,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:r,supportsCacheHint:n,tileMaxRecordCount:o,maxRecordCount:u,supportsResultType:d}=this.capabilities.query,f=r?T.MAX_MAX_RECORD_COUNT_FACTOR:1,_=f*((d||n)&&o?o:u||Se);return e.start=i,r?(e.maxRecordCountFactor=Math.min(f,Math.ceil(s/_)),e.num=Math.min(s,e.maxRecordCountFactor*_)):e.num=Math.min(s,_),!0}};l([h({constructOnly:!0})],c.prototype,"url",void 0),l([h({constructOnly:!0})],c.prototype,"objectIdField",void 0),l([h({constructOnly:!0})],c.prototype,"globalIdField",void 0),l([h({constructOnly:!0})],c.prototype,"capabilities",void 0),l([h({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),l([h({constructOnly:!0})],c.prototype,"spatialReference",void 0),l([h({constructOnly:!0})],c.prototype,"store",void 0),l([h({readOnly:!0})],c.prototype,"_minimumVerticesPerFeature",null),l([h()],c.prototype,"_mandatoryOutFields",null),l([h()],c.prototype,"outFields",null),l([h()],c.prototype,"suspended",void 0),l([h()],c.prototype,"_historicMoment",void 0),l([h()],c.prototype,"filter",null),l([h()],c.prototype,"customParameters",null),l([h({readOnly:!0})],c.prototype,"_configuration",null),l([h()],c.prototype,"tileInfo",null),l([h()],c.prototype,"tileSize",null),l([h()],c.prototype,"tilesOfInterest",void 0),l([h({readOnly:!0})],c.prototype,"updating",null),l([h({readOnly:!0})],c.prototype,"availability",void 0),l([h()],c.prototype,"hasZ",null),c=l([P("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const Se=2e3,w=6e5,we=1e6,Ie=25,be=1;class Oe{constructor(){this._store=new Map,this._priorities=new Map}get size(){return this._store.size}setPriorityOrderByKey(e){this._priorities.clear();for(let i=e.length-1;i>=0;i--)this._priorities.set(e[i],e.length-i)}hasLowerPriority(e){const i=this._priorities.get(e);if(i==null)return!0;for(const[s]of this._store){const r=this._priorities.get(s);if(r==null||r<i)return!0}return!1}someFromLowestToHighestPriority(e){const{_priorities:i}=this;for(const[s,r]of this._store)if(!i.has(s)&&e(r,s))return!0;for(const[s]of i){const r=this._store.get(s);if(r&&e(r,s))return!0}return!1}set(e,i){this._store.set(e,i)}delete(e){return this._store.delete(e)}get(e){return this._store.get(e)}has(e){return this._store.has(e)}clear(){this._store.clear()}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}}let g=class extends ${setPriorityOrderByKey(t){this._tiles.setPriorityOrderByKey(t)}get _memoryLimitExceeded(){return this.featureStore.usedMemory>=this.maximumByteSize}constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*Fe.MEGABYTES,this._tileBounds=new Ee,this._tiles=new Oe,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=z()}add(t,e){var n;for(const o of e)this._referenceFeature(o.objectId);const i=this.featureStore.upsertMany(e),s=i.map(o=>new Set(Object.keys(o.attributes))).reduce((o,u)=>D(o,u),new Set(Object.keys(((n=i[0])==null?void 0:n.attributes)??[]))),r=this._memoryLimitExceeded;this._addTileStorage(t,new Set(i.map(o=>o.objectId)),s),r&&this._applyCacheMemoryLimits()}_applyCacheMemoryLimits(){if(!this._memoryLimitExceeded)return;const{_tiles:t,featureStore:e,maximumByteSize:i}=this;t.someFromLowestToHighestPriority(s=>!this._memoryLimitExceeded||e.usedMemory-this._estimateRemoveTileMemoryReduction(s)<i||(this._removeTileStorage(s),!1))}_estimateRemoveTileMemoryReduction(t){var i,s;let e=0;for(const r of t.objectIds)if(this._refCounts.get(r)===1){const n=this.featureStore.getFeature(r);n&&(e+=((s=(i=this.featureStore).estimateFeatureUsedMemory)==null?void 0:s.call(i,n))??0)}return e}getAttributesForTile(t){var e;return t?(e=this._tiles.get(t))==null?void 0:e.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,e,i){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),e,i)}_addTileStorage(t,e,i){const s=t.id;this._tiles.set(s,new Re(t,e,i)),this._tileBounds.set(s,t.extent),this._tileFeatureCounts.set(s,e.size)}_remove({id:t}){const e=this._tiles.get(t);e&&this._removeTileStorage(e)}_removeTileStorage(t){const e=[];for(const s of t.objectIds)this._unreferenceFeature(s)===y.REMOVED&&e.push(s);this.featureStore.removeManyById(e);const i=t.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const e of this._tiles.values()){for(const i of t)e.objectIds.delete(i);this._tileFeatureCounts.set(e.data.id,e.objectIds.size)}for(const e of t)this._refCounts.delete(e)}async _processEditsRefetch(t,e,i){if(!t.length)return;const s=(await e(t,i)).features,{hasZ:r,hasM:n}=this.featureStore;for(const o of s){const u=se(this._tmpBoundingRect,o.geometry,r,n);u!=null&&this._tileBounds.forEachInBounds(u,d=>{const f=this._tiles.get(d);this.featureStore.add(o);const _=o.objectId;f.objectIds.has(_)||(f.objectIds.add(_),this._referenceFeature(_),this._tileFeatureCounts.set(f.data.id,f.objectIds.size))})}}process(t,e=()=>!0,i){if(this.tileInfo==null||!t.extent||this.extent!=null&&!O(b(this.extent,this._tmpBoundingRect),t.extent))return new C(t);if(this._memoryLimitExceeded&&!this._tiles.hasLowerPriority(t.id??""))return new C(t);const s=this.getAttributesForTile(t.id);if(I(i,s))return new C(t);const r=this._createTileTree(t,this.tileInfo);return this._simplify(r,e,null,0,1),this._collectMissingTiles(t,r,this.tileInfo,i)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,e,i,s){const r=this._tileFeatureCounts.get(t.id);if(r!=null)return r;const n=await ye(e,i,s);return this._tileFeatureCounts.set(t.id,n.data.count),n.data.count}_createTileTree(t,e){const i=new L(t.level,t.row,t.col);return e.updateTileInfo(i,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,s=>{var n;const r=(n=this._tiles.get(s))==null?void 0:n.data;r&&Pe(t,r)&&this._populateChildren(i,r,e,this._tileFeatureCounts.get(r.id)||0)}),i}_populateChildren(t,e,i,s){const r=e.level-t.level-1;if(r<0)return void(t.isLeaf=!0);const n=e.row>>r,o=e.col>>r,u=t.row<<1,d=o-(t.col<<1)+(n-u<<1),f=t.children[d];if(f!=null)this._populateChildren(f,e,i,s);else{const _=new L(t.level+1,n,o);i.updateTileInfo(_,S.ExtrapolateOptions.POWER_OF_TWO),t.children[d]=_,this._populateChildren(_,e,i,s)}}_simplify(t,e,i,s,r){const n=r*r;if(t.isLeaf)return e(this.getFeatureCount(t),r)?0:(this._remove(t),i!=null&&(i.children[s]=null),n);const o=r/2,u=o*o;let d=0;for(let f=0;f<t.children.length;f++){const _=t.children[f];d+=_!=null?this._simplify(_,e,t,f,o):u}return d===0?this._mergeChildren(t):1-d/n<xe&&(this._purge(t),i!=null&&(i.children[s]=null),d=n),d}_mergeChildren(t){const e=new Set;let i;this._forEachLeaf(t,s=>{const r=this._tiles.get(s.id);if(r){i=i?D(i,r.attributeKeys):new Set(r.attributeKeys);for(const n of r.objectIds)e.has(n)||(e.add(n),this._referenceFeature(n));this._remove(s)}}),this._addTileStorage(t,e,i??new Set),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,e.size)}_forEachLeaf(t,e){for(const i of t.children)i!=null&&(i.isLeaf?e(i):this._forEachLeaf(i,e))}_purge(t){if(t!=null)if(t.isLeaf)this._remove(t);else for(let e=0;e<t.children.length;e++){const i=t.children[e];this._purge(i),t.children[e]=null}}_collectMissingTiles(t,e,i,s){const r=new He(i,t,this.extent);return this._collectMissingTilesRecurse(e,r,1,s),r.info}_collectMissingTilesRecurse(t,e,i,s){const r=this.getAttributesForTile(t.id),n=r&&!I(s,r);if(n&&e.addMissing(t.level,t.row,t.col,i),t.isLeaf)return;if(!t.hasChildren)return void(n||e.addMissing(t.level,t.row,t.col,i));const o=i/2;for(let u=0;u<t.children.length;u++){const d=t.children[u];d==null?e.addMissing(t.level+1,(t.row<<1)+((2&u)>>1),(t.col<<1)+(1&u),o):this._collectMissingTilesRecurse(d,e,o,s)}}_referenceFeature(t){const e=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,e),e===1?y.ADDED:y.UNCHANGED}_unreferenceFeature(t){const e=(this._refCounts.get(t)||0)-1;return e===0?(this._refCounts.delete(t),y.REMOVED):(e>0&&this._refCounts.set(t,e),y.UNCHANGED)}get test(){}};function Pe(t,e){if(!t||!e)return!1;if(t.level===e.level)return t.row===e.row&&t.col===e.col;const i=t.level<e.level,s=i?t:e,r=i?e:t,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}l([h({constructOnly:!0})],g.prototype,"featureStore",void 0),l([h()],g.prototype,"tileInfo",void 0),l([h()],g.prototype,"extent",void 0),l([h()],g.prototype,"maximumByteSize",void 0),g=l([P("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],g);class Re{constructor(e,i,s){this.data=e,this.objectIds=i,this.attributeKeys=s}}let L=class{constructor(e,i,s){this.level=e,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(this.children[0]!=null||this.children[1]!=null||this.children[2]!=null||this.children[3]!=null)}};class C{constructor(e,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=J(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}class He{constructor(e,i,s){this._tileInfo=e,this._extent=null,this.info=new C(i),s!=null&&(this._extent=b(s))}addMissing(e,i,s,r){const n=new re(null,e,i,s);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),n.extent==null||this._extent!=null&&!O(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=J(n.extent))}}const xe=.18751;var y;(function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"})(y||(y={}));let F=class extends ne.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=oe(),this._elevationAligner=U(),this._elevationFilter=j(),this._symbologyCandidatesFetcher=B(),this._updatingHandles=new k,this._alignPointsInFeatures=async(t,e)=>{const i={query:t},s=await this.remoteClient.invoke("alignElevation",i,{signal:e});return p(e),s},this._getSymbologyCandidates=async(t,e)=>{const i={candidates:t,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:e});return p(e),s}}get updating(){return this._isInitializing||this._updatingHandles.updating||this._featureFetcher.updating}destroy(){var t,e,i;(t=this._featureFetcher)==null||t.destroy(),(e=this._queryEngine)==null||e.destroy(),(i=this._featureStore)==null||i.clear()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:e,objectIdField:i,timeInfo:s,fieldsIndex:r}=t.serviceInfo,{hasZ:n}=t,o=E.fromJSON(t.spatialReference);this._spatialReference=o,this._featureStore=new de({...t.serviceInfo,hasZ:n,hasM:!1}),this._featureStore.estimateFeatureUsedMemory=d=>d.usedMemory,this._queryEngine=new fe({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:e,fieldsIndex:r,hasZ:n,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new c({store:new g({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:o,sourceSpatialReference:E.fromJSON(t.serviceInfo.spatialReference),customParameters:t.configuration.customParameters});const u=t.configuration.viewType==="3d";return this._elevationAligner=U(u,{elevationInfo:t.elevationInfo!=null?ae.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=j(u),this.addHandles([N(()=>this._featureFetcher.availability,d=>this.emit("notify-availability",{availability:d}),le),N(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),m}async setSuspended(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),this._featureFetcher.suspended=t,m}async updateOutFields(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),this._featureFetcher.outFields=new Set(t??[]),m}async fetchCandidates(t,e){await this._whenSetup.promise,p(e);const i=Ae(t),s=e==null?void 0:e.signal,r=await ce(this._queryEngine,i,s);p(s);const n=await this._elevationAligner.alignCandidates(r.candidates,E.fromJSON(t.point.spatialReference)??E.WGS84,s);p(s);const o=await this._symbologyCandidatesFetcher.fetch(n,s);p(s);const u=o.length===0?n:n.concat(o);return{result:{candidates:this._elevationFilter.filter(i,u)}}}async updateTiles(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=t.tileInfo!=null?S.fromJSON(t.tileInfo):null,m}async refresh(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),this._featureFetcher.refresh(),m}async whenNotUpdating(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),await ue(()=>!this.updating,e),p(e),m}async getDebugInfo(t,e){return p(e),{result:this._featureFetcher.debugInfo}}async handleEdits(t,e){return await this._updatingHandles.addPromise(this._whenSetup.promise),p(e),await this._updatingHandles.addPromise(this._featureFetcher.handleEdits(t)),p(e),m}async setHistoricMoment(t,e){return this._featureFetcher.setHistoricMoment(t.moment),m}async notifyElevationSourceChange(t,e){return this._elevationAligner.notifyElevationSourceChange(),m}async notifySymbologyChange(t,e){return this._symbologyCandidatesFetcher.notifySymbologyChange(),m}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=B(t,this._getSymbologyCandidates),m}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=t.filter!=null?T.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};l([h({readOnly:!0})],F.prototype,"updating",null),l([h()],F.prototype,"_isInitializing",void 0),F=l([P("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],F);const at=F;function Ae(t){if(!t.filter)return{...t,query:{where:"1=1"}};const{distance:e,units:i,spatialRel:s,where:r,timeExtent:n,objectIds:o}=t.filter,u={geometry:t.filter.geometry?he(t.filter.geometry):void 0,distance:e,units:i,spatialRel:s,timeExtent:n,objectIds:o,where:r??"1=1"};return{...t,query:u}}const m={result:{}};export{at as default};
