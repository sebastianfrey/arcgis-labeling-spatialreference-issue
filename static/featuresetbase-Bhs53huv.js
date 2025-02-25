import{W as V,Z as _,ap as Ee,aF as ve,aE as Le,eU as Ce,eT as Ze,a4 as ke,m6 as Pe,ak as je,ce as Re,hJ as R,hC as Ue,hK as S,P as he,c9 as Me,gW as ee,dS as j,m7 as Oe,aB as $e}from"./index-DKbcOXvO.js";import{c as U,t as ze,D as Ve,l as re}from"./arcade-BfFnI3OG.js";import{a as p,r as y}from"./executionError-DhMmVYP7.js";import{R as We,q as Ie,p as He,c as se,e as Ge,a as Be,b as Qe,N as ne,j as _e,F as Je,E as qe,L as W,B as Ke,d as K,f as P,k as oe}from"./featureSetUtils-CwlKcwrE.js";import{o as x,h as Ye,i as le,B as L,y as N,N as Xe,j as Fe,g as be,Q as Te,q as Z,Z as G,H as Y,a as H,t as en,G as nn,b as B,C as tn,P as X,S as de}from"./languageUtils-Dw31acRB.js";import{l as an}from"./portalUtils-CNcb9VMc.js";import{u as rn,O as De}from"./SpatialFilter-Daitsugw.js";import{D as T}from"./WhereClause-CwBWhUUt.js";import{d as sn,i as q,p as Se}from"./Association-Dq4MjoNc.js";import"./TimeOnly-D9V4gdT1.js";import"./unitConversion-CzRBBR1u.js";import"./number-BXlzBnh7.js";import"./operatorsWorkerConnection-Cc8ZsYxW.js";let te=class extends ve{constructor(n){super(n),this.associations=[]}};V([_({type:[sn],json:{write:!0}})],te.prototype,"associations",void 0),te=V([Ee("esri.rest.networks.support.QueryAssociationsResult")],te);const on=te;function ln(i){const{returnDeletes:n,elements:a,gdbVersion:w,moment:g}=i.toJSON();return{returnDeletes:n,elements:JSON.stringify(a.map(e=>({globalId:e.globalId,networkSourceId:e.networkSourceId,terminalId:e.terminalId}))),types:JSON.stringify(i.types.map(e=>q.toJSON(e))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:w,moment:g}}async function dn(i,n,a){const w=Le(i),g={...ln(n),f:"json"},e=Ce({...w.query,...g}),t=Ze(e,{...a,method:"post"}),r=`${w.path}/associations/query`,{data:d}=await ke(r,t),f=on.fromJSON(d);return n.types.includes("connectivity")&&Pe(je.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),f}var ue;let z=ue=class extends ve{static from(i){return Re(ue,i)}constructor(i){super(i),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};V([_({type:Boolean,json:{write:!0}})],z.prototype,"returnDeletes",void 0),V([_({type:[Se],json:{write:!0}})],z.prototype,"elements",void 0),V([_({type:[q.apiValues],json:{type:q.jsonValues,read:q.read,write:q.write}})],z.prototype,"types",void 0),V([_({type:String,json:{write:!0}})],z.prototype,"gdbVersion",void 0),V([_({type:Date,json:{type:Number,write:{writer:(i,n)=>{n.moment=i==null?void 0:i.getTime()}}}})],z.prototype,"moment",void 0),z=ue=V([Ee("esri.rest.networks.support.QueryAssociationsParameters")],z);const cn=z;function un(i){if(i.length===1){if(S(i[0]))return re("distinct",i[0],-1);if(H(i[0]))return re("distinct",i[0].toArray(),-1)}return re("distinct",i,-1)}function ce(i,n,a){const w=i.getVariables();if(w.length>0){const g={};for(const e of w)g[e]=n.evaluateIdentifier(a,{name:e});i.parameters=g}return i}function u(i,n,a=null){for(const w in i)if(w.toLowerCase()===n.toLowerCase())return i[w];return a}function xe(i){if(i===null)return null;const n={type:u(i,"type",""),name:u(i,"name","")};if(n.type==="range")n.range=u(i,"range",[]);else{n.codedValues=[];for(const a of u(i,"codedValues",[]))n.codedValues.push({name:u(a,"name",""),code:u(a,"code",null)})}return n}function fe(i){if(i===null)return null;const n={},a=u(i,"wkt");a!==null&&(n.wkt=a);const w=u(i,"wkid");return w!==null&&(n.wkid=w),n}function Ne(i){if(i===null)return null;const n={hasZ:u(i,"hasz",!1),hasM:u(i,"hasm",!1)},a=u(i,"spatialreference");a!=null&&(n.spatialReference=fe(a));const w=u(i,"x",null);if(w!==null)return n.x=w,n.y=u(i,"y",null),n.hasZ&&(n.z=u(i,"z",null)),n.hasM&&(n.m=u(i,"m",null)),n;const g=u(i,"rings",null);if(g!==null)return n.rings=g,n;const e=u(i,"paths",null);if(e!==null)return n.paths=e,n;const t=u(i,"points",null);if(t!==null)return n.points=t,n;for(const r of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const d=u(i,r,null);d!==null&&(n[r]=d)}return n}function fn(i,n){for(const a of n)if(a===i)return!0;return!1}function mn(i){return!!i.layerDefinition&&!!i.featureSet&&fn(i.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])!==!1&&S(i.layerDefinition.fields)!==!1&&S(i.featureSet.features)!==!1}function Q(i){return(i==null?void 0:i.toLowerCase())==="utc"?"UTC":(i==null?void 0:i.toLowerCase())==="unknown"?"Unknown":i}async function pn(i,n,a,w,g,e,t){var m,D,h;const r=await i.getFeatureSetInfo();if(((r==null?void 0:r.layerId)??null)===null||!g.layerIdLookup.get(r.layerId))return null;const d=i.serviceUrl().replace(/\/FeatureServer/i,"/UtilityNetworkServer"),f=[];switch(a){case"connected":f.push("connectivity"),f.push("junction-edge-from-connectivity"),f.push("junction-edge-to-connectivity"),f.push("junction-edge-midspan-connectivity"),f.push("junction-junction-connectivity");break;case"container":case"content":f.push("containment");break;case"structure":case"attached":f.push("attachment");break;case"junctionedge":f.push("junction-edge-from-connectivity"),f.push("junction-edge-to-connectivity");break;case"midspan":f.push("junction-edge-midspan-connectivity");break;default:throw new p(e,y.InvalidParameter,t)}let l=null,o=!1;if(w!==null&&w!==""&&w!==void 0){for(const F of g.terminals)F.terminalName===w&&(l=F.terminalId);l===null&&(o=!0)}const s=[];if(!o){const F=new Se({globalId:n.field(i.globalIdField),networkSourceId:g.layerIdLookup.get(r.layerId).sourceId,...l?{terminalId:l}:""}),E=await dn(d,new cn({types:f,elements:[F]}));let J=0;for(const v of E.associations){let k=null,M="",A="";if(((m=v.fromNetworkElement)==null?void 0:m.globalId)===F.globalId?(k=v.toNetworkElement,A="to"):((D=v.toNetworkElement)==null?void 0:D.globalId)===F.globalId&&(k=v.fromNetworkElement,A="from"),!k)continue;switch(a){case"attached":if(v.associationType!=="attachment"||A!=="to")continue;break;case"structure":if(v.associationType!=="attachment"||A!=="from")continue;break;case"container":if(v.associationType!=="containment"||A!=="from")continue;break;case"content":if(v.associationType!=="containment"||A!=="to")continue;break;case"connected":break;case"junctionedge":v.associationType==="junction-edge-to-connectivity"?M="to":v.associationType==="junction-edge-from-connectivity"&&(M="from");break;case"midspan":if(v.associationType!=="junction-edge-midspan-connectivity")continue}const ie=((h=g.sourceIdLookup.get(k.networkSourceId))==null?void 0:h.className)??"";s.push(new $e({geometry:null,attributes:{objectId:J++,globalId:k.globalId,percentAlong:v.percentAlong??0,isContentVisible:v.isContentVisible?0:1,className:ie,side:M}}))}}const c=new ee({source:s,geometryType:null,objectIdField:"objectId",globalIdField:"globalId",fields:[new j({name:"objectId",alias:"objectId",type:"oid"}),new j({name:"globalId",alias:"globalId",type:"global-id"}),new j({name:"percentAlong",alias:"percentAlong",type:"double"}),new j({name:"side",alias:"side",type:"string"}),new j({name:"isContentVisible",alias:"isContentVisible",type:"integer"}),new j({name:"className",alias:"className",type:"string"})]});return ne(c)}function An(i){i.mode==="async"&&(i.functions.timezone=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{var d,f;if(x(e,1,2,n,a),Ye(e[0])||le(e[0]))return"Unknown";if(L(e[0])){if(await e[0].load(),e.length===1||e[1]===null)return e[0].datesInUnknownTimezone?Q("unknown"):Q(e[0].dateFieldsTimeZone);if(!(e[1]instanceof U)||e[1].hasField("type")===!1)throw new p(n,y.InvalidParameter,a);const l=e[1].field("type");if(R(l)===!1)throw new p(n,y.InvalidParameter,a);switch(N(l).toLowerCase()){case"preferredtimezone":return Q(e[0].preferredTimeZone);case"editfieldsinfo":return Q(((d=e[0].editFieldsInfo)==null?void 0:d.timeZone)??null);case"timeinfo":return Q(((f=e[0].timeInfo)==null?void 0:f.timeZone)??null);case"field":if(e[1].hasField("fieldname")&&R(e[1].field("fieldname")))return Q(e[0].fieldTimeZone(N(e[1].field("fieldname"))))}throw new p(n,y.InvalidParameter,a)}const t=Xe(e[0],Fe(n));if(t===null)return null;const r=t.timeZone;return r==="system"?Ue.systemTimeZoneCanonicalName:r.toLowerCase()==="utc"?"UTC":r.toLowerCase()==="unknown"?"Unknown":r})},i.functions.sqltimestamp=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{x(e,1,3,n,a);const t=e[0];if(be(t)){if(e.length===1)return t.toSQLWithKeyword();if(e.length===2)return t.changeTimeZone(N(e[1])).toSQLWithKeyword();throw new p(n,y.InvalidParameter,a)}if(le(t))return t.toSQLWithKeyword();if(L(t)){if(e.length!==3)throw new p(n,y.InvalidParameter,a);await t.load();const r=N(e[1]);if(le(e[2]))return e[2].toSQLWithKeyword();if(be(e[2])===!1)throw new p(n,y.InvalidParameter,a);const d=t.fieldTimeZone(r);return d==null?e[2].toSQLWithKeyword():e[2].changeTimeZone(d).toSQLWithKeyword()}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"sqltimestamp",min:2,max:4}),i.functions.featuresetbyid=function(n,a){return i.standardFunctionAsync(n,a,(w,g,e)=>{if(x(e,2,4,n,a),Te(e[0])){const t=N(e[1]);let r=Z(e[2],null);const d=G(Z(e[3],!0));if(r===null&&(r=["*"]),S(r)===!1)throw new p(n,y.InvalidParameter,a);return e[0].featureSetById(t,d,r)}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"featuresetbyid",min:2,max:4}),i.functions.getfeatureset=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,1,2,n,a),Y(e[0])){let t=Z(e[1],"datasource");return t===null&&(t="datasource"),t=N(t).toLowerCase(),We(e[0].fullSchema(),t,n.lrucache,n.interceptor,n.spatialReference??null)}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"getfeatureset",min:1,max:2}),i.functions.featuresetbyportalitem=function(n,a){return i.standardFunctionAsync(n,a,(w,g,e)=>{var l,o;if(x(e,2,5,n,a),e[0]===null)throw new p(n,y.PortalRequired,a);if(e[0]instanceof ze){const s=N(e[1]),c=N(e[2]);let m=Z(e[3],null);const D=G(Z(e[4],!0));if(m===null&&(m=["*"]),S(m)===!1)throw new p(n,y.InvalidParameter,a);let h;return h=(l=n.services)!=null&&l.portal?n.services.portal:he.getDefault(),h=an(e[0],h),Ie(s,c,n.spatialReference??null,m,D,h,n.lrucache,n.interceptor)}if(R(e[0])===!1)throw new p(n,y.PortalRequired,a);const t=N(e[0]),r=N(e[1]);let d=Z(e[2],null);const f=G(Z(e[3],!0));if(d===null&&(d=["*"]),S(d)===!1)throw new p(n,y.InvalidParameter,a);return Ie(t,r,n.spatialReference??null,d,f,((o=n.services)==null?void 0:o.portal)??he.getDefault(),n.lrucache,n.interceptor)})},i.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),i.functions.featuresetbyname=function(n,a){return i.standardFunctionAsync(n,a,(w,g,e)=>{if(x(e,2,4,n,a),Te(e[0])){const t=N(e[1]);let r=Z(e[2],null);const d=G(Z(e[3],!0));if(r===null&&(r=["*"]),S(r)===!1)throw new p(n,y.InvalidParameter,a);return e[0].featureSetByName(t,d,r)}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"featuresetbyname",min:2,max:4}),i.functions.featureset=function(n,a){return i.standardFunction(n,a,(w,g,e)=>{x(e,1,1,n,a);const t={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(R(e[0])){const r=JSON.parse(e[0]);r.layerDefinition!==void 0?(t.layerDefinition=r.layerDefinition,t.featureSet=r.featureSet,r.layerDefinition.spatialReference&&(t.layerDefinition.spatialReference=r.layerDefinition.spatialReference)):(t.featureSet.features=r.features,t.featureSet.geometryType=r.geometryType,t.layerDefinition.geometryType=t.featureSet.geometryType,t.layerDefinition.objectIdField=r.objectIdFieldName??"",t.layerDefinition.typeIdField=r.typeIdFieldName,t.layerDefinition.globalIdField=r.globalIdFieldName,t.layerDefinition.fields=r.fields,r.spatialReference&&(t.layerDefinition.spatialReference=r.spatialReference))}else{if(!(e[0]instanceof U))throw new p(n,y.InvalidParameter,a);{const r=JSON.parse(e[0].castToText(!0)),d=u(r,"layerdefinition");if(d!==null){t.layerDefinition.geometryType=u(d,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.globalIdField=u(d,"globalidfield",""),t.layerDefinition.objectIdField=u(d,"objectidfield",""),t.layerDefinition.typeIdField=u(d,"typeidfield",""),t.layerDefinition.hasZ=u(d,"hasz",!1)===!0,t.layerDefinition.hasM=u(d,"hasm",!1)===!0;const f=u(d,"spatialreference");f&&(t.layerDefinition.spatialReference=fe(f));const l=[];for(const s of u(d,"fields",[])){const c={name:u(s,"name",""),alias:u(s,"alias",""),type:u(s,"type",""),nullable:u(s,"nullable",!0),editable:u(s,"editable",!0),length:u(s,"length",null),domain:xe(u(s,"domain"))};l.push(c)}t.layerDefinition.fields=l;const o=u(r,"featureset");if(o){const s={};for(const c of l)s[c.name.toLowerCase()]=c.name;for(const c of u(o,"features",[])){const m={},D=u(c,"attributes",{});for(const h in D)m[s[h.toLowerCase()]]=D[h];t.featureSet.features.push({attributes:m,geometry:Ne(u(c,"geometry"))})}}}else{t.layerDefinition.hasZ=u(r,"hasz",!1)===!0,t.layerDefinition.hasM=u(r,"hasm",!1)===!0,t.layerDefinition.geometryType=u(r,"geometrytype",""),t.featureSet.geometryType=t.layerDefinition.geometryType,t.layerDefinition.objectIdField=u(r,"objectidfieldname",""),t.layerDefinition.typeIdField=u(r,"typeidfieldname","");const f=u(r,"spatialreference");f&&(t.layerDefinition.spatialReference=fe(f));const l=[],o=u(r,"fields",null);if(!S(o))throw new p(n,y.InvalidParameter,a);for(const m of o){const D={name:u(m,"name",""),alias:u(m,"alias",""),type:u(m,"type",""),nullable:u(m,"nullable",!0),editable:u(m,"editable",!0),length:u(m,"length",null),domain:xe(u(m,"domain"))};l.push(D)}t.layerDefinition.fields=l;const s={};for(const m of l)s[m.name.toLowerCase()]=m.name;let c=u(r,"features",null);if(S(c))for(const m of c){const D={},h=u(m,"attributes",{});for(const F in h)D[s[F.toLowerCase()]]=h[F];t.featureSet.features.push({attributes:D,geometry:Ne(u(m,"geometry",null))})}else c=null,t.featureSet.features=c}}}if(mn(t)===!1)throw new p(n,y.InvalidParameter,a);return t.layerDefinition.geometryType||(t.layerDefinition.geometryType="esriGeometryNull"),He.create(t,n.spatialReference)})},i.signatures.push({name:"featureset",min:1,max:1}),i.functions.filter=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,2,2,n,a),S(e[0])||H(e[0])){const t=[];let r,d=e[0];if(d instanceof en&&(d=d.toArray()),!nn(e[1]))throw new p(n,y.InvalidParameter,a);r=e[1].createFunction(n);for(const f of d){const l=r(f);Me(l)?await l===!0&&t.push(f):l===!0&&t.push(f)}return t}if(L(e[0])){const t=await e[0].load(),r=T.create(e[1],{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),d=r.getVariables();if(d.length>0){const f={};for(const l of d)f[l]=i.evaluateIdentifier(n,{name:l});r.parameters=f}return new se({parentfeatureset:e[0],whereclause:r})}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"filter",min:2,max:2}),i.functions.orderby=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,2,2,n,a),L(e[0])){const t=new Ge(e[1]);return new Be({parentfeatureset:e[0],orderbyclause:t})}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"orderby",min:2,max:2}),i.functions.top=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,2,2,n,a),L(e[0]))return new Qe({parentfeatureset:e[0],topnum:e[1]});if(S(e[0]))return B(e[1])>=e[0].length?e[0].slice():e[0].slice(0,B(e[1]));if(H(e[0]))return B(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,B(e[1]));throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"top",min:2,max:2}),i.functions.first=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,1,1,n,a),L(e[0])){const t=await e[0].first(w.abortSignal);if(t!==null){const r=Ve.createFromGraphicLikeObject(t.geometry,t.attributes,e[0],n.timeZone);return r._underlyingGraphic=t,r}return t}return S(e[0])?e[0].length===0?null:e[0][0]:H(e[0])?e[0].length()===0?null:e[0].get(0):null})},i.signatures.push({name:"first",min:1,max:1}),i.functions.attachments=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{x(e,1,2,n,a);const t={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1){if(e[1]instanceof U){if(e[1].hasField("minsize")&&(t.minsize=B(e[1].field("minsize"))),e[1].hasField("metadata")&&(t.returnMetadata=G(e[1].field("metadata"))),e[1].hasField("maxsize")&&(t.maxsize=B(e[1].field("maxsize"))),e[1].hasField("types")){const r=tn(e[1].field("types"),!1);r.length>0&&(t.types=r)}}else if(e[1]!==null)throw new p(n,y.InvalidParameter,a)}if(Y(e[0])){let r=e[0]._layer;return r instanceof ee&&(r=ne(r,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),r===null?[]:L(r)===!1?[]:(await r.load(),r.queryAttachments(e[0].field(r.objectIdField),t.minsize,t.maxsize,t.types,t.returnMetadata))}if(e[0]===null)return[];throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"attachments",min:1,max:2}),i.functions.featuresetbyrelationshipname=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{x(e,2,4,n,a);const t=e[0],r=N(e[1]);let d=Z(e[2],null);const f=G(Z(e[3],!0));if(d===null&&(d=["*"]),S(d)===!1)throw new p(n,y.InvalidParameter,a);if(e[0]===null)return null;if(!Y(e[0]))throw new p(n,y.InvalidParameter,a);let l=t._layer;if(l instanceof ee&&(l=ne(l,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),l===null||L(l)===!1)return null;l=await l.load();const o=l.relationshipMetaData().filter(h=>h.name===r);if(o.length===0)return null;if(o[0].relationshipTableId!==void 0&&o[0].relationshipTableId!==null&&o[0].relationshipTableId>-1)return _e(l,o[0],t.field(l.objectIdField),l.spatialReference,d,f,n.lrucache,n.interceptor);let s=l.serviceUrl();if(!s)return null;s=s.charAt(s.length-1)==="/"?s+o[0].relatedTableId.toString():s+"/"+o[0].relatedTableId.toString();const c=await Je(s,l.spatialReference,d,f,n.lrucache,n.interceptor);await c.load();let m=c.relationshipMetaData();if(m=m.filter(h=>h.id===o[0].id),t.hasField(o[0].keyField)===!1||t.field(o[0].keyField)===null){const h=await l.getFeatureByObjectId(t.field(l.objectIdField),[o[0].keyField]);if(h){const F=T.create(m[0].keyField+"= @id",{fieldsIndex:c.getFieldsIndex(),timeZone:c.dateFieldsTimeZoneDefaultUTC});return F.parameters={id:h.attributes[o[0].keyField]},c.filter(F)}return new rn({parentfeatureset:c})}const D=T.create(m[0].keyField+"= @id",{fieldsIndex:c.getFieldsIndex(),timeZone:c.dateFieldsTimeZoneDefaultUTC});return D.parameters={id:t.field(o[0].keyField)},c.filter(D)})},i.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),i.functions.featuresetbyassociation=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{x(e,2,3,n,a);const t=e[0],r=N(Z(e[1],"")).toLowerCase(),d=R(e[2])?N(e[2]):null;if(e[0]===null)return null;if(!Y(e[0]))throw new p(n,y.InvalidParameter,a);let f=t._layer;if(f instanceof ee&&(f=ne(f,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),f===null||L(f)===!1)return null;await f.load();const l=f.serviceUrl(),o=await qe(l,n.spatialReference,!0);if(o.unVersion>=8)return await pn(f,t,r,d,o,n,a);const s=o.associations;let c=null,m=null,D=!1;if(d!==null&&d!==""&&d!==void 0){for(const b of o.terminals)b.terminalName===d&&(m=b.terminalId);m===null&&(D=!0)}const h=s.getFieldsIndex(),F=h.get("TOGLOBALID").name,E=h.get("FROMGLOBALID").name,J=h.get("TOTERMINALID").name,v=h.get("FROMTERMINALID").name,k=h.get("FROMNETWORKSOURCEID").name,M=h.get("TONETWORKSOURCEID").name,A=h.get("ASSOCIATIONTYPE").name,ie=h.get("ISCONTENTVISIBLE").name,Ae=h.get("OBJECTID").name;for(const b of f.fields)if(b.type==="global-id"){c=t.field(b.name);break}let O=null,me=new W(new j({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC})),pe=new W(new j({name:"side",alias:"side",type:"string"}),T.create("''",{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC}));const C="globalid",ye="globalId",we={};for(const b in o.lkp)we[b]=o.lkp[b].sourceId;const $=new Ke(new j({name:"classname",alias:"classname",type:"string"}),null,we);let I="";switch(r){case"midspan":{I=`((${F}='${c}') OR ( ${E}='${c}')) AND (${A} IN (5))`,$.codefield=T.create(`CASE WHEN (${F}='${c}') THEN ${k} ELSE ${M} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC});const b=de(P.findField(s.fields,E));b.name=C,b.alias=C,O=new W(b,T.create(`CASE WHEN (${E}='${c}') THEN ${F} ELSE ${E} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC})),me=o.unVersion>=4?new oe(P.findField(s.fields,h.get("PERCENTALONG").name)):new W(new j({name:"percentalong",alias:"percentalong",type:"double"}),T.create("0",{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{I=`((${F}='${c}') OR ( ${E}='${c}')) AND (${A} IN (4,6))`,$.codefield=T.create(`CASE WHEN (${F}='${c}') THEN ${k} ELSE ${M} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC});const b=de(P.findField(s.fields,E));b.name=C,b.alias=C,O=new W(b,T.create(`CASE WHEN (${E}='${c}') THEN ${F} ELSE ${E} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC})),pe=new W(new j({name:"side",alias:"side",type:"string"}),T.create(`CASE WHEN (${A}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let b=`${F}='@T'`,ge=`${E}='@T'`;m!==null&&(b+=` AND ${J}=@A`,ge+=` AND ${v}=@A`),I="(("+b+") OR ("+ge+"))",I=X(I,"@T",c??""),b=X(b,"@T",c??""),m!==null&&(b=X(b,"@A",m.toString()),I=X(I,"@A",m.toString())),$.codefield=T.create("CASE WHEN "+b+` THEN ${k} ELSE ${M} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC});const ae=de(P.findField(s.fields,E));ae.name=C,ae.alias=C,O=new W(ae,T.create("CASE WHEN "+b+` THEN ${E} ELSE ${F} END`,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC}));break}case"container":I=`${F}='${c}' AND ${A} = 2`,m!==null&&(I+=` AND ${J} = `+m.toString()),$.codefield=k,I="( "+I+" )",O=new K(P.findField(s.fields,E),C,C);break;case"content":I=`(${E}='${c}' AND ${A} = 2)`,m!==null&&(I+=` AND ${v} = `+m.toString()),$.codefield=M,I="( "+I+" )",O=new K(P.findField(s.fields,F),C,C);break;case"structure":I=`(${F}='${c}' AND ${A} = 3)`,m!==null&&(I+=` AND ${J} = `+m.toString()),$.codefield=k,I="( "+I+" )",O=new K(P.findField(s.fields,E),C,ye);break;case"attached":I=`(${E}='${c}' AND ${A} = 3)`,m!==null&&(I+=` AND ${v} = `+m.toString()),$.codefield=M,I="( "+I+" )",O=new K(P.findField(s.fields,F),C,ye);break;default:throw new p(n,y.InvalidParameter,a)}return D&&(I="1 <> 1"),new P({parentfeatureset:s,adaptedFields:[new oe(P.findField(s.fields,Ae)),new oe(P.findField(s.fields,ie)),O,pe,$,me],extraFilter:I?T.create(I,{fieldsIndex:s.getFieldsIndex(),timeZone:s.dateFieldsTimeZoneDefaultUTC}):null})})},i.signatures.push({name:"featuresetbyassociation",min:2,max:6}),i.functions.groupby=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,3,3,n,a),!L(e[0]))throw new p(n,y.InvalidParameter,a);const t=await e[0].load(),r=[],d=[];let f=!1,l=[];if(R(e[1]))l.push(e[1]);else if(e[1]instanceof U)l.push(e[1]);else if(S(e[1]))l=e[1];else{if(!H(e[1]))throw new p(n,y.InvalidParameter,a);l=e[1].toArray()}for(const o of l)if(R(o)){const s=T.create(N(o),{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),c=De(s)===!0?N(o):"%%%%FIELDNAME";r.push({name:c,expression:s}),c==="%%%%FIELDNAME"&&(f=!0)}else{if(!(o instanceof U))throw new p(n,y.InvalidParameter,a);{const s=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",c=o.hasField("expression")?o.field("expression"):"";if(s==="%%%%FIELDNAME"&&(f=!0),!s)throw new p(n,y.InvalidParameter,a);r.push({name:s,expression:T.create(c||s,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(l=[],R(e[2]))l.push(e[2]);else if(S(e[2]))l=e[2];else if(H(e[2]))l=e[2].toArray();else{if(!(e[2]instanceof U))throw new p(n,y.InvalidParameter,a);l.push(e[2])}for(const o of l){if(!(o instanceof U))throw new p(n,y.InvalidParameter,a);{const s=o.hasField("name")?o.field("name"):"",c=o.hasField("statistic")?o.field("statistic"):"",m=o.hasField("expression")?o.field("expression"):"";if(!s||!c||!m)throw new p(n,y.InvalidParameter,a);d.push({name:s,statistic:c.toLowerCase(),expression:T.create(m,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(f){const o={};for(const c of t.fields)o[c.name.toLowerCase()]=1;for(const c of r)c.name!=="%%%%FIELDNAME"&&(o[c.name.toLowerCase()]=1);for(const c of d)c.name!=="%%%%FIELDNAME"&&(o[c.name.toLowerCase()]=1);let s=0;for(const c of r)if(c.name==="%%%%FIELDNAME"){for(;o["field_"+s.toString()]===1;)s++;o["field_"+s.toString()]=1,c.name="FIELD_"+s.toString()}}for(const o of r)ce(o.expression,i,n);for(const o of d)ce(o.expression,i,n);return e[0].groupby(r,d)})},i.signatures.push({name:"groupby",min:3,max:3}),i.functions.distinct=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(L(e[0])){x(e,2,2,n,a);const t=await e[0].load(),r=[];let d=[];if(R(e[1]))d.push(e[1]);else if(e[1]instanceof U)d.push(e[1]);else if(S(e[1]))d=e[1];else{if(!H(e[1]))throw new p(n,y.InvalidParameter,a);d=e[1].toArray()}let f=!1;for(const l of d)if(R(l)){const o=T.create(N(l),{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC}),s=De(o)===!0?N(l):"%%%%FIELDNAME";r.push({name:s,expression:o}),s==="%%%%FIELDNAME"&&(f=!0)}else{if(!(l instanceof U))throw new p(n,y.InvalidParameter,a);{const o=l.hasField("name")?l.field("name"):"%%%%FIELDNAME",s=l.hasField("expression")?l.field("expression"):"";if(o==="%%%%FIELDNAME"&&(f=!0),!o)throw new p(n,y.InvalidParameter,a);r.push({name:o,expression:T.create(s||o,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC})})}}if(f){const l={};for(const s of t.fields)l[s.name.toLowerCase()]=1;for(const s of r)s.name!=="%%%%FIELDNAME"&&(l[s.name.toLowerCase()]=1);let o=0;for(const s of r)if(s.name==="%%%%FIELDNAME"){for(;l["field_"+o.toString()]===1;)o++;l["field_"+o.toString()]=1,s.name="FIELD_"+o.toString()}}for(const l of r)ce(l.expression,i,n);return e[0].groupby(r,[])}return un(e)})},i.functions.getfeaturesetinfo=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,1,1,n,a),!L(e[0]))return null;const t=await e[0].getFeatureSetInfo();return t?U.convertObjectToArcadeDictionary({layerId:t.layerId,layerName:t.layerName,itemId:t.itemId,serviceLayerUrl:t.serviceLayerUrl,webMapLayerId:t.webMapLayerId??null,webMapLayerTitle:t.webMapLayerTitle??null,className:null,objectClassId:null},Fe(n),!1,!1):null})},i.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),i.functions.filterbysubtypecode=function(n,a){return i.standardFunctionAsync(n,a,async(w,g,e)=>{if(x(e,2,2,n,a),L(e[0])){const t=await e[0].load(),r=e[1];if(!Oe(r))throw new p(n,y.InvalidParameter,a);if(t.subtypeField){const f=T.create(`${t.subtypeField}= ${e[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new se({parentfeatureset:e[0],whereclause:f})}if(t.typeIdField===null||t.typeIdField==="")throw new p(n,y.FeatureSetDoesNotHaveSubtypes,a);const d=T.create(`${t.typeIdField}= ${e[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new se({parentfeatureset:e[0],whereclause:d})}throw new p(n,y.InvalidParameter,a)})},i.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{An as registerFunctions};
