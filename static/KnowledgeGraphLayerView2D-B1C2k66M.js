import{aF as i,d6 as l,ak as s,al as r,d7 as n,am as h}from"./index-BPaEurMl.js";import{j as d,y as o}from"./LayerView-DKf0iEMk.js";import"./Container-DetwY83x.js";import"./EffectView-DdmkZMsV.js";import"./layerViewUtils-DoXWNPvI.js";let t=class extends d(o){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",l(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};s([r({cast:n})],t.prototype,"layerViews",null),s([r({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const u=t;export{u as default};
