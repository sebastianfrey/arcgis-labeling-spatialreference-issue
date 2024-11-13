import{eP as De,de as xe,df as Re,eR as _e,aF as ee,c3 as Le,s as K,cD as Ae,fj as Oe,aj as G,fl as Ce,ar as ve,cC as Me,dI as Se,e4 as V,ao as re,bE as be,ak as T,al as N,am as Ge,di as Pe}from"./index-BPaEurMl.js";import{u as Y,E as He,A as Fe,b as $e,v as Ue,L as Be,m as je,h as ze,a as We,f as Qe,d as x,s as F,t as X,r as Z,e as Ve,n as I,o as we,g as Ye,c as ke,i as qe}from"./KnowledgeGraphSublayer-D7Wgp2PJ.js";import{F as Je}from"./knowledgeGraphService-BcYZBLX5.js";import"./GraphicsLayer-CglsZniV.js";import"./GraphQueryStreaming-Co9s90m_.js";import"./FeatureStore-C64kK-Ip.js";import"./BoundsStore-CAPXBFrw.js";import"./PooledRBush-BBXrK47M.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./optimizedFeatureQueryEngineAdapter-CWUj0DL5.js";import"./QueryEngine-Bs861hDJ.js";import"./WhereClause-DAtbFoFN.js";import"./TimeOnly-Dc78niPj.js";import"./utils-BHbeZrdV.js";import"./utils-CPsUh9j9.js";import"./utils-CiCJwfwS.js";import"./ClassBreaksDefinition-CTRXd3Uj.js";var te;(function(e){e.MULTIPLIER="multiplier",e.ABSOLUTE="absoluteValue"})(te||(te={}));let k=class extends De(xe(Re(_e(Pe)))){constructor(e){if(super(e),this.dataPreloadedInLocalCache=!1,this.defaultLinkChartConfig=null,this._currentLinkChartConfig={layoutMode:"RADIAL_TREE"},this._graphTypeLookup=new Map,this.dataManager=null,this.knowledgeGraph=null,this.layers=new(ee.ofType(Y)),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map,this.linkChartExtent=new Le({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7}),this.memberEntityTypes=null,this.memberRelationshipTypes=null,this.operationalLayerType="LinkChartLayer",this.sublayerIdsCache=new Map,this.tables=new(ee.ofType(Y)),this.type="link-chart",this.chronologicalAuxiliaryGraphics=null,this._originalInclusionList=e==null?void 0:e.inclusionModeDefinition,(e==null?void 0:e.dataPreloadedInLocalCache)&&!(e!=null&&e.inclusionModeDefinition))throw new K("knowledge-graph:linkchart-layer-constructor","If creating a link chart composite layer and configured that data is already loaded in the cache, you must specify an inclusion list so the Composite Layer knows what records belong to it");this.addHandles(Ae(()=>this.layers.concat(this.tables),(t,a)=>this._handleSublayersChange(t,a),Oe))}normalizeCtorArgs(e){if(!e)return{};const{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:s}=e;return{url:t,title:a,dataPreloadedInLocalCache:i,defaultLinkChartConfig:s}}_initializeLayerProperties(e){var o,u,y,L,m,f;if(!this.title&&this.url){const r=this.url.split("/");this.title=r[r.length-2]}const t=new Set;let a=[],i=[];if(e.inclusionModeDefinition&&(!e.inclusionModeDefinition.namedTypeDefinitions||e.inclusionModeDefinition.namedTypeDefinitions.size<1))throw new K("knowledge-graph:composite-layer-constructor","If an explicit inclusion definition is defined, at least one namedTypeDefinition must also be defined");(o=e.knowledgeGraph.dataModel.entityTypes)==null||o.forEach(r=>{r.name&&this._graphTypeLookup.set(r.name,r)}),(u=e.knowledgeGraph.dataModel.relationshipTypes)==null||u.forEach(r=>{r.name&&this._graphTypeLookup.set(r.name,r)}),(y=e.inclusionModeDefinition)!=null&&y.generateAllSublayers?(a=e.knowledgeGraph.dataModel.entityTypes??[],i=e.knowledgeGraph.dataModel.relationshipTypes??[]):(L=e.inclusionModeDefinition)!=null&&L.namedTypeDefinitions&&((m=e.inclusionModeDefinition)==null?void 0:m.namedTypeDefinitions.size)>0?(f=e.inclusionModeDefinition)==null||f.namedTypeDefinitions.forEach((r,c)=>{var A,E;const C=this._graphTypeLookup.get(c);if(!C)return G.getLogger(this).warn(`A named type, ${c}, was in the inclusion list that wasn't in the data model and will be removed`),void((A=e.inclusionModeDefinition)==null?void 0:A.namedTypeDefinitions.delete(c));C.type==="relationship"?t.has(c)||(t.add(c),i.push(C)):C.type==="entity"?t.has(c)||(t.add(c),a.push(C)):(G.getLogger(this).warn(`A named type, ${c}, was in the inclusion list that wasn't properly modeled and will be removed`),(E=e.inclusionModeDefinition)==null||E.namedTypeDefinitions.delete(c))}):(a=e.knowledgeGraph.dataModel.entityTypes??[],i=e.knowledgeGraph.dataModel.relationshipTypes??[]);const s=new He({knowledgeGraph:e.knowledgeGraph,inclusionModeDefinition:e.inclusionModeDefinition});this.knowledgeGraph=e.knowledgeGraph,this.memberEntityTypes=a,this.memberRelationshipTypes=i,this.dataManager=s}load(e){const t=async()=>{var s;const a=[],i=[];this.loadLayerAssumingLocalCache(),await ke(this),this.dataManager.inclusionModeDefinition&&(this.dataManager.inclusionModeDefinition.generateAllSublayers=!1),(s=this.dataManager.inclusionModeDefinition)==null||s.namedTypeDefinitions.forEach(o=>{o.useAllData=!1}),await this._initializeDiagram(),this.layers.forEach(o=>{i.push(o.refreshCachedQueryEngine()),a.push(new Promise(u=>{o.on("layerview-create",()=>{u(null)})}))}),this.tables.forEach(o=>{i.push(o.refreshCachedQueryEngine())}),await Promise.all(i)};return this.addResolvingPromise(new Promise(a=>{Je(this.url).then(async i=>{var s,o,u,y,L,m,f;if(this._initializeLayerProperties({knowledgeGraph:i,inclusionModeDefinition:this._originalInclusionList}),(o=(s=this.dataManager.inclusionModeDefinition)==null?void 0:s.namedTypeDefinitions)!=null&&o.size||(this.dataManager.inclusionModeDefinition={generateAllSublayers:!1,namedTypeDefinitions:new Map},(u=this.dataManager.knowledgeGraph.dataModel.entityTypes)==null||u.forEach(r=>{var c;r.name&&((c=this.dataManager.inclusionModeDefinition)==null||c.namedTypeDefinitions.set(r.name,{useAllData:!0}))}),(y=this.dataManager.knowledgeGraph.dataModel.relationshipTypes)==null||y.forEach(r=>{var c;r.name&&((c=this.dataManager.inclusionModeDefinition)==null||c.namedTypeDefinitions.set(r.name,{useAllData:!0}))})),this.dataPreloadedInLocalCache){const r=qe.getInstance();for(const[c,C]of((L=this.dataManager.inclusionModeDefinition)==null?void 0:L.namedTypeDefinitions)??[])for(const A of((m=C.members)==null?void 0:m.values())??[]){const E=r.readFromStoreById(`${c}__${A.id}`);E&&Ce(this.dataManager.sublayerCaches,c,()=>new Map).set(A.id,E)}await t()}else{const r=((f=this.defaultLinkChartConfig)==null?void 0:f.layoutMode)==="GEOGRAPHIC";this.addResolvingPromise(this.dataManager.refreshCacheContent(void 0,!1,r,!0).then(async()=>{ve(e),await t()}))}a(null)})})),Promise.resolve(this)}set inclusionModeDefinition(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("inclusionModeDefinition",e):G.getLogger(this).error("#inclusionModeDefinition","inclusionModeDefinition cannot be changed after the layer is loaded.")}async addRecords(e,t){let a=[];t!=null&&t.cascadeAddRelationshipEndNodes&&this.dataManager.knowledgeGraph.dataModel&&(a=await Fe(e,this.dataManager.knowledgeGraph));const i=e.concat(a).filter(s=>{var o;return!((o=this.sublayerIdsCache.get(s.typeName))!=null&&o.has(s.id))});await this._handleNewRecords(i)}async removeRecords(e,{cascadeRemoveRelationships:t=!0,recalculateLayout:a=!1}={cascadeRemoveRelationships:!0,recalculateLayout:!1}){var o,u,y,L,m,f,r,c;let i=[];for(const C of e)((y=(u=(o=this.dataManager.inclusionModeDefinition)==null?void 0:o.namedTypeDefinitions)==null?void 0:u.get(C.typeName))==null?void 0:y.useAllData)===!1&&((r=(f=(m=(L=this.dataManager.inclusionModeDefinition)==null?void 0:L.namedTypeDefinitions)==null?void 0:m.get(C.typeName))==null?void 0:f.members)!=null&&r.has(C.id))&&i.push(C);if(t){const C=new Set,A=[];for(const E of i)if(this.dataManager.nodeConnectionsLookup.has(E.id))for(const j of this.dataManager.nodeConnectionsLookup.get(E.id))C.add(j);for(const E of C)if(this.dataManager.memberIdTypeLookup.has(E))for(const j of this.dataManager.memberIdTypeLookup.get(E))this.dataManager.relationshipTypeNames.has(j)&&A.push({id:E,typeName:j});i=i.concat(A)}this.dataManager.removeFromLayer(i);for(const C of i)(c=this.sublayerIdsCache.get(C.typeName))==null||c.delete(C.id),this.dataManager.relationshipTypeNames.has(C.typeName)?this.relationshipLinkChartDiagramLookup.delete(C.id):this.entityLinkChartDiagramLookup.delete(C.id);a&&await this._calculateLayoutWithSublayerTimeInfo(this._currentLinkChartConfig.layoutMode,this._currentLinkChartConfig.layoutOptions);const s=[];return this.layers.forEach(C=>{s.push(C.refreshCachedQueryEngine())}),await Promise.all(s),this._refreshNamedTypes(),i}async expand(e,t){const a=await this.dataManager.getConnectedRecordIds(e,t),i=a.filter(s=>{var o;return!((o=this.sublayerIdsCache.get(s.typeName))!=null&&o.has(s.id))});return await this._handleNewRecords(a),{records:i}}loadLayerAssumingLocalCache(){var t,a;const e=[...this.memberRelationshipTypes,...this.memberEntityTypes];this.originIdOf("layers")===Me.DEFAULTS?this._createSublayers(e,this.layers,i=>!!i.geometryType):this._updateSublayers(e,this.layers),this.originIdOf("tables")===Me.DEFAULTS?this._createSublayers(e,this.tables,i=>!i.geometryType):this._updateSublayers(e,this.tables),(a=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||a.forEach((i,s)=>{var u;const o=Ce(this.sublayerIdsCache,s,()=>new Set);(u=i.members)==null||u.forEach(({id:y,linkChartLocation:L})=>{if(o.add(y),L){const m=L instanceof Se?L:V(L);this.dataManager.relationshipTypeNames.has(s)?this.relationshipLinkChartDiagramLookup.set(y,m):this.entityLinkChartDiagramLookup.set(y,m)}})})}async calculateLinkChartLayout(e="RADIAL_TREE",t){var pe,ye,ge,me;const a=[],i=[],s=[];this.dataManager.sublayerCaches.forEach((n,l)=>{this.dataManager.entityTypeNames.has(l)?n.forEach(d=>{a.push({typeName:l,feature:d})}):this.dataManager.relationshipTypeNames.has(l)&&n.forEach(d=>{i.push({typeName:l,feature:d})})}),this.entityLinkChartDiagramLookup=new Map,this.relationshipLinkChartDiagramLookup=new Map;const o=new Map,u=new Map,y=new Map,L=new Map,m=new Uint8Array(a.length),f=new Float64Array(a.length),r=new Float64Array(a.length),c=new Float64Array(a.length),C=new Float64Array(a.length),A=new Uint32Array(i.length),E=new Uint32Array(i.length),j=new Float64Array(i.length),le=new Float64Array(i.length),M=[],Te="FORCE_DIRECTED",O=new Le({xmin:-1e-7,ymin:-1e-7,xmax:1e-7,ymax:1e-7});let z,he="FORCE_DIRECTED",g=0,R=0;const Ee=$e.apply;switch(he=e==="GEOGRAPHIC"?Te:e,he){case"FORCE_DIRECTED":z=Qe.apply;break;case"COMMUNITY":z=We.apply;break;case"HIERARCHICAL":z=ze.apply;break;case"RADIAL_TREE":z=je.apply;break;case"SMART_TREE":z=Be.apply;break;default:z=Ue.apply}let ae=!1;a.forEach(({typeName:n,feature:l})=>{var d,$,U,b,_;if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"&&((d=t==null?void 0:t.lockedNodeLocations)!=null&&d.has(l.attributes[x]))){e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(n)?m[g]=F.IsGeographic:m[g]=F.None;const h=t.lockedNodeLocations.get(l.attributes[x]);f[g]=h.x,r[g]=h.y}else if(e==="GEOGRAPHIC"&&this.dataManager.geographicLookup.has(n)){m[g]=F.IsGeographic;let h=null;const w=l.attributes[this.dataManager.geographicLookup.get(n).name];switch(($=this.dataManager.geographicLookup.get(n))==null?void 0:$.geometryType){case"esriGeometryPoint":f[g]=w==null?void 0:w.x,r[g]=w==null?void 0:w.y;break;case"esriGeometryPolygon":h=w==null?void 0:w.centroid,(h==null?void 0:h.x)!=null&&(h==null?void 0:h.y)!=null?(f[g]=h.x,r[g]=h.y):m[g]=F.IsMovable;break;case"esriGeometryPolyline":case"esriGeometryMultipoint":h=(U=w==null?void 0:w.extent)==null?void 0:U.center,(h==null?void 0:h.x)!=null&&(h==null?void 0:h.y)!=null?(f[g]=h.x,r[g]=h.y):m[g]=F.IsMovable;break;default:m[g]=F.IsMovable}(f[g]==null||r[g]==null||Number.isNaN(f[g])||Number.isNaN(r[g]))&&(m[g]=F.IsMovable,f[g]=0,r[g]=0)}else if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){!ae&&((b=t==null?void 0:t.lockedNodeLocations)!=null&&b.has(l.attributes[x]))&&(ae=!0);const h=(_=t==null?void 0:t.timeInfoByTypeName)==null?void 0:_.get(n),w=h==null?void 0:h.startField,v=w&&(h!=null&&h.startField)?l.attributes[w]:null;c[g]=v?new Date(v).getTime():NaN;const P=h==null?void 0:h.endField,H=P&&(h!=null&&h.endField)?l.attributes[P]:null;C[g]=H?new Date(H).getTime():NaN,f[g]=0,r[g]=0,m[g]=F.IsMovable}else m[g]=F.IsMovable,f[g]=0,r[g]=0;L.set(l.attributes[x],g),M[g]={feature:l,typeName:n},g++}),ae&&G.getLogger(this).warn("Locked node locations are not supported for chronological layout at this time.  Requested node locations were ignored");let de=!1;const ie=new Map;i.forEach(n=>{var P;const l=n.feature.attributes[X],d=n.feature.attributes[Z],$=L.get(l),U=L.get(d),b=(P=t==null?void 0:t.timeInfoByTypeName)==null?void 0:P.get(n.typeName),_=t!=null&&t.timeInfoByTypeName?b==null?void 0:b.startField:null,h=_?n.feature.attributes[_]:null,w=b==null?void 0:b.endField,v=w?n.feature.attributes[w]:null;if($!==void 0&&U!==void 0){let H=l+"-"+d;e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(H=H+"-"+h+"-"+v);const W=ie.get(H);(W==null?void 0:W.has(n.typeName))||(A[R]=$,E[R]=U,e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"||(j[R]=h?new Date(h).getTime():NaN,le[R]=v?new Date(v).getTime():NaN),W===void 0?ie.set(H,new Map([[n.typeName,R]])):W.set(n.typeName,R),R++),s.push(n)}else de=!0,this.relationshipLinkChartDiagramLookup.set(l,null)}),de&&G.getLogger(this).warn("A relationship is a member of this layer that has either origin or destination entity nodes that are not members. The diagram geometry will be set to null");const ue=this._validateLayoutSettings(e,t),ne=this._convertLayoutSettingsToCalculationSettings(ue);await Ve();let q=!1,D=null;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){let n;({success:q,links:D,graphics:n}=Ee(m,f,r,c,C,A.subarray(0,R),E.subarray(0,R),j.subarray(0,R),le.subarray(0,R),e==="CHRONOLOGICAL_MULTIPLE",(t==null?void 0:t.chronologicalLayoutSettings)??{})),q&&(this.chronologicalAuxiliaryGraphics=n)}else({success:q,links:D}=z(m,f,r,A.subarray(0,R),E.subarray(0,R),ne.computationBudgetTime,ne.idealEdgeLengthMultiplier,ne.repulsionRadiusMultiplier));if(!q)throw new K("knowledge-graph:layout-failed","Attempting to arrange the records in the specified layout failed");for(let n=0;n<M.length;n++){if(r[n]>84.9999?r[n]=84.9999:r[n]<-84.9999&&(r[n]=-84.9999),f[n]>179.9999?f[n]=179.9999:f[n]<-179.9999&&(f[n]=-179.9999),M[n].feature.attributes[I]=new re(f[n],r[n]),o.has(M[n].typeName)){const d=o.get(M[n].typeName);d==null||d.set(M[n].feature.attributes[x],M[n].feature)}else{const d=new Map;d.set(M[n].feature.attributes[x],M[n].feature),o.set(M[n].typeName,d)}y.set(M[n].feature.attributes[x],M[n].feature);const l=V(M[n].feature.attributes[I]);this.entityLinkChartDiagramLookup.set(M[n].feature.attributes[x],M[n].feature.attributes[I]?l:null),M[n].feature.attributes[I].x<O.xmin&&(O.xmin=M[n].feature.attributes[I].x),M[n].feature.attributes[I].x>O.xmax&&(O.xmax=M[n].feature.attributes[I].x),M[n].feature.attributes[I].y<O.ymin&&(O.ymin=M[n].feature.attributes[I].y),M[n].feature.attributes[I].y>O.ymax&&(O.ymax=M[n].feature.attributes[I].y)}if(this.linkChartExtent.xmin=O.xmin,this.linkChartExtent.xmax=O.xmax,this.linkChartExtent.ymin=O.ymin,this.linkChartExtent.ymax=O.ymax,!D)throw new K("knowledge-graph:layout-failed","Attempting to retrieve link geometry from diagram engine failed");const J=new Map,se=new Map,oe=new Map,ce=new Set;for(let n=0;n<s.length;n++){const l=[],d=s[n],$=d.feature.attributes[X],U=d.feature.attributes[Z];let b=$+"-"+U;if(e==="CHRONOLOGICAL_SINGLE"||e==="CHRONOLOGICAL_MULTIPLE"){const p=(pe=t==null?void 0:t.timeInfoByTypeName)==null?void 0:pe.get(d.typeName),S=t!=null&&t.timeInfoByTypeName?p==null?void 0:p.startField:null,B=S?d.feature.attributes[S]:null,Q=p==null?void 0:p.endField;b+="-"+B+"-"+(Q?d.feature.attributes[Q]:null)}const _=ie.get(b).get(d.typeName),h=_===0?0:D==null?void 0:D.vertexEndIndex[_-1];if(!ce.has(_)){if(ce.add(_),D.types[_]===we.Recursive){const p=[D.vertices[2*h],D.vertices[2*h+1]],S=[D.vertices[2*(h+1)],D.vertices[2*(h+1)+1]],B=[.5*(p[0]+S[0]),.5*(p[1]+S[1])],Q=[B[0]-p[0],B[1]-p[1]],Ne=[B[0]+Q[1],B[1]-Q[0]],Ie=[B[0]-Q[1],B[1]+Q[0]];l.push(p),l.push(Ne),l.push(S),l.push(Ie),l.push(p)}else{if(D.types[_]!==we.Regular){G.getLogger(this).warn("A relationship generated an unsupported link geometry type.  It will not be rendered");continue}for(let p=h;p<D.vertexEndIndex[_];p++)l.push([D.vertices[2*p],D.vertices[2*p+1]])}if(e!=="CHRONOLOGICAL_SINGLE"&&e!=="CHRONOLOGICAL_MULTIPLE"){const p=(ye=M[L.get($)])==null?void 0:ye.feature.attributes[I],S=(ge=M[L.get(U)])==null?void 0:ge.feature.attributes[I];l[0][0]===p.x&&l[0][1]===p.y||(l[0]=[p.x,p.y]),l[l.length-1][0]===S.x&&l[l.length-1][1]===S.y||(l[l.length-1]=[S.x,S.y])}for(let p=1;p<l.length-1;p++)l[p][1]>85.5?l[p][1]=85.5:l[p][1]<-85.5&&(l[p][1]=-85.5),l[p][0]>179.9999?l[p][0]=179.9999:l[p][0]<-179.9999&&(l[p][0]=-179.9999);J.has(b)?J.get(b).push(l):J.set(b,[l])}const w=J.get(b);se.has(b)||(se.set(b,new Map),oe.set(b,new Map));const v=se.get(b),P=oe.get(b);v.has(d.typeName)||(v.set(d.typeName,w.shift()),P.set(d.typeName,0));const H=v.get(d.typeName);P.set(d.typeName,P.get(d.typeName)+1);const W=new be({paths:[H]});if(d.feature.attributes[I]=W,u.has(d.typeName)){const p=u.get(d.typeName);p==null||p.set(d.feature.attributes[x],d.feature)}else{const p=new Map;p.set(d.feature.attributes[x],d.feature),u.set(d.typeName,p)}y.set(d.feature.attributes[x],d.feature);const fe=V(d.feature.attributes[I]);this.relationshipLinkChartDiagramLookup.set(d.feature.attributes[x],d.feature.attributes[I]?fe:null)}for(const n of s)n.feature.attributes[Ye]=((me=oe.get(n.feature.attributes[X]+"-"+n.feature.attributes[Z]))==null?void 0:me.get(n.typeName))??null;return this._currentLinkChartConfig={layoutMode:e,layoutOptions:ue},{nodes:o,links:u,idMap:y}}async applyNewLinkChartLayout(e="RADIAL_TREE",t){const a=[];await this._calculateLayoutWithSublayerTimeInfo(e,t),this.layers.forEach(i=>{a.push(i.refreshCachedQueryEngine())}),await Promise.all(a),this._refreshNamedTypes()}getCurrentNodeLocations(){var t,a;const e=new Map;return(a=(t=this.dataManager.inclusionModeDefinition)==null?void 0:t.namedTypeDefinitions)==null||a.forEach(i=>{var s;(s=i==null?void 0:i.members)==null||s.forEach(o=>{const u=o.linkChartLocation;let y;const L=o.id;u&&(y="x"in u?{x:u.x,y:u.y}:{x:u.coords[0],y:u.coords[1]},e.set(L,new re({x:y.x,y:y.y})))})}),e}async synchronizeInclusionListWithCache(){return new Promise(e=>{var t;(t=this.dataManager.inclusionModeDefinition)==null||t.namedTypeDefinitions.forEach((a,i)=>{if(a.useAllData=!1,a.members&&a.members.size>0){if(!this.dataManager.sublayerCaches.get(i))return;const s=new Set(Array.from(this.dataManager.sublayerCaches.get(i).keys()));Array.from(a.members.keys()).filter(o=>!s.has(o)).forEach(o=>{var u;(u=a.members)==null||u.delete(o)})}}),e()})}async refreshLinkChartCache(e){await this.dataManager.refreshCacheContent(e);const t=[];this.layers.forEach(a=>{t.push(a.refreshCachedQueryEngine())}),await Promise.all(t),this._refreshNamedTypes()}async connectBetweenEntities(e){let t=[];for(const i of this.dataManager.relationshipTypeNames){const s=this.sublayerIdsCache.get(i);s&&(t=t.concat(Array.from(s.keys())))}const a=await this.dataManager.getRelationshipsBetweenNodes(e,t);return await this._handleNewRecords(a),{records:a}}async connectFromEntities(e){let t=[];for(const s of this.dataManager.relationshipTypeNames){const o=this.sublayerIdsCache.get(s);o&&(t=t.concat(Array.from(o.keys())))}let a=[];for(const s of this.dataManager.entityTypeNames){const o=this.sublayerIdsCache.get(s);o&&(a=a.concat(Array.from(o)))}const i=await this.dataManager.getRelationshipsFromNodes(e,a,t);return await this._handleNewRecords(i),{records:i}}getCurrentLayout(){return this._currentLinkChartConfig.layoutMode}async _calculateLayoutWithSublayerTimeInfo(e="RADIAL_TREE",t){const a=new Map;this.layers.forEach(i=>{a.set(i.objectType.name,i.timeInfo)}),await this.calculateLinkChartLayout(e,{timeInfoByTypeName:a,...t})}async _handleNewRecords(e){const t=[];this.dataManager.addToLayer(e);for(const i of e)this.sublayerIdsCache.has(i.typeName)||(this.sublayerIdsCache.set(i.typeName,new Set),t.push(i.typeName)),this.sublayerIdsCache.get(i.typeName).add(i.id);for(const i of t){const s=this._graphTypeLookup.get(i);if(s){const o=this._createSublayer(s);s.type==="entity"?this.dataManager.entityTypeNames.add(i):this.dataManager.relationshipTypeNames.add(i),o.geometryType?this.layers.push(o):this.tables.push(o),this.dataManager.sublayerCaches.set(i,new Map)}}await ke(this,t),await this.dataManager.refreshCacheContent(e.map(i=>i.id));const a=Object.assign({},this._currentLinkChartConfig.layoutOptions);a.lockedNodeLocations=new Map;for(const[i,s]of this.entityLinkChartDiagramLookup.entries())s&&a.lockedNodeLocations.set(i,new re(s.coords[0],s.coords[1]));await this.applyNewLinkChartLayout(this._currentLinkChartConfig.layoutMode,a)}_createSublayers(e,t,a){e.forEach(i=>{const s=this._createSublayer(i);a(s)&&t.push(s),this._updateSublayerCaches(i)})}_updateSublayers(e,t){t.forEach(a=>{a.parentCompositeLayer=this;const i=e.find(s=>s.type===a.graphType&&s.name===a.graphTypeName);i&&(a.objectType=i,a.read({title:i.name},{origin:"service"}),this._updateSublayerCaches(i))})}_updateSublayerCaches(e){const t=this.dataManager.sublayerCaches;t.has(e.name)||t.set(e.name,new Map)}async _initializeDiagram(){var e,t;this.defaultLinkChartConfig?this.defaultLinkChartConfig.doNotRecalculateLayout?((t=(e=this.dataManager.inclusionModeDefinition)==null?void 0:e.namedTypeDefinitions)==null||t.forEach((a,i)=>{var s;(s=a==null?void 0:a.members)==null||s.forEach(o=>{const u=o.linkChartLocation;let y;const L=o.id;if(!u)return;y="x"in u?{x:u.x,y:u.y}:{x:u.coords[0],y:u.coords[1]};const m=V(y);this.dataManager.relationshipTypeNames.has(i)?this.relationshipLinkChartDiagramLookup.set(L,m):this.entityLinkChartDiagramLookup.set(L,m),this.linkChartExtent.xmin>y.x&&(this.linkChartExtent.xmin=y.x),this.linkChartExtent.xmax<y.x&&(this.linkChartExtent.xmax=y.x),this.linkChartExtent.ymin>y.y&&(this.linkChartExtent.ymin=y.y),this.linkChartExtent.ymax<y.y&&(this.linkChartExtent.ymax=y.y)})}),this.memberRelationshipTypes.forEach(a=>{var i;a.name&&((i=this.dataManager.sublayerCaches.get(a.name))==null||i.forEach(s=>{const o=this.relationshipLinkChartDiagramLookup.get(s.attributes[X]),u=this.relationshipLinkChartDiagramLookup.get(s.attributes[Z]);if(o&&u){const y=V(new be({paths:[[[o.coords[0],o.coords[1]],[u.coords[0],u.coords[1]]]]}));this.relationshipLinkChartDiagramLookup.set(s.attributes[x],y)}else this.relationshipLinkChartDiagramLookup.set(s.attributes[x],null)}))})):await this._calculateLayoutWithSublayerTimeInfo(this.defaultLinkChartConfig.layoutMode,{lockedNodeLocations:this.getCurrentNodeLocations(),...this.defaultLinkChartConfig.layoutOptions||{}}):await this._calculateLayoutWithSublayerTimeInfo("RADIAL_TREE",{lockedNodeLocations:this.getCurrentNodeLocations()})}_refreshNamedTypes(){for(const e of this.layers)e.emit("refresh",{dataChanged:!0});for(const e of this.tables)e.emit("refresh",{dataChanged:!0})}_validateLayoutSettings(e,t){const a=c=>typeof c=="number"&&!isNaN(c),i=c=>a(c)&&c>=1,s=c=>a(c)&&c>=1,o=c=>Object.values(te).includes(c),u=c=>a(c)&&c>=0,y={organicLayoutSettings:{},chronologicalLayoutSettings:{}};if(!new Set(["FORCE_DIRECTED","COMMUNITY","GEOGRAPHIC","CHRONOLOGICAL_MULTIPLE","CHRONOLOGICAL_SINGLE"]).has(e)||!t)return y;t.organicLayoutSettings??(t.organicLayoutSettings={});const{computationBudgetTime:L,repulsionRadiusMultiplier:m,idealEdgeLength:f,idealEdgeLengthType:r}=t.organicLayoutSettings;if(s(L)?y.organicLayoutSettings.computationBudgetTime=L:L!==void 0&&G.getLogger(this).warn("Invalid layout computationBudgetTime setting, will revert to default setting"),i(m)?y.organicLayoutSettings.repulsionRadiusMultiplier=m:m!==void 0&&G.getLogger(this).warn("Invalid layout repulsionRadiusMultiplier setting, will revert to default setting"),e==="GEOGRAPHIC"&&(f!==void 0||r!==void 0)&&(o(r)?y.organicLayoutSettings.idealEdgeLengthType=r:r!==void 0&&G.getLogger(this).warn('Invalid layout idealEdgeLengthType setting, will revert to "multiplier" setting'),u(f)?y.organicLayoutSettings.idealEdgeLength=f:f!==void 0&&G.getLogger(this).warn("Invalid layout idealEdgeLength setting, will revert to default setting")),(e==="CHRONOLOGICAL_MULTIPLE"||e==="CHRONOLOGICAL_SINGLE")&&t.chronologicalLayoutSettings){const c=t.chronologicalLayoutSettings;c.durationLineWidth&&c.durationLineWidth<0&&G.getLogger(this).warn("Invalid layout durationLineWidth setting, will revert to default setting")}return y}_convertLayoutSettingsToCalculationSettings(e){e.organicLayoutSettings??(e.organicLayoutSettings={});let t=e.organicLayoutSettings.idealEdgeLength;return e.organicLayoutSettings.idealEdgeLengthType===te.ABSOLUTE&&(t===void 0?t=-1:t*=-1),{computationBudgetTime:e.organicLayoutSettings.computationBudgetTime,repulsionRadiusMultiplier:e.organicLayoutSettings.repulsionRadiusMultiplier,idealEdgeLengthMultiplier:t}}_createSublayer(e){return new Y({objectType:e,parentCompositeLayer:this,graphType:e.type})}_handleSublayersChange(e,t){t&&(t.forEach(a=>{a.parent=null}),this.removeHandles("sublayers-owner")),e&&(e.forEach(a=>{a.parent=this}),this.addHandles([e.on("after-add",({item:a})=>{a.parent=this}),e.on("after-remove",({item:a})=>{a.parent=null})],"sublayers-owner"))}};T([N()],k.prototype,"dataPreloadedInLocalCache",void 0),T([N()],k.prototype,"defaultLinkChartConfig",void 0),T([N()],k.prototype,"dataManager",void 0),T([N()],k.prototype,"inclusionModeDefinition",null),T([N()],k.prototype,"knowledgeGraph",void 0),T([N({type:ee.ofType(Y),json:{write:{ignoreOrigin:!0}}})],k.prototype,"layers",void 0),T([N()],k.prototype,"entityLinkChartDiagramLookup",void 0),T([N()],k.prototype,"relationshipLinkChartDiagramLookup",void 0),T([N()],k.prototype,"linkChartExtent",void 0),T([N()],k.prototype,"memberEntityTypes",void 0),T([N()],k.prototype,"memberRelationshipTypes",void 0),T([N({type:["LinkChartLayer"]})],k.prototype,"operationalLayerType",void 0),T([N()],k.prototype,"sublayerIdsCache",void 0),T([N({type:ee.ofType(Y),json:{write:{ignoreOrigin:!0}}})],k.prototype,"tables",void 0),T([N({json:{read:!1}})],k.prototype,"type",void 0),T([N({json:{read:!1}})],k.prototype,"chronologicalAuxiliaryGraphics",void 0),k=T([Ge("esri.layers.LinkChartLayer")],k);const mt=k;export{mt as default};
