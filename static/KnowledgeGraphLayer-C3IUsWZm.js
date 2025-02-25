import{eL as T,eM as _,gk as S,gv as D,gl as L,gm as v,dB as A,gw as E,aV as f,a1 as I,gO as k,aj as C,b as w,dL as c,gP as N,ak as g,d3 as $,e4 as R,gF as b,gH as G,ga as O,W as o,Z as h,dR as P,dW as U,gp as j,ap as F,gh as z,ad as x,eP as K}from"./index-DKbcOXvO.js";import{S as m,i as M,E as H,m as V,h as B}from"./KnowledgeGraphSublayer-BKx14Pfw.js";import{I as W}from"./knowledgeGraphService-a_1Nn2we.js";import"./constants-B4mRqufT.js";import"./GraphicsLayer-HECLGpvo.js";import"./GraphQueryStreaming-CxpiQhn2.js";import"./FeatureStore-BkhPTKVH.js";import"./BoundsStore-Td1v9L83.js";import"./PooledRBush-CXSG86_C.js";import"./timeSupport-BntruWY7.js";import"./queryUtils-hVslpV8d.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-DYyAz28g.js";import"./QueryEngine-c2k67wsL.js";import"./WhereClauseCache-CXapBQXI.js";import"./WhereClause-CwBWhUUt.js";import"./TimeOnly-D9V4gdT1.js";import"./quantizationUtils-Deoeu4Gm.js";import"./utils-CI-74NtM.js";import"./utils-BZPv7EW8.js";import"./utils-D2kOaQ5M.js";import"./ClassBreaksDefinition-C4fAYFNG.js";import"./SnappingCandidate-O5eRSE6e.js";import"./FixedIntervalBinParameters-DNz8ezTp.js";import"./utils-RvMyfGMI.js";import"./cimSymbolUtils-CXebtMzF.js";import"./networkEnums-BSGBazXj.js";import"./GPMessage-D99ZEQBh.js";let n=class extends T(_(S(D(L(v(A(E(K)))))))){constructor(e){super(e),this._graphTypeLookup=new Map,this._namedTypesModified=!1,this.dataManager=null,this.definitionSetMap=null,this.knowledgeGraph=null,this.layers=new(f.ofType(m)),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="KnowledgeGraphLayer",this.sublayerIdsCache=new Map,this.tables=new(f.ofType(m)),this.type="knowledge-graph",this.url=null,this.addHandles(I(()=>this.layers.concat(this.tables),(t,i)=>this._handleSublayersChange(t,i),k))}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){try{await this.loadFromPortal({supportedTypes:["Knowledge Graph Layer"]},e)}catch(t){C(t)}await this._fetchMetadata(),await this._initializeLayerProperties(),this.loadLayerAssumingLocalCache(),this._layersLoadedFromAuthoritativeItem()||await M(this)}async _fetchMetadata(){if(!this.url)throw new w("knowledge-graph:missing-url","KnowledgeGraphLayer must be created with a url");const e=await W(this.url);this.knowledgeGraph=e,this._forEachGraphType(t=>{t.name&&this._graphTypeLookup.set(t.name,t)})}async _initializeLayerProperties(){this.originIdOf("inclusionModeDefinition")===c.USER?this._validateInclusionModeDefinition():await this._initializeInclusionModeDefinition(),this._setMemberTypes(),this.dataManager=new H({knowledgeGraph:this.knowledgeGraph,inclusionModeDefinition:this.inclusionModeDefinition})}async _initializeInclusionModeDefinition(){const e=this.definitionSetMap?await V(this.definitionSetMap,!0):{generateAllSublayers:!0,namedTypeDefinitions:new Map};[...this.layers.toArray(),...this.tables.toArray()].forEach(t=>{const i=this._graphTypeLookup.get(t.graphTypeName);i&&!e.namedTypeDefinitions.has(i.name)&&e.namedTypeDefinitions.set(i.name,{useAllData:!0})}),this.setAtOrigin("inclusionModeDefinition",e,N(this.originIdOf("definitionSetMap")))}_validateInclusionModeDefinition(){const{inclusionModeDefinition:e}=this;if(!e)return;const{namedTypeDefinitions:t}=e;if((t==null?void 0:t.size)>0)t.forEach((i,a)=>{const s=this._graphTypeLookup.get(a);if(!s)return g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't in the data model and will be removed`),void t.delete(a);s.type!=="relationship"&&s.type!=="entity"&&(g.getLogger(this).warn(`A named type, ${a}, was in the inclusion list that wasn't properly modeled and will be removed`),t.delete(a))});else if(!e.generateAllSublayers)throw new w("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined")}_setMemberTypes(){var s,r;let e=[],t=[];const{inclusionModeDefinition:i}=this,a=i==null?void 0:i.namedTypeDefinitions;!i||i.generateAllSublayers?(e=((s=this.knowledgeGraph.dataModel)==null?void 0:s.entityTypes)??[],t=((r=this.knowledgeGraph.dataModel)==null?void 0:r.relationshipTypes)??[]):a&&a.size>0&&a.forEach((p,l)=>{const d=this._graphTypeLookup.get(l);switch(d==null?void 0:d.type){case"relationship":t.push(d);break;case"entity":e.push(d)}}),this.memberEntityTypes=e,this.memberRelationshipTypes=t}_forEachGraphType(e){var t,i;[...((t=this.knowledgeGraph.dataModel)==null?void 0:t.entityTypes)??[],...((i=this.knowledgeGraph.dataModel)==null?void 0:i.relationshipTypes)??[]].forEach(a=>{e(a)})}_refreshNamedTypes(){this._namedTypesModified=!0;for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const a=this._graphTypeLookup.get(i);a&&(this._addSublayer(a),a.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),this.dataManager.sublayerCaches.set(i,new Map))}await M(this,t),this._refreshNamedTypes()}_createSublayers(e,t,i){e.forEach(a=>{const s=this._createSublayer(a);i(s)&&t.push(s),this._updateSublayerCaches(a)})}_addSublayer(e){const t=this._createSublayer(e);return t.geometryType?this.layers.push(t):this.tables.push(t),t}_createSublayer(e){return new m({objectType:e,parentCompositeLayer:this,graphType:e.type})}_updateSublayers(e,t){t.forEach(i=>{i.parentCompositeLayer=this;const a=e.find(s=>s.type===i.graphType&&s.name===i.graphTypeName);a&&(i.objectType=a,this._updateSublayerCaches(a))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}_saveUrlAsNewResource(e,t,i,a){e[t]="<pending>",i.pendingOperations.push(Y(this.inclusionModeDefinition).then(s=>{const r=Z(a);e[t]=r.itemRelativeUrl,i.toAdd.push({resource:r,content:{type:"blob",blob:s},compress:!1,finish:p=>{this.definitionSetMap=p.url}})}))}_displaysAllRecords(e){for(const[,{useAllData:t}]of e.namedTypeDefinitions)if(!t)return!1;return!0}_handleSublayersChange(e,t){t&&(t.forEach(i=>{i.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(i=>{i.parent=this}),this.addHandles([e.on("after-add",({item:i})=>{i.parent=this}),e.on("after-remove",({item:i})=>{i.parent=null})],"sublayers-owner"))}_layersLoadedFromAuthoritativeItem(){const e=this.originIdOf("layers");return e>=c.PORTAL_ITEM&&e<c.USER}readDefinitionSetMap(e,t,i){return $(e,i)}writeDefinitionSetMap(e,t,i,a){const s=a==null?void 0:a.portalItem,r=a==null?void 0:a.resources,p=R(a==null?void 0:a.origin);if(!s||!r||p==null)return void(e&&(t[i]=b(e,a)));const{inclusionModeDefinition:l}=this;if(!l||this._displaysAllRecords(l))return void(this.definitionSetMap=null);const d=this.originIdOf("inclusionModeDefinition");if(d===c.USER||this._namedTypesModified||p<d)this._saveUrlAsNewResource(t,i,r,s);else if(p===d&&e){const u=b(e,a);G(u)?this._saveUrlAsNewResource(t,i,r,s):t[i]=u}}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):g.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}loadLayerAssumingLocalCache(){var t,i;const e=[...this.memberEntityTypes,...this.memberRelationshipTypes];this.originIdOf("layers")===c.DEFAULTS?this._createSublayers(e,this.layers,a=>!!a.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===c.DEFAULTS?this._createSublayers(e,this.tables,a=>!a.geometryType):this._updateSublayers(e,this.tables),(i=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||i.forEach((a,s)=>{var p;const r=O(this.sublayerIdsCache,s,()=>new Set);(p=a.members)==null||p.forEach(l=>{r.add(l.id)})})}async addRecords(e){await this.load(),await this._handleNewRecords(e)}async removeRecords(e){var i,a,s,r,p,l,d,u;await this.load();const t=[];for(const y of e)((s=(a=(i=this.dataManager.inclusionModeDefinition)==null?void 0:i.namedTypeDefinitions)==null?void 0:a.get(y.typeName))==null?void 0:s.useAllData)===!1&&((d=(l=(p=(r=this.dataManager.inclusionModeDefinition)==null?void 0:r.namedTypeDefinitions)==null?void 0:p.get(y.typeName))==null?void 0:l.members)!=null&&d.has(y.id))&&t.push(y);this.dataManager.removeFromLayer(t);for(const y of t)(u=this.sublayerIdsCache.get(y.typeName))==null||u.delete(y.id);return this._refreshNamedTypes(),t}};o([h()],n.prototype,"dataManager",void 0),o([h({json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],n.prototype,"definitionSetMap",void 0),o([P("definitionSetMap")],n.prototype,"readDefinitionSetMap",null),o([U("definitionSetMap")],n.prototype,"writeDefinitionSetMap",null),o([h()],n.prototype,"inclusionModeDefinition",null),o([h()],n.prototype,"knowledgeGraph",void 0),o([h({type:f.ofType(m),json:{write:{ignoreOrigin:!0}}})],n.prototype,"layers",void 0),o([h()],n.prototype,"memberEntityTypes",void 0),o([h()],n.prototype,"memberRelationshipTypes",void 0),o([h({type:["KnowledgeGraphLayer"]})],n.prototype,"operationalLayerType",void 0),o([h()],n.prototype,"sublayerIdsCache",void 0),o([h({type:f.ofType(m),json:{write:{ignoreOrigin:!0}}})],n.prototype,"tables",void 0),o([h({json:{read:!1}})],n.prototype,"type",void 0),o([h(j)],n.prototype,"url",void 0),n=o([F("esri.layers.KnowledgeGraphLayer")],n);const De=n;async function Y(e){const t=await B(e);return new Blob([t],{type:"application/x-protobuf"})}function Z(e){const t=`definitionSetMap-${z()}.dat`,i=x("knowledgeGraphLayer",t);return e.resourceFromPath(i)}export{De as default};
