import{ak as n,al as o,am as v,bq as R,ah as b,aj as _,aG as P,bg as V,g1 as A,c3 as D,cD as f,i5 as I,as as T,fo as z,s as U,ar as C,av as j,ao as E,aa as L,fj as S,aF as $,af as q,b2 as M}from"./index-BPaEurMl.js";import{d as O,f as H,a as N}from"./RasterVFDisplayObject-Bv2komJE.js";import{j as G,y as J}from"./LayerView-DKf0iEMk.js";import{F as W}from"./GraphicsView2D-B6x_aPDV.js";import{h as K}from"./HighlightGraphicContainer-CAwV6a_X.js";import{M as Q,m as X,f as Y}from"./dataUtils-Cm9lGTR2.js";import{a as Z}from"./BitmapContainer-CaJqpa79.js";import{n as tt}from"./Container-DetwY83x.js";import{l as et}from"./Bitmap-BhaMpW18.js";import{_ as it}from"./ExportStrategy-BAwNaefi.js";import{K as rt}from"./rasterProjectionHelper-BxGD9wyE.js";import{n as at}from"./WGLContainer-KjbWquGu.js";import{i as st}from"./timeSupport-DMeZ6NBu.js";import{p as nt}from"./popupUtils-B6wFdj0R.js";import{i as ot}from"./RefreshableLayerView-B7GcHN3N.js";import"./BufferObject-OESQIBso.js";import"./VertexArrayObject-CnnK3PQk.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./LabelMetric-qSJOJLPw.js";import"./Program-zoZbL6gv.js";import"./BoundingBox-BpidzL0d.js";import"./layerViewUtils-DoXWNPvI.js";import"./CIMSymbolHelper-CSQ82ux7.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B3pWjTl6.js";import"./GeometryUtils-DvkV6DN6.js";import"./Rect-CUzevAry.js";import"./AttributeStore-CGk_WuSL.js";import"./TimeOnly-Dc78niPj.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./UpdateTracking2D-BDE3o7g-.js";import"./BindType-BmZEZMMh.js";import"./Util-Bg9xnGjw.js";import"./FeatureCommandQueue-DedzJeI2.js";import"./constants-F8oTIn7N.js";import"./normalizeUtilsSync-C7SF3oml.js";import"./AGraphicContainer-DxAdXIhM.js";import"./TechniqueInstance-CUTYGOxT.js";import"./TileContainer-r_P_p0Sy.js";import"./vec3f32-nZdmKIgz.js";import"./pixelRangeUtils-DHjFxYEg.js";import"./EffectView-DdmkZMsV.js";import"./ProgramTemplate-2oD3JWt-.js";import"./StyleDefinition-DrS7SQ35.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";let p=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new tt,this.updateRequested=!1,this.type="imagery",this._bitmapView=new Z}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(e){this.strategy.update(e).catch(i=>{b(i)||_.getLogger(this).error(i)})}hitTest(e){return new P({attributes:{},geometry:e.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const e=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,r=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new it({container:this._bitmapView,imageNormalizationSupported:e,imageMaxHeight:i,imageMaxWidth:r,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports(async e=>{const{source:i}=e;if(!i||i instanceof ImageBitmap)return;const r=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=a=>this.layer.pixelFilter?this.layer.applyFilter(a):{...r,extent:i.extent}}).catch(e=>{b(e)||_.getLogger(this).error(e)})}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const e=this.strategy.bitmaps;if(e.length===1&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){const i=this.view.extent,r=e.map(s=>s.source).filter(s=>s.extent&&s.extent.intersects(i)).map(s=>({extent:s.extent,pixelBlock:s.originalPixelBlock})),a=Q(r,i);return a!=null?{extent:a.extent,pixelBlock:a.pixelBlock}:null}return null}async _fetchImage(e,i,r,a){var h;(a=a||{}).timeExtent=this.timeExtent,a.requestAsImageElement=!0,a.returnImageBitmap=!0;const s=await this.layer.fetchImage(e,i,r,a);if(s.imageBitmap)return s.imageBitmap;const l=await this.layer.applyRenderer(s.pixelData,{signal:a.signal}),m=new et(l.pixelBlock,(h=l.extent)==null?void 0:h.clone(),s.pixelData.pixelBlock);return m.filter=c=>this.layer.applyFilter(c),m}};n([o()],p.prototype,"attached",void 0),n([o()],p.prototype,"container",void 0),n([o()],p.prototype,"layer",void 0),n([o()],p.prototype,"strategy",void 0),n([o()],p.prototype,"timeExtent",void 0),n([o()],p.prototype,"view",void 0),n([o()],p.prototype,"updateRequested",void 0),n([o()],p.prototype,"updating",null),n([o()],p.prototype,"type",void 0),p=n([v("esri.views.2d.layers.imagery.ImageryView2D")],p);const lt=p;class ht extends at{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(e){const i=e.registerRenderPass({name:"imagery (vf)",brushes:[O],target:()=>this.children,drawPhase:V.MAP});return[...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===V.MAP&&this.symbolTypes.forEach(i=>{e.renderPass=i,super.doRender(e)})}}let y=class extends R{constructor(t){super(t),this._loading=null,this.update=A((e,i)=>this._update(e,i).catch(r=>{b(r)||_.getLogger(this).error(r)}))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const e=this.container.children[0];e.symbolizerParameters=t,e.invalidateVAO(),this.container.symbolTypes=t.style==="wind_speed"?["scalar","triangle"]:t.style==="simple_scalar"?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,e,i){if(!t.stationary)return;const{extent:r,spatialReference:a}=t.state,s=new D({xmin:r.xmin,ymin:r.ymin,xmax:r.xmax,ymax:r.ymax,spatialReference:a}),[l,m]=t.state.size;this._loading=this.fetchPixels(s,l,m,i);const h=await this._loading;this._addToDisplay(h,e,t.state),this._loading=null}_addToDisplay(t,e,i){if(t.pixelBlock==null)return this.container.children.forEach(l=>l.destroy()),void this.container.removeAllChildren();const{extent:r,pixelBlock:a}=t,s=new H(a);s.offset=[0,0],s.symbolizerParameters=e,s.rawPixelData=t,s.invalidateVAO(),s.x=r.xmin,s.y=r.ymax,s.pixelRatio=i.pixelRatio,s.rotation=i.rotation,s.resolution=i.resolution,s.width=a.width*e.symbolTileSize,s.height=a.height*e.symbolTileSize,this.container.children.forEach(l=>l.destroy()),this.container.removeAllChildren(),this.container.symbolTypes=e.style==="wind_speed"?["scalar","triangle"]:e.style==="simple_scalar"?["scalar"]:["triangle"],this.container.addChild(s)}};n([o()],y.prototype,"fetchPixels",void 0),n([o()],y.prototype,"container",void 0),n([o()],y.prototype,"_loading",void 0),n([o()],y.prototype,"updating",null),y=n([v("esri.views.2d.layers.imagery.ImageryVFStrategy")],y);const pt=y;let d=class extends R{constructor(){super(...arguments),this.attached=!1,this.container=new ht,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,e,i,r)=>{const a=await this._projectFullExtentPromise,{symbolTileSize:s}=this.layer.renderer,{extent:l,width:m,height:h}=X(t,e,i,s,a);if(a!=null&&!a.intersects(t))return{extent:l,pixelBlock:null};const c={bbox:`${l.xmin}, ${l.ymin}, ${l.xmax}, ${l.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:s,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(c)){const u=this.getPixelData();if(u!=null&&`${u.extent.xmin}, ${u.extent.ymin}, ${u.extent.xmax}, ${u.extent.ymax}`===c.bbox)return u}const{pixelData:g}=await this.layer.fetchImage(l,m,h,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:r});this._dataParameters=c;const x=g==null?void 0:g.pixelBlock;return x==null?{extent:l,pixelBlock:null}:{extent:l,pixelBlock:this.layer.rasterInfo.dataType==="vector-uv"?Y(x,"vector-uv"):x}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new pt({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(f(()=>this.layer.renderer,t=>this._updateSymbolizerParams(t),I),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach(t=>t.destroy()),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){var r;const t=(r=this.container.children[0])==null?void 0:r.rawPixelData;if(this.updating||!t)return null;const{extent:e,pixelBlock:i}=t;return{extent:e,pixelBlock:i}}hitTest(t){return new P({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch(e=>{b(e)||_.getLogger(this).error(e)})}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const e=this._dataParameters.exportParametersVersion===t.exportParametersVersion,i=this._dataParameters.time===t.time,r=this._dataParameters.symbolTileSize===t.symbolTileSize,a=this._dataParameters.bbox===t.bbox;return e&&i&&r&&a}async _getProjectedFullExtent(t){try{return rt(this.layer.fullExtent,t)}catch{try{const i=(await T(this.layer.url,{query:{option:"footprints",outSR:z(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?D.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){t.type==="vector-field"&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};n([o()],d.prototype,"attached",void 0),n([o()],d.prototype,"container",void 0),n([o()],d.prototype,"layer",void 0),n([o()],d.prototype,"timeExtent",void 0),n([o()],d.prototype,"type",void 0),n([o()],d.prototype,"view",void 0),n([o()],d.prototype,"updating",null),d=n([v("esri.views.2d.layers.imagery.VectorFieldView2D")],d);const ct=d,dt=t=>{let e=class extends t{constructor(){super(...arguments),this.view=null}get timeExtent(){var i;return st(this.layer,(i=this.view)==null?void 0:i.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(i,r){const{layer:a}=this;if(!i)throw new U("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:s}=a,l=nt(a,r);if(!s||l==null)return[];const m=await l.getRequiredFields();C(r);const h=new j;h.timeExtent=this.timeExtent,h.geometry=i,h.outFields=m,h.outSpatialReference=i.spatialReference;const{resolution:c,spatialReference:g}=this.view,x=this.view.type==="2d"?new E(c,c,g):new E(.5*c,.5*c,g),{returnTopmostRaster:u,showNoDataRecords:B}=l.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},k={returnDomainValues:!0,returnTopmostRaster:u,pixelSize:x,showNoDataRecords:B,signal:r==null?void 0:r.signal};return a.queryVisibleRasters(h,k).then(F=>F)}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return n([o()],e.prototype,"layer",void 0),n([o()],e.prototype,"suspended",void 0),n([o({readOnly:!0})],e.prototype,"timeExtent",null),n([o()],e.prototype,"view",void 0),e=n([v("esri.views.layers.ImageryLayerView")],e),e};let w=class extends dt(ot(G(J))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new L,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){var e;(e=this.subview)==null||e.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new W({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new K(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([f(()=>this.layer.exportImageServiceParameters.version,t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())},S),f(()=>this.timeExtent,t=>{const{subview:e}=this;e&&(e.timeExtent=t,"redraw"in e?this.requestUpdate():e.redrawOrRefetch())},S),this.layer.on("redraw",()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())}),f(()=>this.layer.renderer,()=>this._setSubView())])}detach(){var t,e;this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),(t=this.subview)==null||t.destroy(),this.subview=null,(e=this._highlightView)==null||e.destroy(),this._exportImageVersion=-1}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,e){if(!((Array.isArray(t)?t[0]:$.isCollection(t)?t.at(0):t)instanceof P))return q();let i=[];return Array.isArray(t)||$.isCollection(t)?i=t.map(r=>r.clone()):t instanceof P&&(i=[t.clone()]),this._highlightGraphics.addMany(i),q(()=>this._highlightGraphics.removeMany(i))}async doRefresh(){this.requestUpdate()}isUpdating(){var e,i;const t=!this.subview||this.subview.updating||!!((e=this._highlightView)!=null&&e.updating);return M("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}
-> subview ${!this.subview||this.subview.updating}
-> higlightView ${(i=this._highlightView)==null?void 0:i.updating}
`),t}_setSubView(){var i,r;if(!this.view)return;const t=(i=this.layer.renderer)==null?void 0:i.type;let e="imagery";if(t==="vector-field"?e="imageryVF":t==="flow"&&(e="flow"),this.subview){const{type:a}=this.subview;if(a===e)return this._attachSubview(this.subview),void(a==="flow"?this.subview.redrawOrRefetch():a==="imagery"&&this.layer.format==="lerc"?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),(r=this.subview)==null||r.destroy()}this.subview=e==="imagery"?new lt({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):e==="imageryVF"?new ct({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new N({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t!=null&&t.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};n([o()],w.prototype,"pixelData",null),n([o()],w.prototype,"subview",void 0),w=n([v("esri.views.2d.layers.ImageryLayerView2D")],w);const le=w;export{le as default};