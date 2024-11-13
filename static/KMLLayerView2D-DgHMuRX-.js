import{cL as k,ao as T,cT as U,cX as A,c_ as z,cV as B,h3 as E,cY as F,as as O,aa as D,aF as N,cD as W,h4 as H,cI as C,c3 as $,cK as K,bC as j,h5 as Y,h6 as L,au as J,fD as X,ak as v,al as S,am as Q}from"./index-BPaEurMl.js";import{b as P,g as Z,d as tt}from"./kmlUtils-DgzjV4w8.js";import{g as et,f as it,S as at}from"./Bitmap-BhaMpW18.js";import{a as st}from"./BitmapContainer-CaJqpa79.js";import{j as rt,y as ot}from"./LayerView-DKf0iEMk.js";import{t as M}from"./GraphicContainer-CL-JCv4n.js";import{F as R}from"./GraphicsView2D-B6x_aPDV.js";import{C as nt,i as lt}from"./rasterProjectionHelper-BxGD9wyE.js";import{a as ht}from"./WGLContainer-KjbWquGu.js";import{y as pt,o as mt}from"./RenderingContext-DVO0q0tR.js";import{E as ct}from"./Program-zoZbL6gv.js";import{c as dt}from"./rasterUtils-BOAu4r2Z.js";import"./Container-DetwY83x.js";import"./EffectView-DdmkZMsV.js";import"./layerViewUtils-DoXWNPvI.js";import"./AGraphicContainer-DxAdXIhM.js";import"./TechniqueInstance-CUTYGOxT.js";import"./UpdateTracking2D-BDE3o7g-.js";import"./BindType-BmZEZMMh.js";import"./Util-Bg9xnGjw.js";import"./LabelMetric-qSJOJLPw.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BoundingBox-BpidzL0d.js";import"./TileContainer-r_P_p0Sy.js";import"./FeatureCommandQueue-DedzJeI2.js";import"./CIMSymbolHelper-CSQ82ux7.js";import"./BidiEngine-DNnuvc1i.js";import"./fontUtils-B3pWjTl6.js";import"./GeometryUtils-DvkV6DN6.js";import"./Rect-CUzevAry.js";import"./BufferObject-OESQIBso.js";import"./VertexArrayObject-CnnK3PQk.js";import"./constants-F8oTIn7N.js";import"./vec3f32-nZdmKIgz.js";import"./AttributeStore-CGk_WuSL.js";import"./TimeOnly-Dc78niPj.js";import"./timeSupport-BXj_TVqz.js";import"./queryUtils-DRb4uUwB.js";import"./json-Wa8cmqdu.js";import"./normalizeUtilsSync-C7SF3oml.js";import"./ProgramTemplate-2oD3JWt-.js";import"./StyleDefinition-DrS7SQ35.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./webglDeps-B9C_w_EF.js";import"./NestedMap-GuqgquCN.js";import"./renderState-coiwaj6f.js";import"./basicInterfaces-CZwQPxTp.js";import"./interfaces-DDtDqZYj.js";import"./testSVGPremultipliedAlpha-C7NFiCBx.js";import"./floatRGBA-DJAxlG7l.js";import"./doublePrecisionUtils-B0owpBza.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl2");e.getExtension("OES_texture_float"),this._rctx=new pt(e,{})}const s={applyProjection:!0,bilinear:!1,bicubic:!1},r=mt("raster/reproject","raster/reproject",new Map([["a_position",0]]),s);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ht(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,s,r=!1){const e=k(t.extent,s),a=new T({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=nt(a,s,t.extent);let n=(o+h)/2;const l=Math.round((e.xmax-e.xmin)/n),u=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/u)/2;const I=new T({x:n,y:n,spatialReference:e.spatialReference}),_=lt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=dt(this._rctx,_),y=new U(l,u);y.wrapMode=A.CLAMP_TO_EDGE;const m=new ct(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,u),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,f),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,u),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,g=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,z.RGBA,B.UNSIGNED_BYTE,g.data);const G=m.detachColorTexture(E.COLOR_ATTACHMENT0);return m.dispose(),{texture:G,extent:e,imageData:g}}const b=m.detachColorTexture(E.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:e}}reprojectBitmapData(t,s){const r=et(t.bitmapData)?it(t.bitmapData):t.bitmapData,e=new U;e.wrapMode=A.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const a=new F(this._rctx,e,r),o=this.reprojectTexture({texture:a,extent:t.extent},s,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,s,r){const e=(await O(t,{responseType:"image"})).data,a=document.createElement("canvas");a.width=e.width,a.height=e.height;const o=a.getContext("2d");o.drawImage(e,0,0);const h=o.getImageData(0,0,a.width,a.height);if(s.spatialReference.equals(r))return{bitmapData:h,extent:s};const n=this.reprojectBitmapData({bitmapData:h,extent:s},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class q{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends rt(ot){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new st,this._kmlVisualData=new q,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new N}async hitTest(i,t){var r,e,a;const s=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(a=this._polygonsView)==null?void 0:a.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=s,o.sourceLayer=s,{type:"graphic",graphic:o,layer:s,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),W(()=>this.layer.visibleSublayers,i=>{for(const t of this._kmlVisualData.allSublayers.values())t.visibility=0;for(const t of i){const s=this._kmlVisualData.allSublayers.get(t.id);s&&(s.visibility=1)}this._refreshCollections()})]),this._updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=H(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,s;((t=this.view.spatialReference)!=null&&t.isWGS84||(s=this.view.spatialReference)!=null&&s.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,$.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new at(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:s,viewBoundScale:r,httpQuery:e}=i;if(s!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let a;if(await K(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),a=c}else a=t.extent;a=k(a,j.WGS84);const o=k(a,j.WebMercator),h=a.xmin,n=a.xmax,l=a.ymin,u=a.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":u.toString(),"[lookatLon]":a.center.x.toString(),"[lookatLat]":a.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":a.center.x.toString(),"[lookatTerrainLat]":a.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":a.center.x.toString(),"[cameraLat]":a.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":Y,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let g;for(g in y)c[V]=c[V].replace(g,y[g])}},x=L(s);m(x);let f={};e!=null&&(f=L(e),m(f));const b=J(i.href);return b.query={...b.query,...x,...f},`${b.path}?${X(x)}`}return i.href}async _fetchService(i){const t=new q;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,s){return this._fetchParsedKML(i,s).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const a=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],h=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...a.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,s)}}})}_fetchParsedKML(i,t){return Z(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(s=>tt(s.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([Q("esri.views.2d.layers.KMLLayerView2D")],d);const ce=d;export{ce as default};
