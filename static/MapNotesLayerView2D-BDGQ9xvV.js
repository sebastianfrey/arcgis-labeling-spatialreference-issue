import{aG as u,aF as f,F as w,af as c,cD as h,cE as o,cx as y,ak as _,am as V}from"./index-Dc2kMMi_.js";import{j as v,y as C}from"./LayerView-BhnEnwGJ.js";import{t as g}from"./GraphicContainer-CYfwmBuH.js";import{F as d}from"./GraphicsView2D-BkEKHZVP.js";import"./Container-uF277BYB.js";import"./EffectView-Dr6_AnRA.js";import"./layerViewUtils-D9IdN31M.js";import"./AGraphicContainer-CuMhcHlt.js";import"./TechniqueInstance-oYJ02MVI.js";import"./UpdateTracking2D-D-CFfzhw.js";import"./BindType-BmZEZMMh.js";import"./Util-DL1B_fT0.js";import"./Program-CL80zIIj.js";import"./BufferObject-DYWbuP7z.js";import"./LabelMetric-Y08UvMFm.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-DCdfa0q4.js";import"./TileContainer-BeOBeqkT.js";import"./WGLContainer-TTePTds_.js";import"./VertexArrayObject-tCz64MU3.js";import"./ProgramTemplate-FQlwiwpm.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-C4weohtO.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-CmyznNqd.js";import"./CIMSymbolHelper-Dw6zWC7V.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-3QOaENz_.js";import"./GeometryUtils-CLWQN7Q7.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-BA7DDQ51.js";import"./TimeOnly-D7sFqqH3.js";import"./timeSupport-DtHRItmT.js";import"./queryUtils-C2HDji4l.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-DC42EkhH.js";const m="sublayers",l="layerView",H=new Set(["default"]);let n=class extends v(C){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),c(()=>this._removeHighlight(e))):c()}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new g(this.view.featuresTilingScheme),r=new d({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(l);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new g(this.view.featuresTilingScheme);a.fadeTransitionEnabled=!0;const r=new d({view:t,graphics:s.graphics,requestUpdateCallback:e,container:a});this.addHandles([s.on("graphic-update",r.graphicUpdateHandler),h(()=>s.visible,p=>r.container.visible=p,o),h(()=>r.updating,()=>this.notifyChange("updating"),o)],l),this.container.addChild(r.container),i.push(r)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys()),t=this._getHighlightBits(H);for(const e of this.graphicsViews())e.setHighlight(i.map(s=>({objectId:s,highlightFlags:t})))}};n=_([V("esri.views.2d.layers.MapNotesLayerView2D")],n);const pi=n;export{pi as default};