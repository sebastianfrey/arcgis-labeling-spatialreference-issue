import{aa as w,ab as y,ac as I,ad as V,ae as H,af as v,ag as T,ah as o,ai as g,aj as q,ak as n,al as f,am as U}from"./index-BPaEurMl.js";import"./UpdateTracking2D-BDE3o7g-.js";import"./GeometryUtils-DvkV6DN6.js";import"./CIMSymbolHelper-CSQ82ux7.js";import"./floatRGBA-DJAxlG7l.js";import"./EffectView-DdmkZMsV.js";import"./Container-DetwY83x.js";import"./WGLContainer-KjbWquGu.js";import"./Program-zoZbL6gv.js";import"./LabelMetric-qSJOJLPw.js";import"./StyleDefinition-DrS7SQ35.js";import"./enums-BRzLM11V.js";import"./GridShader-lG1Fuopt.js";import"./pbf-6qAjFn40.js";import"./FeatureCommandQueue-DedzJeI2.js";import"./PieChartMeshWriter-BK5Wu5BM.js";import"./renderState-coiwaj6f.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-C7NFiCBx.js";import{F as b}from"./GraphicsView2D-B6x_aPDV.js";import"./earcut-Lltz9D9k.js";import"./vec3f32-nZdmKIgz.js";import{r as C,o as m,n as d}from"./imageUtils-CUQTLqIP.js";import{j as Q,y as S}from"./LayerView-DKf0iEMk.js";import{h as $}from"./HighlightGraphicContainer-CAwV6a_X.js";import{i as F}from"./RefreshableLayerView-B7GcHN3N.js";import{_ as P,R as k}from"./MapServiceLayerViewHelper-CT5ZLcgl.js";import{r as L}from"./drapedUtils-CRsmcB1a.js";import"./BindType-BmZEZMMh.js";import"./Util-Bg9xnGjw.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B3pWjTl6.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BpidzL0d.js";import"./BufferObject-OESQIBso.js";import"./VertexArrayObject-CnnK3PQk.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./ProgramTemplate-2oD3JWt-.js";import"./config-MDUrh2eL.js";import"./CircularArray-CujHzHWW.js";import"./AttributeStore-CGk_WuSL.js";import"./TimeOnly-Dc78niPj.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./constants-F8oTIn7N.js";import"./TurboLine-Y6weAmFb.js";import"./basicInterfaces-CZwQPxTp.js";import"./normalizeUtilsSync-C7SF3oml.js";import"./Bitmap-BhaMpW18.js";import"./TileContainer-r_P_p0Sy.js";import"./layerViewUtils-DoXWNPvI.js";import"./AGraphicContainer-DxAdXIhM.js";import"./TechniqueInstance-CUTYGOxT.js";import"./languageUtils-DZAImWq0.js";import"./ImmutableArray-BPVd6ESQ.js";import"./shared-0uz8XZdL.js";import"./number-BtGMkmv4.js";import"./scaleUtils-C25MSLeq.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-ePeLOgtI.js";import"./popupUtils-B6wFdj0R.js";const E=[0,0];let a=class extends F(C(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r),scheduler:this.scheduler,priority:V.MAPVIEW_FETCH_QUEUE}),this._tileStrategy=new H({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),P(this,this.layer)){const i=this._highlightView=new b({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new $(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new k({createFetchPopupFeaturesQueryGeometry:(r,h)=>L(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t,e;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),(e=this._highlightView)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):v()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return T((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(E,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(s){if(!o(s)&&!this.resampling)return m(this._tileInfoView.tileInfo.size);if(h<3){const c=this._tileInfoView.getTileParentId(t.id);if(c){const u=new g(c),_=await this.fetchTile(u,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,u,t)}}throw s}const l=new g(0,0,0,0);let p;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,l,{signal:r}),!this.resampling&&l.level!==t.level)return m(this._tileInfoView.tileInfo.size);p=await this._fetchImage(l,r)}catch(s){if(o(s))throw s;return m(this._tileInfoView.tileInfo.size)}return this.resampling?d(this._tileInfoView,p,l,t):p}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){o(e)||q.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};n([f()],a.prototype,"resampling",null),n([f()],a.prototype,"tilemapCache",null),a=n([U("esri.views.2d.layers.TileLayerView2D")],a);const Ot=a;export{Ot as default};