import{aV as i,eA as n,W as s,Z as r,eB as l,ap as h}from"./index-DKbcOXvO.js";import{S as o,y as d}from"./LayerView-CR04FL3M.js";import"./Container-CVGlnMw0.js";import"./EffectView-BCDYNzM0.js";import"./layerViewUtils-CP8CZ9y0.js";let t=class extends o(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};s([r({cast:l})],t.prototype,"layerViews",null),s([r({readOnly:!0})],t.prototype,"updatingProgress",null),t=s([h("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const u=t;export{u as default};
