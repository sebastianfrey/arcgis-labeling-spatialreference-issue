import{ak as t,al as i,am as n,aF as l}from"./index-BPaEurMl.js";import{j as y,y as d}from"./LayerView-DKf0iEMk.js";import"./Container-DetwY83x.js";import"./EffectView-DdmkZMsV.js";import"./layerViewUtils-DoXWNPvI.js";const p=s=>{let e=class extends s{constructor(...r){super(...r),this.layerViews=new l}get dynamicGroupLayerView(){return this.layerViews.find(r=>{var a;return r.layer===((a=this.layer)==null?void 0:a.dynamicGroupLayer)})}get footprintLayerView(){return this.layerViews.find(r=>{var a;return r.layer===((a=this.layer)==null?void 0:a.footprintLayer)})}isUpdating(){return!this.dynamicGroupLayerView||!this.footprintLayerView||this.dynamicGroupLayerView.updating||this.footprintLayerView.updating}};return t([i()],e.prototype,"layer",void 0),t([i()],e.prototype,"layerViews",void 0),t([i({readOnly:!0})],e.prototype,"dynamicGroupLayerView",null),t([i({readOnly:!0})],e.prototype,"footprintLayerView",null),e=t([n("esri.views.layers.CatalogLayerView")],e),e};let o=class extends p(y(d)){constructor(){super(...arguments),this.layerViews=new l}update(s){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange(()=>this.layerViews,()=>this._updateStageChildren(),{initial:!0})])}detach(){this.container.removeAllChildren()}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((s,e)=>this.container.addChildAt(s.container,e))}};t([i()],o.prototype,"layerViews",void 0),o=t([n("esri.views.2d.layers.CatalogLayerView2D")],o);const m=o;export{m as default};
