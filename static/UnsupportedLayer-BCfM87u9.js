import{gm as a,dB as p,c8 as l,W as t,Z as i,ap as d,eP as u,b as y}from"./index-DKbcOXvO.js";let r=class extends a(p(u)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,o)=>{l(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let n="Unsupported layer type";s&&(n+=" "+s),o(new y("layer:unsupported-layer-type",n,{layerType:s}))})}))}read(e,o){const s={resourceInfo:e};e.id!=null&&(s.id=e.id),e.title!=null&&(s.title=e.title),super.read(s,o)}write(e,o){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([i({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([i({type:["show","hide"]})],r.prototype,"listMode",void 0),t([i({type:Boolean,readOnly:!1})],r.prototype,"persistenceEnabled",void 0),t([i({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=t([d("esri.layers.UnsupportedLayer")],r);const h=r;export{h as default};
