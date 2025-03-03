import{jf as Me,jh as et,kZ as Bt,g4 as k,f$ as Ge,aI as We,ut as kt,f_ as H,fL as xe,ar as Ht,bg as X,aG as x,f1 as Jt,eG as tt,j3 as Gt,ea as Zt,W as S,pJ as Yt,b1 as Xt,kS as qt,_ as Qt,cj as it,ps as _e,ch as Ie,ak as Et,pD as Kt,fJ as he,bb as rt,fK as Pe,g0 as ei,oJ as ti,pH as ae,jt as ii,ff as Ve,bR as ri,cO as ni,as as ai,gf as si,uU as oi}from"./index-BFudLC3v.js";import{t as li}from"./orientedBoundingBox-kCoBq_qJ.js";import{b2 as At,l as Ze,b3 as ci,b4 as di,I as _,J as Rt,K as xt,L as Ct,e as Y,aH as Te,b5 as nt,u as pi,c as hi,g as Ye,w as Xe,C as ui,z as Be,aw as fi,v as mi,r as vi,a as gi,aT as Si,ar as _i,o as Ti,ai as bi,aG as Oi,x as yi,B as ue,F as Ei,G as Ai,E as at,aJ as Ri,aK as xi,aL as Ci,H as Di,aM as st,aN as ot,aO as Li,b6 as Ii,b7 as lt,b8 as Pi,b9 as $i,ba as wi,bb as Ni,O as B,M as Ui,Y as ne,Z as ke,b0 as zi,b1 as ji,f as Fi}from"./Geometry-BOtVLlBA.js";import{o as Mi,e as Re}from"./mat4f64-Dk4dwAN8.js";import{U as ct,E as Wi}from"./sphere-D-pbN5cj.js";import{m as Vi,M as De,p as be,V as W,O as dt}from"./plane-u5CEEXtR.js";import{t as Bi}from"./basicInterfaces-CZwQPxTp.js";import{s as ki,m as Hi,H as Ji}from"./InterleavedLayout-DaT5bMFb.js";import{E as Gi,e as h}from"./VertexAttribute-Cq4MnHjR.js";import{e as Zi,r as Yi,t as Xi,a as Dt}from"./dehydratedFeatureUtils-DQKcLDmS.js";import{b as qi,j as Oe}from"./Octree-BsM4Lifv.js";import{v as Lt,M as Qi,b as $e,B as Ki}from"./lineSegment-SmKU1Ile.js";import{n as se,u as pe,i as er,S as tr,C as pt,e as ir}from"./ShaderOutput-DnYY5J1_.js";import{B as ye,g as we,c as ht}from"./renderState-Bwv_k_xr.js";import{m as rr}from"./computeTranslationToOriginAndRotation-CO062Ozn.js";import{u as nr}from"./hydratedFeatures-Bq-VVFmF.js";import{n as p,t as ar}from"./glsl-BH37Aalp.js";import"./BindType-BBwFZqyN.js";import"./floatRGBA-ol_XST_i.js";import{i as sr}from"./ShaderBuilder-C9rXjjS7.js";var ut,ft,mt;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})(ut||(ut={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(ft||(ft={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(mt||(mt={}));var Ce;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Ce||(Ce={}));let or=class extends At{get geometries(){return this._geometries}get transformation(){return this._transformation??Mi}set transformation(e){this._transformation=Me(this._transformation??Re(),e),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(e){this._shaderTransformation=e?Me(this._shaderTransformation??Re(),e):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(e={}){super(),this.type=Ze.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new It),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){ki(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._emit("geometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const i=this._geometries.splice(e,1)[0];i&&(this._emit("geometryRemoved",{object:this,geometry:i}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(e,i,r=!1){this._emit("attributesChanged",{object:this,geometry:e,attribute:i,sync:r}),Gi(i)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const i of this._geometries)i.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new ci;for(const i of this._geometries)i.occludees=Zi(i.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const i of this._geometries)i.occludees=Yi(i.occludees,e);this._emit("occlusionChanged",this)}highlight(e){const i=new di(e);for(const r of this._geometries)r.addHighlight(i);return this._emit("highlightChanged",this),i}removeHighlight(e){for(const i of this._geometries)i.removeHighlight(e);this._emit("highlightChanged",this)}removeStateID(e){e.channel===Bi.Highlight?this.removeHighlight(e):this.removeOcclude(e)}getCombinedStaticTransformation(e,i){return et(i,this.transformation,e.transformation)}getCombinedShaderTransformation(e,i=Re()){return et(i,this.effectiveTransformation,e.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new vt,this._validateBoundingVolume(this._bvWorldSpace,fe.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new vt,this._validateBoundingVolume(this._bvObjectSpace,fe.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,i){const r=i===fe.ObjectSpace;for(const n of this._geometries){const a=n.boundingInfo;a&&lr(a,e,r?n.transformation:this.getCombinedShaderTransformation(n))}Bt(ct(e.bounds),e.min,e.max,.5);for(const n of this._geometries){const a=n.boundingInfo;if(a==null)continue;const l=r?n.transformation:this.getCombinedShaderTransformation(n),o=Vi(l);k(gt,a.center,l);const s=Ge(gt,ct(e.bounds)),c=a.radius*o;e.bounds[3]=Math.max(e.bounds[3],s+c)}}_invalidateBoundingVolume(){var i;const e=(i=this._bvWorldSpace)==null?void 0:i.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,i){this._parentLayer&&this._parentLayer.events.emit(e,i)}get test(){}};class It{constructor(){this.min=We(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=We(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class vt extends It{constructor(){super(...arguments),this.bounds=Wi()}}function lr(t,e,i){const r=t.bbMin,n=t.bbMax;if(kt(i)){const a=H(cr,i[12],i[13],i[14]);xe(z,r,a),xe(F,n,a);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],z[l]),e.max[l]=Math.max(e.max[l],F[l])}else if(k(z,r,i),Ht(r,n))for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],z[a]),e.max[a]=Math.max(e.max[a],z[a]);else{k(F,n,i);for(let a=0;a<3;++a)e.min[a]=Math.min(e.min[a],z[a],F[a]),e.max[a]=Math.max(e.max[a],z[a],F[a]);for(let a=0;a<3;++a){X(z,r),X(F,n),z[a]=n[a],F[a]=r[a],k(z,z,i),k(F,F,i);for(let l=0;l<3;++l)e.min[l]=Math.min(e.min[l],z[l],F[l]),e.max[l]=Math.max(e.max[l],z[l],F[l])}}}const cr=x(),z=x(),F=x(),gt=x();var fe;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(fe||(fe={}));const dr=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];let pr=class extends At{constructor(e,i,r=""){super(),this.stage=e,this.apiLayerUid=r,this.type=Ze.Layer,this.events=new Jt,this.visible=!0,this.sliceable=!1,this._objectsAdded=new tt,this._handles=new Gt,this._objects=new tt,this._pickable=!0,this.visible=(i==null?void 0:i.visible)??!0,this._pickable=(i==null?void 0:i.pickable)??!0,this.updatePolicy=(i==null?void 0:i.updatePolicy)??Ce.ASYNC,this._disableOctree=(i==null?void 0:i.disableOctree)??!1,e.add(this);for(const n of dr)this._handles.add(this.events.on(n,a=>e.handleEvent(n,a)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(e){this._pickable=e}get pickable(){return this._pickable&&this.visible}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const i of e)i.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const i=new Array;if(this._objects.removeUnorderedMany(e,e.length,i),i.length!==0){for(const r of i)r.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:i}),this._octree!=null){for(let r=0;r<i.length;)this._objectsAdded.removeUnordered(i[r])?(i[r]=i[i.length-1],i.length-=1):++r;this._octree.remove(i)}}}sync(){this.updatePolicy!==Ce.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,i){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,i)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new qi(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=Zt(this._octree),this._objectsAdded.clear()}},hr=class{constructor(e,i){this.vec3=e,this.id=i}};function St(t,e,i,r){return new hr(We(t,e,i),r)}var te,me;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(te||(te={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(me||(me={}));let j=class extends Rt{constructor(){super(...arguments),this.space=te.Screen,this.anchor=me.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=xt.None,this.emissionSource=Ct.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===te.Draped}};S([_({count:te.COUNT})],j.prototype,"space",void 0),S([_({count:me.COUNT})],j.prototype,"anchor",void 0),S([_()],j.prototype,"occluder",void 0),S([_()],j.prototype,"writeDepth",void 0),S([_()],j.prototype,"hideOnShortSegments",void 0),S([_()],j.prototype,"hasCap",void 0),S([_()],j.prototype,"hasTip",void 0),S([_()],j.prototype,"vvSize",void 0),S([_()],j.prototype,"vvColor",void 0),S([_()],j.prototype,"vvOpacity",void 0),S([_()],j.prototype,"hasOccludees",void 0),S([_()],j.prototype,"terrainDepthTest",void 0),S([_()],j.prototype,"cullAboveTerrain",void 0);const _t=8;function ur(t,e){const i=t.vertex;i.uniforms.add(new Y("intrinsicWidth",r=>r.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),i.uniforms.add(new Te("vvSizeMinSize",r=>r.vvSize.minSize),new Te("vvSizeMaxSize",r=>r.vvSize.maxSize),new Te("vvSizeOffset",r=>r.vvSize.offset),new Te("vvSizeFactor",r=>r.vvSize.factor)),i.code.add(p`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),i.code.add(p`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),i.constants.add("vvOpacityNumber","int",8),i.uniforms.add(new nt("vvOpacityValues",r=>r.vvOpacity.values,_t),new nt("vvOpacityOpacities",r=>r.vvOpacity.opacityValues,_t)),i.code.add(p`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):i.code.add(p`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(pi,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),i.code.add(p`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),i.code.add(p`vec4 getColor(){
return applyOpacity(color);
}`))}function Pt(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function fr(t){if(t==null)return 1;const e=Pt(t);return Math.floor(e.reduce((i,r)=>i+r))}function mr(t){return Pt(t).reduce((e,i)=>Math.max(e,i))}function vr(t){return t==null?Yt:t.length===4?t:Xt(gr,t[0],t[1],t[2],1)}const gr=qt();function Sr(t,e){if(!e.stippleEnabled)return void t.fragment.code.add(p`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const i=!(e.draped&&e.stipplePreferContinuous),{vertex:r,fragment:n}=t;n.include(Xi),e.draped||(hi(r,e),r.uniforms.add(new Ye("worldToScreenPerDistanceRatio",({camera:a})=>1/a.perScreenPixelRatio)).code.add(p`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),t.varyings.add("vStippleDistanceLimits","vec2"),t.varyings.add("vStipplePatternStretch","float"),r.code.add(p`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${p.float(Tr)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),r.code.add(p`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),r.code.add(p`
    if (segmentLengthPseudoScreen >= ${i?"patternLength":"1e4"}) {
  `),Xe(r),r.code.add(p`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),n.uniforms.add(new ui("stipplePatternTexture",a=>a.stippleTexture),new Y("stipplePatternSDFNormalizer",a=>_r(a.stipplePattern)),new Y("stipplePatternPixelSizeInv",a=>1/$t(a))),e.stippleOffColorEnabled&&n.uniforms.add(new Be("stippleOffColor",a=>vr(a.stippleOffColor))),n.code.add(p`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),n.code.add(p`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${ar(!e.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${e.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function _r(t){return t?(Math.floor(.5*(mr(t)-1))+.5)/t.pixelRatio:1}function $t(t){const e=t.stipplePattern;return e?fr(t.stipplePattern)/e.pixelRatio:1}const Tr=.4,wt=64,br=wt/2,Or=br/5,yr=wt/Or,En=.25;function Er(t,e){const i=t.vertex;Xe(i),i.uniforms.get("markerScale")==null&&i.constants.add("markerScale","float",1),i.constants.add("markerSizePerLineWidth","float",yr).code.add(p`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===te.World&&(i.constants.add("maxSegmentLengthFraction","float",.45),i.uniforms.add(new Ye("perRenderPixelRatio",r=>r.camera.perRenderPixelRatio)),i.code.add(p`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var ie;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(ie||(ie={}));let E=class extends Rt{constructor(){super(...arguments),this.capType=ie.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=xt.None,this.emissionSource=Ct.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}};S([_({count:ie.COUNT})],E.prototype,"capType",void 0),S([_()],E.prototype,"hasPolygonOffset",void 0),S([_()],E.prototype,"writeDepth",void 0),S([_()],E.prototype,"draped",void 0),S([_()],E.prototype,"stippleEnabled",void 0),S([_()],E.prototype,"stippleOffColorEnabled",void 0),S([_()],E.prototype,"stipplePreferContinuous",void 0),S([_()],E.prototype,"roundJoins",void 0),S([_()],E.prototype,"applyMarkerOffset",void 0),S([_()],E.prototype,"vvSize",void 0),S([_()],E.prototype,"vvColor",void 0),S([_()],E.prototype,"vvOpacity",void 0),S([_()],E.prototype,"falloffEnabled",void 0),S([_()],E.prototype,"innerColorEnabled",void 0),S([_()],E.prototype,"hasOccludees",void 0),S([_()],E.prototype,"occluder",void 0),S([_()],E.prototype,"terrainDepthTest",void 0),S([_()],E.prototype,"cullAboveTerrain",void 0),S([_()],E.prototype,"wireframe",void 0),S([_()],E.prototype,"discardInvisibleFragments",void 0),S([_()],E.prototype,"objectAndLayerIdColorInstanced",void 0);const ve=1;function Nt(t){const e=new sr,{attributes:i,varyings:r,vertex:n,fragment:a}=e,{applyMarkerOffset:l,draped:o,output:s,capType:c,stippleEnabled:d,falloffEnabled:f,roundJoins:m,wireframe:u,innerColorEnabled:y}=t;e.include(fi),e.include(ur,t),e.include(Sr,t),e.include(mi,t),e.include(vi,t);const O=l&&!o;O&&(n.uniforms.add(new Y("markerScale",v=>v.markerScale)),e.include(Er,{space:te.World})),gi(n,t),n.uniforms.add(new Si("inverseProjectionMatrix",v=>v.camera.inverseProjectionMatrix),new _i("nearFar",v=>v.camera.nearFar),new Y("miterLimit",v=>v.join!=="miter"?0:v.miterLimit),new Ti("viewport",v=>v.camera.fullViewport)),n.constants.add("LARGE_HALF_FLOAT","float",65500),i.add(h.POSITION,"vec3"),i.add(h.PREVPOSITION,"vec3"),i.add(h.NEXTPOSITION,"vec3"),i.add(h.SUBDIVISIONFACTOR,"float"),i.add(h.UV0,"vec2"),r.add("vColor","vec4"),r.add("vpos","vec3"),r.add("vLineDistance","float"),r.add("vLineWidth","float");const C=d;C&&r.add("vLineSizeInv","float");const A=c===ie.ROUND,b=d&&A,N=f||b;N&&r.add("vLineDistanceNorm","float"),A&&(r.add("vSegmentSDF","float"),r.add("vReverseSegmentSDF","float")),n.code.add(p`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),n.code.add(p`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),n.code.add(p`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),Xe(n),n.constants.add("aaWidth","float",d?0:1).main.add(p`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${C?p`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),O&&n.main.add(p`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),n.main.add(p`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(d||A)&&n.main.add(p`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${A?p`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),n.main.add(p`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),m?n.main.add(p`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${d?p`min(1.0, subdivisionFactor * ${p.float((ve+2)/(ve+1))})`:p`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):n.main.add(p`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`);const T=c!==ie.BUTT;return n.main.add(p`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${T?p`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),n.main.add(p`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${N?p`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),A&&n.main.add(p`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),d&&(o?n.uniforms.add(new Ye("worldToScreenRatio",v=>1/v.screenToPCSRatio)):n.main.add(p`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),n.main.add(p`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),o?n.main.add(p`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):n.main.add(p`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),n.uniforms.add(new Y("stipplePatternPixelSize",v=>$t(v))),n.main.add(p`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),n.main.add(p`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${u&&!o?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),e.fragment.include(bi,t),e.include(Oi,t),a.include(yi),a.main.add(p`discardBySlice(vpos);
discardByTerrainDepth();`),u?a.main.add(p`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(A&&a.main.add(p`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${p.float(ue)}) {
          discard;
        }
      `),b?a.main.add(p`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${p.float(ue)}, stippleCoverage);
      `):a.main.add(p`float stippleAlpha = getStippleAlpha();`),s!==se.ObjectAndLayerIdColor&&a.main.add(p`discardByStippleAlpha(stippleAlpha, ${p.float(ue)});`),a.uniforms.add(new Be("intrinsicColor",v=>v.color)),a.main.add(p`vec4 color = intrinsicColor * vColor;`),y&&(a.uniforms.add(new Be("innerColor",v=>v.innerColor??v.color),new Y("innerWidth",(v,I)=>v.innerWidth*I.camera.pixelRatio)),a.main.add(p`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),a.main.add(p`vec4 finalColor = blendStipple(color, stippleAlpha);`),f&&(a.uniforms.add(new Y("falloff",v=>v.falloff)),a.main.add(p`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),d||a.main.add(p`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),a.main.add(p`outputColorHighlightOID(finalColor, vpos);`),e}const Ar=Object.freeze(Object.defineProperty({__proto__:null,build:Nt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));let Rr=class extends Ei{constructor(e,i){super(e,i,new Ai(Ar,()=>Qt(()=>Promise.resolve().then(()=>Qr),void 0,import.meta.url)),Ut),this.primitiveType=i.wireframe?it.LINES:it.TRIANGLE_STRIP}_makePipelineState(e,i){const{oitPass:r,output:n,hasOccludees:a,hasPolygonOffset:l}=e,o=r===at.NONE,s=r===at.FrontFace;return ye({blending:pe(n)?Ri(r):null,depthTest:{func:xi(r)},depthWrite:Ci(e),drawBuffers:n===se.Depth?{buffers:[_e.NONE]}:Di(r,n),colorWrite:we,stencilWrite:a?st:null,stencilTest:a?i?ot:Li:null,polygonOffset:o||s?l?Tt:null:Ii})}initializePipeline(e){if(e.occluder){const i=e.hasPolygonOffset?Tt:null;this._occluderPipelineTransparent=ye({blending:ht,polygonOffset:i,depthTest:lt,depthWrite:null,colorWrite:we,stencilWrite:null,stencilTest:Pi,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null}),this._occluderPipelineOpaque=ye({blending:ht,polygonOffset:i,depthTest:lt,depthWrite:null,colorWrite:we,stencilWrite:$i,stencilTest:wi,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null}),this._occluderPipelineMaskWrite=ye({blending:null,polygonOffset:i,depthTest:Ni,depthWrite:null,colorWrite:null,stencilWrite:st,stencilTest:ot,drawBuffers:e.output===se.Depth?{buffers:[_e.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,i){if(e)return this._occludeePipeline;switch(i){case B.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case B.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}};const Tt={factor:0,units:-4},Ut=new Map([[h.POSITION,0],[h.PREVPOSITION,1],[h.NEXTPOSITION,2],[h.SUBDIVISIONFACTOR,3],[h.UV0,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);var U;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(U||(U={}));class xr extends Ui{constructor(e){super(e,Dr),this._configuration=new E,this.vertexAttributeLocations=Ut,this.produces=new Map([[B.OPAQUE_MATERIAL,i=>er(i)||pe(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.OPAQUE_MATERIAL_WITHOUT_NORMALS,i=>tr(i)],[B.OCCLUDER_MATERIAL,i=>pt(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.TRANSPARENT_OCCLUDER_MATERIAL,i=>pt(i)&&this.parameters.renderOccluded===ne.OccludeAndTransparentStencil],[B.TRANSPARENT_MATERIAL,i=>pe(i)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[B.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,i=>pe(i)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==ne.OccludeAndTransparentStencil],[B.DRAPED_MATERIAL,i=>ir(i)]])}getConfiguration(e,i){this._configuration.output=e,this._configuration.oitPass=i.oitPass,this._configuration.draped=i.slot===B.DRAPED_MATERIAL;const r=this.parameters.stipplePattern!=null&&e!==se.Highlight;return this._configuration.stippleEnabled=r,this._configuration.stippleOffColorEnabled=r&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=r&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Ir(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=i.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===ne.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=i.terrainDepthTest&&pe(e),this._configuration.cullAboveTerrain=i.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){var e;return this.parameters.color[3]>=ue||this.parameters.stipplePattern!=null&&(((e=this.parameters.stippleOffColor)==null?void 0:e[3])??0)>ue}intersectDraped({attributes:e,screenToWorldRatio:i},r,n,a,l,o){if(!n.options.selectionMode)return;const s=e.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const A=e.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ie(this.parameters.vvSize.offset[0]+A*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);const d=a[0],f=a[1],m=(c/2+4)*i;let u=Number.MAX_VALUE,y=0;const O=e.get(h.POSITION).data,C=He(this.parameters,e)?O.length-2:O.length-5;for(let A=0;A<C;A+=3){const b=O[A],N=O[A+1],T=(A+3)%O.length,v=d-b,I=f-N,g=O[T]-b,Z=O[T+1]-N,L=Ie((g*v+Z*I)/(g*g+Z*Z),0,1),re=g*L-v,P=Z*L-I,q=re*re+P*P;q<u&&(u=q,y=A/3)}u<m*m&&l(o.dist,o.normal,y,!1)}intersect(e,i,r,n,a,l){if(!r.options.selectionMode||!e.visible)return;if(!Hi(i))return void Et.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const o=e.attributes,s=o.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const b=o.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Ie(this.parameters.vvSize.offset[0]+b*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o.has(h.SIZE)&&(c*=o.get(h.SIZE).data[0]);const d=r.camera,f=Pr;Kt(f,r.point);const m=c*d.pixelRatio/2+4*d.pixelRatio;H(de[0],f[0]-m,f[1]+m,0),H(de[1],f[0]+m,f[1]+m,0),H(de[2],f[0]+m,f[1]-m,0),H(de[3],f[0]-m,f[1]-m,0);for(let b=0;b<4;b++)if(!d.unprojectFromRenderScreen(de[b],G[b]))return;be(d.eye,G[0],G[1],Ue),be(d.eye,G[1],G[2],ze),be(d.eye,G[2],G[3],je),be(d.eye,G[3],G[0],Fe);let u=Number.MAX_VALUE,y=0;const O=He(this.parameters,o)?s.length-2:s.length-5;for(let b=0;b<O;b+=3){$[0]=s[b]+i[12],$[1]=s[b+1]+i[13],$[2]=s[b+2]+i[14];const N=(b+3)%s.length;if(w[0]=s[N]+i[12],w[1]=s[N+1]+i[13],w[2]=s[N+2]+i[14],W(Ue,$)<0&&W(Ue,w)<0||W(ze,$)<0&&W(ze,w)<0||W(je,$)<0&&W(je,w)<0||W(Fe,$)<0&&W(Fe,w)<0)continue;if(d.projectToRenderScreen($,K),d.projectToRenderScreen(w,ee),K[2]<0&&ee[2]>0){he(V,$,w);const v=d.frustum,I=-W(v[Oe.NEAR],$)/rt(V,dt(v[Oe.NEAR]));Pe(V,V,I),xe($,$,V),d.projectToRenderScreen($,K)}else if(K[2]>0&&ee[2]<0){he(V,w,$);const v=d.frustum,I=-W(v[Oe.NEAR],w)/rt(V,dt(v[Oe.NEAR]));Pe(V,V,I),xe(w,w,V),d.projectToRenderScreen(w,ee)}else if(K[2]<0&&ee[2]<0)continue;K[2]=0,ee[2]=0;const T=Qi($e(K,ee,yt),f);T<u&&(u=T,X(bt,$),X(Ot,w),y=b/3)}const C=r.rayBegin,A=r.rayEnd;if(u<m*m){let b=Number.MAX_VALUE;if(Ki($e(bt,Ot,yt),$e(C,A,$r),Q)){he(Q,Q,C);const N=ei(Q);Pe(Q,Q,1/N),b=N/Ge(C,A)}l(b,Q,y,!1)}}get _layout(){const e=Ji().vec3f(h.POSITION).vec3f(h.PREVPOSITION).vec3f(h.NEXTPOSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),ke()&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new Lr(this._layout,this.parameters)}createGLMaterial(e){return new Cr(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}}class Cr extends zi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){const i=this._material.parameters.stipplePattern;return this._stipplePattern!==i&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(i,this._stipplePattern)}),this._stipplePattern=i),this.getTechnique(Rr,e)}}class Dr extends ji{constructor(){super(...arguments),this.width=0,this.color=ti,this.join="miter",this.cap=ie.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){var e;return this.color[3]<1||this.stipplePattern!=null&&(((e=this.stippleOffColor)==null?void 0:e[3])??0)<1}}class Lr{constructor(e,i){this.vertexBufferLayout=e,this._parameters=i,this.numJoinSubdivisions=0;const r=i.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=r;break;case"round":this.numJoinSubdivisions=ve+r}}_isClosed(e){return He(this._parameters,e)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const r=e.get(h.POSITION).indices.length/2+1,n=this._isClosed(e);let a=n?2:2*2;return a+=((n?r:r-1)-(n?0:1))*(2*this.numJoinSubdivisions+4),a+=2,this._parameters.wireframe&&(a=2+4*(a-2)),a}write(e,i,r,n,a,l){var qe,Qe,Ke;const o=wr,s=Nr,c=Ur,d=r.get(h.POSITION),f=d.indices,m=d.data.length/3,u=(qe=r.get(h.DISTANCETOSTART))==null?void 0:qe.data;f&&f.length!==2*(m-1)&&console.warn("RibbonLineMaterial does not support indices");const y=((Qe=r.get(h.SIZEFEATUREATTRIBUTE))==null?void 0:Qe.data[0])??((Ke=r.get(h.SIZE))==null?void 0:Ke.data[0])??1;let O=[1,1,1,1],C=0;const A=this.vertexBufferLayout.fields.has(h.COLORFEATUREATTRIBUTE);A?C=r.get(h.COLORFEATUREATTRIBUTE).data[0]:r.has(h.COLOR)&&(O=r.get(h.COLOR).data);const b=this.vertexBufferLayout.fields.has(h.OPACITYFEATUREATTRIBUTE),N=b?r.get(h.OPACITYFEATUREATTRIBUTE).data[0]:0,T=new Float32Array(a.buffer),v=ke()?new Uint8Array(a.buffer):null,I=this.vertexBufferLayout.stride/4;let g=l*I;const Z=g;let L=0;const re=u?(R,M,J)=>L=u[J]:(R,M,J)=>L+=Ge(R,M),P=(R,M,J,ce,ge,Wt,Vt)=>{if(T[g++]=M[0],T[g++]=M[1],T[g++]=M[2],T[g++]=R[0],T[g++]=R[1],T[g++]=R[2],T[g++]=J[0],T[g++]=J[1],T[g++]=J[2],T[g++]=ce,T[g++]=Vt,T[g++]=ge,T[g++]=y,A)T[g++]=C;else{const Se=Math.min(4*Wt,O.length-4);T[g++]=O[Se],T[g++]=O[Se+1],T[g++]=O[Se+2],T[g++]=O[Se+3]}b&&(T[g++]=N),ke()&&(n&&(v[4*g]=n[0],v[4*g+1]=n[1],v[4*g+2]=n[2],v[4*g+3]=n[3]),g++)};g+=I,H(s,d.data[0],d.data[1],d.data[2]),e&&k(s,s,e);const q=this._isClosed(r);if(q){const R=d.data.length-3;H(o,d.data[R],d.data[R+1],d.data[R+2]),e&&k(o,o,e)}else H(c,d.data[3],d.data[4],d.data[5]),e&&k(c,c,e),P(s,s,c,1,U.LEFT_CAP_START,0,0),P(s,s,c,1,U.RIGHT_CAP_START,0,0),X(o,s),X(s,c);const Le=q?0:1,le=q?m:m-1;for(let R=Le;R<le;R++){const M=(R+1)%m*3;H(c,d.data[M],d.data[M+1],d.data[M+2]),e&&k(c,c,e),re(o,s,R),P(o,s,c,0,U.LEFT_JOIN_END,R,L),P(o,s,c,0,U.RIGHT_JOIN_END,R,L);const J=this.numJoinSubdivisions;for(let ce=0;ce<J;++ce){const ge=(ce+1)/(J+1);P(o,s,c,ge,U.LEFT_JOIN_END,R,L),P(o,s,c,ge,U.RIGHT_JOIN_END,R,L)}P(o,s,c,1,U.LEFT_JOIN_START,R,L),P(o,s,c,1,U.RIGHT_JOIN_START,R,L),X(o,s),X(s,c)}q?(H(c,d.data[3],d.data[4],d.data[5]),e&&k(c,c,e),L=re(o,s,le),P(o,s,c,0,U.LEFT_JOIN_END,Le,L),P(o,s,c,0,U.RIGHT_JOIN_END,Le,L)):(L=re(o,s,le),P(o,s,s,0,U.LEFT_CAP_END,le,L),P(o,s,s,0,U.RIGHT_CAP_END,le,L)),Ne(T,Z+I,T,Z,I),g=Ne(T,g-I,T,g,I),this._parameters.wireframe&&this._addWireframeVertices(a,Z,g,I)}_addWireframeVertices(e,i,r,n){const a=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT),l=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT,r-i);let o=0;const s=c=>o=Ne(l,c,a,o,n);for(let c=0;c<l.length-1;c+=2*n)s(c),s(c+2*n),s(c+1*n),s(c+2*n),s(c+1*n),s(c+3*n)}}function Ne(t,e,i,r,n){for(let a=0;a<n;a++)i[r++]=t[e++];return r}function He(t,e){return t.isClosed?e.get(h.POSITION).indices.length>2:!1}function Ir(t){return t.anchor===me.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const $=x(),w=x(),V=x(),Q=x(),Pr=x(),K=ae(),ee=ae(),bt=x(),Ot=x(),yt=Lt(),$r=Lt(),wr=x(),Nr=x(),Ur=x(),de=[ae(),ae(),ae(),ae()],G=[x(),x(),x(),x()],Ue=De(),ze=De(),je=De(),Fe=De();class xn{constructor(e){this._originSR=e,this._rootOriginId="root/"+ii(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(e){const i=this._origins.get(this._rootOriginId);if(i==null){const d=St(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const r=this._gridSize,n=Math.round(e[0]/r),a=Math.round(e[1]/r),l=Math.round(e[2]/r),o=`${n}/${a}/${l}`;let s=this._origins.get(o);const c=.5*r;if(he(D,e,i.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),D[0]<c&&D[1]<c&&D[2]<c){if(s){const d=Math.max(...D);if(he(D,e,s.vec3),D[0]=Math.abs(D[0]),D[1]=Math.abs(D[1]),D[2]=Math.abs(D[2]),Math.max(...D)<d)return s}return i}return s||(s=St(n*r,a*r,l*r,o),this._origins.set(o,s)),s}_drawOriginBox(e,i=ri(1,1,0,1)){const r=window.view,n=r._stage,a=i.toString();if(!this._objects.has(a)){this._material=new xr({width:2,color:i}),n.add(this._material);const u=new pr(n,{pickable:!1}),y=new or({castShadow:!1});n.add(y),u.add(y),this._objects.set(a,y)}const l=this._objects.get(a),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=new Array(3*s),d=new Array,f=.5*this._gridSize;for(let u=0;u<s;u++)c[3*u]=e[0]+(1&o[u]?f:-f),c[3*u+1]=e[1]+(2&o[u]?f:-f),c[3*u+2]=e[2]+(4&o[u]?f:-f),u>0&&d.push(u-1,u);Ve(c,this._originSR,0,c,r.renderSpatialReference,0,s);const m=new Fi(this._material,[[h.POSITION,new li(c,d,3,!0)]],null,Ze.Line);n.add(m),l.addGeometry(m)}get test(){}}const D=x();class Cn{constructor(e,i=null,r=0){this.array=e,this.spatialReference=i,this.offset=r}}function zt(t){return"array"in t}function Ee(t,e,i="ground"){if(Dt(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,i);if(zt(e)){let r=e.offset;return t.getElevation(e.array[r++],e.array[r++],e.array[r]||0,e.spatialReference??t.spatialReference,i)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,i)}function Dn(t,e,i,r,n,a,l,o,s,c,d){const f=kr[d.mode];let m,u,y=0;if(Ve(t,e,i,r,s.spatialReference,n,o))return f!=null&&f.requiresAlignment(d)?(y=f.applyElevationAlignmentBuffer(r,n,a,l,o,s,c,d),m=a,u=l):(m=r,u=n),Ve(m,s.spatialReference,u,a,c.spatialReference,l,o)?y:void 0}function jt(t,e,i,r,n){const a=(Dt(t)?t.z:zt(t)?t.array[t.offset+2]:t[2])||0;switch(i.mode){case"on-the-ground":{const l=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=0,n.sampledElevation=l,void(n.z=l)}case"relative-to-ground":{const l=Ee(e,t,"ground")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"relative-to-scene":{const l=Ee(e,t,"scene")??0,o=i.geometryZWithOffset(a,r);return n.verticalDistanceToGround=o,n.sampledElevation=l,void(n.z=o+l)}case"absolute-height":{const l=i.geometryZWithOffset(a,r),o=Ee(e,t,"ground")??0;return n.verticalDistanceToGround=l-o,n.sampledElevation=o,void(n.z=l)}default:return void(n.z=0)}}function Ln(t,e,i,r){return jt(t,e,i,r,oe),oe.z}function In(t,e,i){return e==="on-the-ground"&&i==="on-the-ground"?t.staysOnTheGround:e===i||e!=="on-the-ground"&&i!=="on-the-ground"?e==null||i==null?t.definedChanged:Je.UPDATE:t.onTheGroundChanged}function Pn(t){return t==="relative-to-ground"||t==="relative-to-scene"}function $n(t){return t!=="absolute-height"}function wn(t,e,i,r,n){jt(e,i,n,r,oe),zr(t,oe.verticalDistanceToGround);const a=oe.sampledElevation,l=Me(Hr,t.transformation);return Ae[0]=e.x,Ae[1]=e.y,Ae[2]=oe.z,rr(e.spatialReference,Ae,l,r.spatialReference)?t.transformation=l:console.warn("Could not locate symbol object properly, it might be misplaced"),a}function zr(t,e){for(let i=0;i<t.geometries.length;++i){const r=t.geometries[i].getMutableAttribute(h.CENTEROFFSETANDDISTANCE);r&&r.data[3]!==e&&(r.data[3]=e,t.geometryVertexAttributeUpdated(t.geometries[i],h.CENTEROFFSETANDDISTANCE))}}function jr(t,e,i,r,n,a){let l=0;const o=a.spatialReference;e*=3,r*=3;for(let s=0;s<n;++s){const c=t[e],d=t[e+1],f=t[e+2],m=a.getElevation(c,d,f,o,"ground")??0;l+=m,i[r]=c,i[r+1]=d,i[r+2]=m,e+=3,r+=3}return l/n}function Fr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,f=a.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const u=t[e],y=t[e+1],O=t[e+2],C=a.getElevation(u,y,O,f,"ground")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,e+=3,r+=3}return s/n}function Mr(t,e,i,r,n,a,l,o){let s=0;const c=o.calculateOffsetRenderUnits(l),d=o.featureExpressionInfoContext,f=a.spatialReference;e*=3,r*=3;for(let m=0;m<n;++m){const u=t[e],y=t[e+1],O=t[e+2],C=a.getElevation(u,y,O,f,"scene")??0;s+=C,i[r]=u,i[r+1]=y,i[r+2]=d==null?O+C+c:C+c,e+=3,r+=3}return s/n}function Wr(t){const e=t.meterUnitOffset,i=t.featureExpressionInfoContext;return e!==0||i!=null}function Vr(t,e,i,r,n,a,l,o){const s=o.calculateOffsetRenderUnits(l),c=o.featureExpressionInfoContext;e*=3,r*=3;for(let d=0;d<n;++d){const f=t[e],m=t[e+1],u=t[e+2];i[r]=f,i[r+1]=m,i[r+2]=c==null?u+s:s,e+=3,r+=3}return 0}class Br{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}var Je;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(Je||(Je={}));const kr={"absolute-height":{applyElevationAlignmentBuffer:Vr,requiresAlignment:Wr},"on-the-ground":{applyElevationAlignmentBuffer:jr,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Fr,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Mr,requiresAlignment:()=>!0}},Hr=Re(),oe=new Br,Ae=x(),Jr=()=>Et.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function Gr(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Nn(t,e,i,r){const n=t==null?void 0:t.expression;if(typeof n!="string")return null;const a=qr(n);if(a!=null)return{cachedResult:a};const l=await ni();ai(i);const o=l.arcadeUtils,s=o.createSyntaxTree(n);return o.dependsOnView(s)?(r!=null&&r.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:o.createFunction(s),context:o.createExecContext(null,{sr:e}),modules:l}}}function Zr(t,e,i){return t.arcadeUtils.createFeature(e.attributes,e.geometry,i)}function Yr(t,e){if(t!=null&&!Ft(t)){if(!e||!t.arcade)return void Jr().errorOncePerTick("Arcade support required but not provided");const i=e;i._geometry&&(i._geometry=nr(i._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function Xr(t){if(t!=null){if(Ft(t))return t.cachedResult;const e=t.arcade;let i=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof i!="number"&&(t.cachedResult=0,i=0),i}return 0}function Un(t,e=!1){let i=t==null?void 0:t.featureExpressionInfo;const r=i==null?void 0:i.expression;return e||r==="0"||(i=null),i??null}const zn={cachedResult:0};function Ft(t){return t.cachedResult!=null}function qr(t){return t==="0"?0:null}class Mt{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=si(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,i){const r=this.calculateOffsetRenderUnits(i);return this.featureExpressionInfoContext!=null?r:e+r}calculateOffsetRenderUnits(e){let i=this._meterUnitOffset;const r=this.featureExpressionInfoContext;return r!=null&&(i+=Xr(r)*this._metersPerElevationInfoUnit),i/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=oi(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,i,r){if(e==null)return void(this._featureExpressionInfoContext=null);const n=e==null?void 0:e.arcade;n&&i!=null&&r!=null?(this._featureExpressionInfoContext=Gr(e),Yr(this._featureExpressionInfoContext,Zr(n.modules,i,r))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const i=new Mt;return e!=null&&i.setFromElevationInfo(e),i}}const Qr=Object.freeze(Object.defineProperty({__proto__:null,build:Nt,ribbonlineNumRoundJoinSubdivisions:ve},Symbol.toStringTag,{value:"Module"}));export{or as A,En as B,Ce as C,j as D,zr as E,Ln as F,Ee as G,Br as R,xr as W,xn as _,mt as a,ft as b,Nn as c,Un as d,ut as e,jt as f,zn as g,Je as h,Pn as i,pr as j,$n as k,Yr as l,In as m,ie as n,Mt as o,wn as p,te as q,Cn as r,Zr as s,St as t,Dn as u,ur as v,Er as w,me as x,wt as y,br as z};
