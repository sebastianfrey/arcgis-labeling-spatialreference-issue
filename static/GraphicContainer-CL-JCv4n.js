import{bg as h,bh as s,bi as t}from"./index-BPaEurMl.js";import{i}from"./AGraphicContainer-DxAdXIhM.js";class l extends i{renderChildren(e){for(const r of this.children)r.setTransform(e.state);if(super.renderChildren(e),this._updateAttributeView(),this.children.some(r=>r.hasData)){switch(e.drawPhase){case h.MAP:this._renderChildren(e,s.All);break;case h.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){t(e,!1,r=>{this._renderChildren(r,s.Highlight)})}}export{l as t};