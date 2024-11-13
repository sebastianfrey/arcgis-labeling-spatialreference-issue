import{bL as E,ai as N,ak as d,al as l,am as H,bq as $,g1 as z,ar as w,bM as q,c0 as T,eL as k,fz as P,dm as B,ab as C}from"./index-BPaEurMl.js";import{S as I}from"./Bitmap-BhaMpW18.js";const L=Math.PI/180;function U(e){return e*L}function A(e,i){const s=U(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,n]=i.size;return e[0]=Math.round(n*r+o*t),e[1]=Math.round(n*t+o*r),e}function O(e,i,s,t){const[r,o]=i,[n,a]=t,c=.5*s;return e[0]=r-c*n,e[1]=o-c*a,e[2]=r+c*n,e[3]=o+c*a,e}const u=E(),m=[0,0],_=new N(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let h=class extends ${constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=z(async(i,s)=>{if(w(s),!i.stationary||this.destroyed)return;const t=i.state,r=q(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],c=Math.round((this.imageMaxWidth??0)/o),x=Math.round((this.imageMaxHeight??0)/o);a?(m[0]=t.worldScreenWidth,m[1]=t.size[1]):this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):A(m,t);const M=Math.floor(m[0])>c||Math.floor(m[1])>x,S=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),v=!this.imageNormalizationSupported&&S,f=!M&&!v,b=this.imageRotationSupported?t.rotation:0,W=this.container.children.slice();if(f){const p=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,m,p,t.resolution,b,o,s)}else{let p=Math.min(c,x);n&&(p=Math.min(t.worldScreenWidth,p),p=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/p))),this._imagePromise=this._tiledExport(t,p,o,s)}try{const p=await this._imagePromise??[];w(s);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=p;for(const g of W)p.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of p)R.push(g.fadeIn());await Promise.all(R)}catch(p){this._imagePromise=null,T(p)}},5e3),this.updateExports=z(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=k(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});w(o);const a=new I(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),w(o),a}async _singleExport(e,i,s,t,r,o,n){O(u,s,t,i);const a=P(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,n)]}_tiledExport(e,i,s,t){const r=B.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new C(r),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((c,x,M,S)=>{_.set(c,x,M,0),o.getTileBounds(u,_);const v=P(u,e.spatialReference);a.push(this._export(v,i,i,0,s,t).then(f=>(S!==0&&(_.set(c,x,M,S),o.getTileBounds(u,_),f.x=u[0],f.y=u[3]),f)))}),Promise.all(a)}};d([l()],h.prototype,"_imagePromise",void 0),d([l()],h.prototype,"bitmaps",void 0),d([l()],h.prototype,"container",void 0),d([l()],h.prototype,"fetchSource",void 0),d([l()],h.prototype,"hidpi",void 0),d([l()],h.prototype,"imageMaxWidth",void 0),d([l()],h.prototype,"imageMaxHeight",void 0),d([l()],h.prototype,"imageRotationSupported",void 0),d([l()],h.prototype,"imageNormalizationSupported",void 0),d([l()],h.prototype,"requestUpdate",void 0),d([l()],h.prototype,"updating",null),h=d([H("esri.views.2d.layers.support.ExportStrategy")],h);const D=h;export{D as _};