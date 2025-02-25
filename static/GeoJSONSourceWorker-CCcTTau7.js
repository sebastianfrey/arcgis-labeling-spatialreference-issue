import{fj as v,fk as _,dE as R,b as E,fl as A,fm as D,fn as Q,ah as P,cR as Z,fo as G,fp as M,fq as B,fr as N,dv as z,ak as L,fs as J,av as U,ft as W,fu as H,a4 as V,fv as Y,fw as F,fx as b,fy as k,fz as I,fA as C,fB as K,fC as X,fD as ee,fE as te}from"./index-DKbcOXvO.js";import{u as se}from"./executeQueryForSnapping-BlBDH5LB.js";import{f as ie}from"./FeatureStore-BkhPTKVH.js";import{x as w,j as T}from"./queryUtils-hVslpV8d.js";import{L as ne}from"./QueryEngine-c2k67wsL.js";import"./timeSupport-BntruWY7.js";import"./BoundsStore-Td1v9L83.js";import"./PooledRBush-CXSG86_C.js";import"./optimizedFeatureQueryEngineAdapter-DYyAz28g.js";import"./json-Wa8cmqdu.js";import"./WhereClauseCache-CXapBQXI.js";import"./WhereClause-CwBWhUUt.js";import"./TimeOnly-D9V4gdT1.js";import"./quantizationUtils-Deoeu4Gm.js";import"./utils-CI-74NtM.js";import"./utils-BZPv7EW8.js";import"./utils-D2kOaQ5M.js";import"./ClassBreaksDefinition-C4fAYFNG.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-DNz8ezTp.js";const re={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsQueryAttachmentOrderByFields:!1,supportsQueryBins:!0,supportsQueryWithCacheHint:!0,supportsQueryWithDistance:!0,supportsQueryWithResultType:!0,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0},queryBinsCapabilities:te};class xe{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(t==null?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=v(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],d=e.hasZ!=null?e.hasZ:i.hasZ,p=i.geometryType;let y=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const m=e.spatialReference||_;let r=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const u=new R(o);let l=u.get(y);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,y=l.name):(l={alias:y,name:y,type:i.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(l));const h={};for(const a of o){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),!a.name)throw new E("geojson-layer:invalid-field-name","field name is missing",{field:a});if(!A.jsonValues.includes(a.type))throw new E("geojson-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a});if(a.name!==l.name){const g=D(a);g!==void 0&&(h[a.name]=g)}a.length==null&&(a.length=Q(a))}if(r){if(r.startTimeField){const a=u.get(r.startTimeField);a?(r.startTimeField=a.name,a.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const a=u.get(r.endTimeField);a?(r.endTimeField=a.name,a.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const a=u.get(r.trackIdField);a?r.trackIdField=a.name:(r.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}const c=p?P(p):void 0,q=u.dateFields.length?{timeZoneIANA:Z}:null,f={warnings:n,featureErrors:[],layerDefinition:{...re,drawingInfo:c??void 0,templates:G(h),extent:void 0,geometryType:p,objectIdField:y,fields:o,hasZ:!!d,timeInfo:r,dateFieldsTimeReference:q}};this._queryEngine=new ne({fieldsIndex:R.fromLayerJSON({fields:o,timeInfo:r,dateFieldsTimeReference:q}),geometryType:p,hasM:!1,hasZ:d,objectIdField:y,spatialReference:m,timeInfo:r,featureStore:new ie({geometryType:p,hasM:!1,hasZ:d})});const j=this._queryEngine.fieldsIndex.requiredFields.indexOf(l);j>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(j,1),this._createDefaultAttributes=M(h,y);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const O=this._normalizeFeatures(x,f.featureErrors);this._queryEngine.featureStore.addMany(O);const{fullExtent:$,timeExtent:S}=await this._queryEngine.fetchRecomputedExtents();if(f.layerDefinition.extent=$,S){const{start:a,end:g}=S;f.layerDefinition.timeInfo.timeExtent=[a,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([B(t,n),w(e.adds,t),w(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),se(this._queryEngine,e,t.signal)}async queryAttributeBins(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(e,t.signal)}async refresh(e){var s;this._loadOptions.customParameters=e,(s=this._snapshotTask)==null||s.abort(),this._snapshotTask=N(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),z(i)||L.getLogger("esri.layers.GeoJSONLayer").error(new E("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _createFeatures(e){if(e==null)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=J(e,{geometryType:t,hasZ:n,objectIdField:s});if(!U(this._queryEngine.spatialReference,_))for(const o of i)o.geometry!=null&&(o.geometry=W(T(H(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,s=(await V(t??"",{responseType:"json",query:{...n},signal:e})).data;return Y(s),s}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const o of e){const d=this._createDefaultAttributes(),p=F(s,d,o.attributes,!0);p?t==null||t.push(p):(this._assignObjectId(d,o.attributes,!0),o.attributes=d,o.objectId=d[n],i.push(o))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t!=null&&t.length&&this._applyAddEdits(i,t),n!=null&&n.length&&this._applyUpdateEdits(i,n),s==null?void 0:s.length){for(const p of s)i.deleteResults.push(b(p));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:o,timeExtent:d}=await this._queryEngine.fetchRecomputedExtents();return{extent:o,timeExtent:d,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:o,objectIdField:d,spatialReference:p,featureStore:y,fieldsIndex:m}=this._queryEngine,r=[];for(const u of t){if(u.geometry&&s!==k(u.geometry)){n.push(I("Incorrect geometry type."));continue}const l=this._createDefaultAttributes(),h=F(m,l,u.attributes);if(h)n.push(h);else{if(this._assignObjectId(l,u.attributes),u.attributes=l,u.uid!=null){const c=u.attributes[d];e.uidToObjectId[u.uid]=c}if(u.geometry!=null){const c=u.geometry.spatialReference??p;u.geometry=T(C(u.geometry,c),c,p)}r.push(u),n.push(b(u.attributes[d]))}}y.addMany(K([],r,s,o,i,d))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:o,spatialReference:d,featureStore:p,fieldsIndex:y}=this._queryEngine;for(const m of t){const{attributes:r,geometry:u}=m,l=r==null?void 0:r[o];if(l==null){e.push(I(`Identifier field ${o} missing`));continue}if(!p.has(l)){e.push(I(`Feature with object id ${l} missing`));continue}const h=X(p.getFeature(l),n,i,s);if(u!=null){if(n!==k(u)){e.push(I("Incorrect geometry type."));continue}const c=u.spatialReference??d;h.geometry=T(C(u,c),c,d)}if(r){const c=F(y,h.attributes,r);if(c){e.push(c);continue}}p.add(ee(h,n,i,s,o)),e.push(b(l))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if(n.type==="esriFieldTypeString")return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await w(_,e)}catch{throw new E("geojson-layer","Projection not supported")}}}export{xe as default};
