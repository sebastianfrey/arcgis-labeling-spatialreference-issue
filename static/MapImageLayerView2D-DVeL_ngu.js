import{W as r,Z as o,ap as n,dn as l,dv as d,ak as u,a1 as c,dt as y,cA as m,du as _}from"./index-DKbcOXvO.js";import{r as f}from"./BitmapContainer-CUCHedFD.js";import{S as x,y as H}from"./LayerView-CR04FL3M.js";import{A as w}from"./GraphicsView2D-C-fLxxT8.js";import{h as v}from"./HighlightGraphicContainer-D1wOfSzj.js";import{_ as I}from"./ExportStrategy-B-TknxlJ.js";import{y as V}from"./ExportImageParameters-BdivRdL3.js";import{i as E}from"./timeSupport-CGIvskhq.js";import{i as G}from"./RefreshableLayerView-BCbPuCmT.js";import{S as P}from"./MapServiceLayerViewHelper-Byi2Afhu.js";import{r as U}from"./drapedUtils-DXk8z3QG.js";import"./WGLContainer-Bfqd03g2.js";import"./LabelMetric-J5NAbP5i.js";import"./Program-HYRYH4Rq.js";import"./BufferObject-Bzw_3oj2.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-CmWUFtRO.js";import"./ProgramTemplate-BAdC4_dI.js";import"./VertexArrayObject-idG1FX9h.js";import"./vec3f32-nZdmKIgz.js";import"./Container-CVGlnMw0.js";import"./EffectView-BCDYNzM0.js";import"./StyleDefinition-Br81mLGK.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./BitmapTechnique-ch8Bp4_j.js";import"./Technique-UXOeImSB.js";import"./GraphShaderModule-DC334t3a.js";import"./ShaderBuilder-CRNP-Ry9.js";import"./BindType-BBwFZqyN.js";import"./layerViewUtils-CP8CZ9y0.js";import"./CIMSymbolHelper-ul9lMn7I.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-BfBCIMfO.js";import"./GeometryUtils-k5V-R1K7.js";import"./rasterizingUtils-ZyXE8c0k.js";import"./floatRGBA-Drf6QmoK.js";import"./Rect-CUzevAry.js";import"./OverrideHelper-BuwvvsgQ.js";import"./colorUtils-BzQn9I3U.js";import"./quantizationUtils-Deoeu4Gm.js";import"./AttributeStore-DokSTgfs.js";import"./UpdateTracking2D-C6eAXqiy.js";import"./queryUtils-hVslpV8d.js";import"./json-Wa8cmqdu.js";import"./timeSupport-BntruWY7.js";import"./TimeOnly-D9V4gdT1.js";import"./FeatureCommandQueue-B-LyAB3g.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-Bb2ObthY.js";import"./mat3f64-q3fE-ZOt.js";import"./normalizeUtilsSync-Ct7rCB2k.js";import"./dehydratedFeatures-BJmdW0DH.js";import"./AGraphicContainer-p0NADQHs.js";import"./TechniqueInstance-Cni1MZ5F.js";import"./TileContainer-D2viBxzE.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-DnDY2bZA.js";import"./Sublayer-BNpfP2Jl.js";import"./QueryTask-bQZkur29.js";import"./executeForIds-Br4jS4wQ.js";import"./query-BjWjpyMW.js";import"./pbfQueryUtils-BvVNb_8W.js";import"./pbf-GrhhwAw9.js";import"./executeQueryJSON-jNGwT6qF.js";import"./popupUtils-DaKwuCLL.js";const S=i=>{let t=class extends i{initialize(){this.exportImageParameters=new V({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var e;return((e=this.view)==null?void 0:e.floors)??null}get exportImageVersion(){var e;return(e=this.exportImageParameters)==null||e.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){var e;return E(this.layer,(e=this.view)==null?void 0:e.timeExtent,this._get("timeExtent"))}canResume(){var e;return!!super.canResume()&&!((e=this.timeExtent)!=null&&e.isEmpty)}};return r([o()],t.prototype,"exportImageParameters",void 0),r([o({readOnly:!0})],t.prototype,"floors",null),r([o({readOnly:!0})],t.prototype,"exportImageVersion",null),r([o()],t.prototype,"layer",void 0),r([o()],t.prototype,"suspended",void 0),r([o({readOnly:!0})],t.prototype,"timeExtent",null),t=r([n("esri.views.layers.MapImageLayerView")],t),t};let a=class extends S(G(x(H))){constructor(){super(...arguments),this._highlightGraphics=new l,this._updateHash=""}fetchPopupFeaturesAtLocation(i,t){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(i,t)}update(i){const t=`${this.exportImageVersion}/${i.state.id}/${i.pixelRatio}/${i.stationary}`;this._updateHash!==t&&(this._updateHash=t,this.strategy.update(i).catch(e=>{d(e)||u.getLogger(this).error(e)}),i.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(i.state.resolution)),this._highlightView.processUpdate(i)}attach(){const{imageMaxWidth:i,imageMaxHeight:t,version:e}=this.layer,s=e>=10.3,g=e>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new w({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new v(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new P({createFetchPopupFeaturesQueryGeometry:(h,p)=>U(h,p,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(h,p)=>{this._highlightView.graphicUpdateHandler({graphic:h,property:p})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new I({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:i,imageMaxHeight:t,imageRotationSupported:s,imageNormalizationSupported:g,hidpi:!0}),this.addAttachHandles(c(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(i,t,e,s){return this.layer.fetchImage(i,t,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}fetchImageBitmap(i,t,e,s){return this.layer.fetchImageBitmap(i,t,e,{timeExtent:this.timeExtent,floors:this.floors,...s})}highlight(i,t){const e=y(i);if(e.length===0)return m();const s=(t==null?void 0:t.name)??_;return this._addHighlightGraphics(e,s),m(()=>!this.destroyed&&this._removeHighlightGraphics(e,s))}_processHighlight(){var t;const i=this._getHighlights();(t=this._highlightView)==null||t.setHighlight(i)}_addHighlightGraphics(i,t){this._highlightGraphics.addMany(i),this._addHighlights(i.map(e=>e.uid),t)}_removeHighlightGraphics(i,t){this._highlightGraphics.removeMany(i),this._removeHighlights(i.map(e=>e.uid),t)}};r([o()],a.prototype,"strategy",void 0),r([o()],a.prototype,"updating",void 0),a=r([n("esri.views.2d.layers.MapImageLayerView2D")],a);const kt=a;export{kt as default};
