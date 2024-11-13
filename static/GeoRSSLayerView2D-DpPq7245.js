import{cD as l,cE as h,at as g,aF as w,cF as f,cG as d,cH as n,ak as u,am as V}from"./index-BPaEurMl.js";import{j as b,y as S}from"./LayerView-DKf0iEMk.js";import{t as _}from"./GraphicContainer-CL-JCv4n.js";import{F as T}from"./GraphicsView2D-B6x_aPDV.js";import"./Container-DetwY83x.js";import"./EffectView-DdmkZMsV.js";import"./layerViewUtils-DoXWNPvI.js";import"./AGraphicContainer-DxAdXIhM.js";import"./TechniqueInstance-CUTYGOxT.js";import"./UpdateTracking2D-BDE3o7g-.js";import"./BindType-BmZEZMMh.js";import"./Util-Bg9xnGjw.js";import"./Program-zoZbL6gv.js";import"./BufferObject-OESQIBso.js";import"./LabelMetric-qSJOJLPw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BpidzL0d.js";import"./TileContainer-r_P_p0Sy.js";import"./WGLContainer-KjbWquGu.js";import"./VertexArrayObject-CnnK3PQk.js";import"./ProgramTemplate-2oD3JWt-.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DrS7SQ35.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DedzJeI2.js";import"./CIMSymbolHelper-CSQ82ux7.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B3pWjTl6.js";import"./GeometryUtils-DvkV6DN6.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-CGk_WuSL.js";import"./TimeOnly-Dc78niPj.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-C7SF3oml.js";let y=class extends b(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().flatMap(i=>{const t=this._popupTemplates.get(i),p=i.hitTest(e);for(const s of p)s.layer=o,s.sourceLayer=o,s.popupTemplate=t;return p}).map(i=>({type:"graphic",graphic:i,layer:o,mapPoint:e}))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.addAttachHandles([l(()=>{var e;return(e=this.layer)==null?void 0:e.featureCollections},e=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:i}of e){const t=g.fromJSON(o),p=new w(t.features),s=i.drawingInfo,c=r?f.fromJSON(r):null,a=d(s.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:p,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.polygonSymbol},e=>{this._graphicsViewMap.polygon.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.lineSymbol},e=>{this._graphicsViewMap.polyline.renderer=new n({symbol:e})},h),l(()=>{var e;return(e=this.layer)==null?void 0:e.pointSymbol},e=>{this._graphicsViewMap.point.renderer=new n({symbol:e})},h)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([V("esri.views.2d.layers.GeoRSSLayerView2D")],y);const me=y;export{me as default};
