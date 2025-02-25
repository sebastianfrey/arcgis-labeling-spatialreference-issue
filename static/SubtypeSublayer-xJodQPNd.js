import{iC as L,e8 as $,iD as M,iE as N,iF as k,dB as Q,bq as B,dC as H,$ as U,dG as x,ea as W,iG as Z,aQ as v,ai as K,ak as E,am as J,b as j,dK as z,ha as X,dO as R,hd as Y,W as i,Z as s,iH as ee,dW as te,iI as re,iJ as ne,dV as ie,iK as ae,iL as C,go as se,iM as le,iN as oe,iO as pe,dZ as de,dR as T,iP as P,ap as ue,ao as ye,hp as ce,iQ as fe,iR as he,iS as be}from"./index-DKbcOXvO.js";import{T as me}from"./colorUtils-BzQn9I3U.js";import{I as ge}from"./cimSymbolUtils-CXebtMzF.js";import{h as ve,a as we}from"./utils-RvMyfGMI.js";const D={key:"type",base:M,errorContext:"renderer",typeMap:{simple:$,"unique-value":N,"class-breaks":k}},q=L({types:D});function Ee(e,t){var o;const r=(o=e.drawingInfo)==null?void 0:o.renderer,a=r?q(r,e,t):null;if((a==null?void 0:a.type)==="simple")return ve(a.symbol,null)?a.symbol.clone():null}const Fe=["#ed5151","#149ece","#a7c636","#9e559c","#fc921f","#ffde3e","#f789d8","#b7814a","#3caf99","#6b6bd6","#b54779","#7f7f7f"];function Ae(e,t){return me(Fe,e,{offset:!0,shuffle:!0}).reverse().map(r=>{const a=t.clone();return a.type==="cim"?ge(a,r):we(a,r),new $({symbol:a})})}const A=ce();let Ie=0;function F(e,t){let r=e.json.write;return typeof r!="object"&&(r=e.json.write={}),r.ignoreOrigin=!0,t!=null&&t.spatialOnly&&(r.layerContainerTypes=C),e}function f(e){const t={write:{ignoreOrigin:!0}};return e!=null&&e.name&&(t.name=e.name),typeof t.write=="object"&&(e!=null&&e.spatialOnly&&(t.write.layerContainerTypes=C),e!=null&&e.target&&(t.write.target=e.target)),t}function Oe(e){return new $({symbol:Te(e)})}function Te(e){switch(e){case"point":case"multipoint":return be.clone();case"polyline":return he.clone();case"polygon":case"multipatch":return fe.clone();default:return null}}function je(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&e.field!=null&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function G(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(a=>a.code===e)}function Ce(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const a={},o=G(e,t);if(o!=null){const{defaultValues:l}=o;for(const p in l)a[p]=l[p]}return a[t.subtypeField]=e,new P({name:"New Feature",drawingTool:r,prototype:{attributes:a}})}let n=class extends Q(B.ClonableMixin(H.IdentifiableMixin(U))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Ie++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}load(e){return x(this.renderer,this.fieldsIndex),Promise.resolve(this)}get _titleCreator(){var t;const e=this._get("_titleCreator");return W(e),new Z({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,displayField:((t=this.parent)==null?void 0:t.displayField)??"",fields:this.fields,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}get featureTitleFields(){return[...this._titleCreator.requiredFields]}writeFieldOverrides(e,t,r){const{fields:a,parent:o}=this;let l;if(a){l=[];let p=0;a.forEach(({name:u,alias:c,editable:b,visible:m})=>{var I;if(!m)return;const d=(I=o==null?void 0:o.fields)==null?void 0:I.find(w=>w.name===u);if(!d)return;const h={name:u};let g=!1;c!==d.alias&&(h.alias=c,g=!0),b!==d.editable&&(h.editable=b,g=!0),l.push(h),g&&p++}),p===0&&l.length===a.length&&(l=null)}else l=v(e);l!=null&&l.length&&K(r,l,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,a=e==null?void 0:e.fields;if(!e||!(a!=null&&a.length))return null;const{subtypes:o,subtypeField:l}=e,p=o==null?void 0:o.find(m=>m.code===r),u=p==null?void 0:p.defaultValues,c=p==null?void 0:p.domains,b=[];for(const m of a){const d=m.clone(),{name:h}=d,g=t==null?void 0:t.find(O=>O.name===h);if(d.visible=!t||!!g,g){const{alias:O,editable:_}=g;O&&(d.alias=O),_===!1&&(d.editable=!1)}const I=(u==null?void 0:u[h])??null;d.defaultValue=h===l?r:I;const w=(c==null?void 0:c[h])??null;d.domain=h===l?null:w?w.type==="inherited"?d.domain:w.clone():null,b.push(d)}return b}get floorInfo(){var e;return(e=this.parent)==null?void 0:e.floorInfo}get isTable(){var e;return!!((e=this.parent)!=null&&e.isTable)}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get globalIdField(){return this.parent?this.parent.globalIdField:(E.getLogger(this).error(y("globalIdField")),null)}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||E.getLogger(this).error(y("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}get relationships(){var e;return(e=this.parent)==null?void 0:e.relationships}set renderer(e){x(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?Oe(e.geometryType):null}readRendererFromService(e,t,r){var u,c,b;if(t.type==="Table")return null;const a=(u=t.drawingInfo)==null?void 0:u.renderer,o=q(a,t,r);let l;const{subtypeCode:p}=this;if(p!=null&&je(o,t.subtypeField)){const m=(c=o.uniqueValueInfos)==null?void 0:c.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));m&&(l=new $({symbol:m.symbol}))}else(o==null?void 0:o.type)!=="simple"||(b=o.visualVariables)!=null&&b.length||(l=o);return l}readRenderer(e,t,r){var l,p,u;const a=(p=(l=t==null?void 0:t.layerDefinition)==null?void 0:l.drawingInfo)==null?void 0:p.renderer;return a?((u=a.visualVariables)==null?void 0:u.some(c=>c.type!=="rotationInfo"))?void 0:q(a,t,r)||void 0:void 0}get spatialReference(){var e;return((e=this.parent)==null?void 0:e.spatialReference)??J.WGS84}get subtypeField(){var e;return(e=this.parent)==null?void 0:e.subtypeField}readTemplatesFromService(e,t){return[Ce(this.subtypeCode,t)]}readTitleFromService(e,t){const r=G(this.subtypeCode,t);return r!=null?r.name:null}get url(){var e;return(e=this.parent)==null?void 0:e.url}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw y("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new j("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:a}=this;if(!a)throw y("updateAttachment");if(e.getAttribute(a.subtypeField)!==this.subtypeCode)throw new j("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return a.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw y("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new j("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw y("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:a,title:o}=this;if(r){const{displayField:l,editFieldsInfo:p,objectIdField:u}=r;t={displayField:l,editFieldsInfo:p,fields:a,objectIdField:u,title:o}}return z(t,e)}createQuery(){if(!this.parent)throw y("createQuery");const e=X(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=R(t,this.parent.definitionExpression),e}getFeatureTitle(e,t={timeZone:"system",fetchMissingFields:!1}){return this._titleCreator.getTitle(this,e,t)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){if(!(t!=null&&t.excludeImpliedDomains)&&this.parent){const r=Y(this.parent,e);if(r)return r}return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw y("queryAttachments");const a=e.clone();return a.where=V(a.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatureCount(e,t){const r=await this.load();if(!r.parent)throw y("queryFeatureCount");return r.parent.queryFeatureCount(S(r.parent,r,e),t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw y("queryFeatures");return r.parent.queryFeatures(S(r.parent,r,e),t)}async queryObjectIds(e,t){const r=await this.load();if(!r.parent)throw y("queryObjectIds");return r.parent.queryObjectIds(S(r.parent,r,e),t)}async queryRelatedFeatures(e,t){const r=await this.load();if(!r.parent)throw y("queryRelatedFeatures");return r.parent.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){const r=await this.load();if(!r.parent)throw y("queryRelatedFeaturesCount");return r.parent.queryRelatedFeaturesCount(e,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([s({clonable:!1,readOnly:!0})],n.prototype,"_titleCreator",null),i([s({type:ee,json:f({name:"attributeTableInfo"})})],n.prototype,"attributeTableTemplate",void 0),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"effectiveCapabilities",null),i([s({json:f()})],n.prototype,"charts",void 0),i([s({type:Boolean,nonNullable:!0,json:f({name:"enableEditing"})})],n.prototype,"editingEnabled",void 0),i([s({type:Boolean,readOnly:!0})],n.prototype,"effectiveEditingEnabled",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"elevationInfo",null),i([s({clonable:!1,readOnly:!0})],n.prototype,"featureTitleFields",null),i([s({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],n.prototype,"fieldOverrides",void 0),i([te("fieldOverrides")],n.prototype,"writeFieldOverrides",null),i([s({...A.fields,readOnly:!0,json:{read:!1}})],n.prototype,"fields",null),i([s(A.fieldsIndex)],n.prototype,"fieldsIndex",void 0),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"floorInfo",null),i([s({type:re,json:f({name:"formInfo"})})],n.prototype,"formTemplate",void 0),i([s({type:String,clonable:!1,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"id",void 0),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"isTable",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"geometryType",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"globalIdField",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),i([s(F(v(ne)))],n.prototype,"labelsVisible",void 0),i([s({type:[ie],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ae},write:{ignoreOrigin:!0,layerContainerTypes:C}}})],n.prototype,"labelingInfo",void 0),i([s({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,layerContainerTypes:C}}})],n.prototype,"layerType",void 0),i([s(F(v(se)))],n.prototype,"legendEnabled",void 0),i([s({type:["show","hide"]})],n.prototype,"listMode",void 0),i([s((()=>{const e=v(le);return e.json.origins.service.read=!1,F(e,{spatialOnly:!0})})())],n.prototype,"minScale",void 0),i([s((()=>{const e=v(oe);return e.json.origins.service.read=!1,F(e,{spatialOnly:!0})})())],n.prototype,"maxScale",void 0),i([s({readOnly:!0})],n.prototype,"effectiveScaleRange",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"objectIdField",null),i([s({type:Number,range:{min:0,max:1},nonNullable:!0,json:f({spatialOnly:!0})})],n.prototype,"opacity",void 0),i([s({clonable:!1})],n.prototype,"parent",void 0),i([s(F(v(pe)))],n.prototype,"popupEnabled",void 0),i([s({type:de,json:f({name:"popupInfo"})})],n.prototype,"popupTemplate",void 0),i([s({readOnly:!0})],n.prototype,"defaultPopupTemplate",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"relationships",null),i([s({types:D,json:f({target:"layerDefinition.drawingInfo.renderer",spatialOnly:!0})})],n.prototype,"renderer",null),i([T("service","renderer",["drawingInfo.renderer","subtypeField","type"])],n.prototype,"readRendererFromService",null),i([T("renderer",["layerDefinition.drawingInfo.renderer"])],n.prototype,"readRenderer",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"spatialReference",null),i([s({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],n.prototype,"subtypeCode",void 0),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"subtypeField",null),i([s({type:[P],json:f({name:"layerDefinition.templates"})})],n.prototype,"templates",void 0),i([T("service","templates",["geometryType","subtypeField","subtypes","type"])],n.prototype,"readTemplatesFromService",null),i([s({type:String,json:f()})],n.prototype,"title",void 0),i([T("service","title",["subtypes"])],n.prototype,"readTitleFromService",null),i([s({readOnly:!0,json:{read:!1}})],n.prototype,"url",null),i([s({readOnly:!0})],n.prototype,"userHasUpdateItemPrivileges",null),i([s({type:Boolean,nonNullable:!0,json:f({name:"visibility",spatialOnly:!0})})],n.prototype,"visible",void 0),n=i([ue("esri.layers.support.SubtypeSublayer")],n);const S=(e,t,r)=>{if(!r)return t.createQuery();const a=ye.from(r);return a.where=V(a.where,e.subtypeField,t.subtypeCode),a},V=(e,t,r)=>{const a=new RegExp(`${t}\\s*=\\s*\\d+`),o=`${t}=${r}`,l=e??"";return a.test(l)?l.replace(a,o):R(o,l)},y=e=>new j(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),Re=n;export{Ae as a,Ee as c,Re as e};
