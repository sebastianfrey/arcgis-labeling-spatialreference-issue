import{cI as o,aG as g,aF as m,F as l,af as a,ak as p,al as c,am as n}from"./index-BPaEurMl.js";import{j as d,y as u}from"./LayerView-DKf0iEMk.js";import{t as w}from"./GraphicContainer-CL-JCv4n.js";import{F as y}from"./GraphicsView2D-B6x_aPDV.js";import{e as V}from"./HighlightCounter-Czi-fdpx.js";import"./Container-DetwY83x.js";import"./EffectView-DdmkZMsV.js";import"./layerViewUtils-DoXWNPvI.js";import"./AGraphicContainer-DxAdXIhM.js";import"./TechniqueInstance-CUTYGOxT.js";import"./UpdateTracking2D-BDE3o7g-.js";import"./BindType-BmZEZMMh.js";import"./Util-Bg9xnGjw.js";import"./Program-zoZbL6gv.js";import"./BufferObject-OESQIBso.js";import"./LabelMetric-qSJOJLPw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BpidzL0d.js";import"./TileContainer-r_P_p0Sy.js";import"./WGLContainer-KjbWquGu.js";import"./VertexArrayObject-CnnK3PQk.js";import"./ProgramTemplate-2oD3JWt-.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DrS7SQ35.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DedzJeI2.js";import"./CIMSymbolHelper-CSQ82ux7.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B3pWjTl6.js";import"./GeometryUtils-DvkV6DN6.js";import"./Rect-CUzevAry.js";import"./constants-F8oTIn7N.js";import"./AttributeStore-CGk_WuSL.js";import"./TimeOnly-Dc78niPj.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-C7SF3oml.js";let s=class extends d(u){constructor(){super(...arguments),this._highlightCounter=new V}attach(){this.graphicsView=new y({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new w(this.view.featuresTilingScheme),layerId:this.layer.id}),this.container.addChild(this.graphicsView.container),this.addAttachHandles([this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),this.watch("layer.visible",i=>{i&&(this.graphicsView.update({state:this.view.state}),this.graphicsView.pushUpdate())})]),this._updateHighlights()}detach(){this.container.removeAllChildren(),this.graphicsView=o(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i,t="default"){let r;typeof i=="number"?r=[i]:i instanceof g?r=[i.uid]:Array.isArray(i)&&i.length>0?r=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):m.isCollection(i)&&i.length>0&&(r=i.map(h=>h&&h.uid).toArray());const e=r==null?void 0:r.filter(l);return e!=null&&e.length?(this._addHighlight(e,t),a(()=>this._removeHighlight(e,t))):a()}_addHighlight(i,t){this._highlightCounter.addGroup(i,t),this._updateHighlights()}_removeHighlight(i,t){this._highlightCounter.deleteGroup(i,t),this._updateHighlights()}_updateHighlights(){var t;const i=[];for(const r of this._highlightCounter.ids()){const e=this._highlightCounter.getHighlightGroups(r),h=this._getHighlightBits(e);i.push({objectId:r,highlightFlags:h})}(t=this.graphicsView)==null||t.setHighlight(i)}};p([c()],s.prototype,"graphicsView",void 0),s=p([n("esri.views.2d.layers.GraphicsLayerView2D")],s);const hi=s;export{hi as default};
