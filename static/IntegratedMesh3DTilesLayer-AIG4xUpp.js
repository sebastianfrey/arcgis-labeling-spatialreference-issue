import{gv as z,gl as V,gm as P,eM as U,dB as X,gw as W,gx as k,am as b,aa as w,bm as $,aI as g,fJ as G,fL as p,g4 as _,bg as S,ff as E,fc as L,gy as R,gz as T,gA as m,b as F,aj as N,a4 as q,ak as D,W as d,Z as u,gB as B,gp as K,ap as Z,eP as J,aG as v}from"./index-DKbcOXvO.js";import{$ as j,Z as O,w as C}from"./elevationInfoUtils-CUMdQU0C.js";let y=class extends z(V(P(U(X(W(k(J))))))){constructor(a){super(a),this.operationalLayerType="IntegratedMesh3DTilesLayer",this.spatialReference=new b({wkid:4326,vcsWkid:115700}),this.fullExtent=new w(-180,-90,180,90,this.spatialReference),this.url=null,this.type="integrated-mesh-3dtiles",this.path=null,this.minScale=0,this.maxScale=0}set elevationInfo(a){a!=null&&a.mode!=="absolute-height"||this._set("elevationInfo",a),this._validateElevationInfo(a)}_verifyArray(a,i){if(!Array.isArray(a)||a.length<i)return!1;for(const o of a)if(typeof o!="number")return!1;return!0}_initFullExtent(a){var M,I;const i=(M=a.root)==null?void 0:M.boundingVolume;if(!i)return;if(i.box){const t=i==null?void 0:i.box;if(t[3]>7972671&&t[7]>7972671&&t[11]>7945940)return}const o=(I=a.root)==null?void 0:I.transform,f=v();if(i.region&&this._verifyArray(i.region,6)){const t=i.region,l=$(t[0]),n=$(t[1]),s=t[4],r=$(t[2]),e=$(t[3]),h=t[5];this.fullExtent=new w({xmin:l,ymin:n,zmin:s,xmax:r,ymax:e,zmax:h,spatialReference:this.spatialReference})}else if(i.sphere&&this._verifyArray(i.sphere,4)){const t=i.sphere,l=g(t[0],t[1],t[2]),n=t[3]/Math.sqrt(3),s=v();G(s,l,g(n,n,n));const r=v();if(p(r,l,g(n,n,n)),o&&this._verifyArray(o,16)){const x=o;_(f,s,x),S(s,f),_(f,r,x),S(r,f)}E(s,L,0,s,b.WGS84,0),E(r,L,0,r,b.WGS84,0);const e=v(),h=v();R(e,s,r),T(h,s,r),this.fullExtent=new w({xmin:e[0],ymin:e[1],zmin:e[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}else if(i.box&&this._verifyArray(i.box,12)){const t=i.box,l=g(t[0],t[1],t[2]),n=g(t[3],t[4],t[5]),s=g(t[6],t[7],t[8]),r=g(t[9],t[10],t[11]),e=[];for(let c=0;c<8;++c)e.push(v());if(p(e[0],l,n),p(e[0],e[0],s),p(e[0],e[0],r),m(e[1],l,n),p(e[1],e[1],s),p(e[1],e[1],r),p(e[2],l,n),m(e[2],e[2],s),p(e[2],e[2],r),m(e[3],l,n),m(e[3],e[3],s),p(e[3],e[3],r),p(e[4],l,n),p(e[4],e[4],s),m(e[4],e[4],r),m(e[5],l,n),p(e[5],e[5],s),m(e[5],e[5],r),p(e[6],l,n),m(e[6],e[6],s),m(e[6],e[6],r),m(e[7],l,n),m(e[7],e[7],s),m(e[7],e[7],r),o&&this._verifyArray(o,16)){const c=o;for(let A=0;A<8;++A)_(e[A],e[A],c)}const h=g(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),x=g(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);for(let c=0;c<8;++c)E(e[c],L,0,e[c],b.WGS84,0),R(x,x,e[c]),T(h,h,e[c]);this.fullExtent=new w({xmin:x[0],ymin:x[1],zmin:x[2],xmax:h[0],ymax:h[1],zmax:h[2],spatialReference:this.spatialReference})}}async load(a){return this.addResolvingPromise(this._doLoad(a)),this}async _doLoad(a){const i=a!=null?a.signal:null;try{await this.loadFromPortal({supportedTypes:["3DTiles Service"],validateItem:o=>{var f;if((f=o.typeKeywords)!=null&&f.includes("IntegratedMesh"))return!0;throw new F("portal:invalid-layer-item-type","Invalid layer item, expected '${expectedType}' ",{expectedType:"3DTiles Service containing IntegratedMesh"})}},a)}catch(o){N(o)}this.url&&await q(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:i}).then(f=>{this._initFullExtent(f.data)},f=>{N(f)})}async fetchAttributionData(){return this.load().then(()=>({}))}_validateElevationInfo(a){const i="Integrated mesh 3d tiles layers";j(D.getLogger(this),O(i,"absolute-height",a)),j(D.getLogger(this),C(i,a))}};d([u({type:["IntegratedMesh3DTilesLayer"]})],y.prototype,"operationalLayerType",void 0),d([u({type:b})],y.prototype,"spatialReference",void 0),d([u({type:w})],y.prototype,"fullExtent",void 0),d([u(B)],y.prototype,"elevationInfo",null),d([u({type:["show","hide"]})],y.prototype,"listMode",void 0),d([u(K)],y.prototype,"url",void 0),d([u({readOnly:!0})],y.prototype,"type",void 0),d([u({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],y.prototype,"path",void 0),d([u({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"minScale",void 0),d([u({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:!1,write:!1}}}})],y.prototype,"maxScale",void 0),y=d([Z("esri.layers.IntegratedMesh3DTilesLayer")],y);const Y=y;export{Y as default};
