import{n as N}from"./glsl-BH37Aalp.js";import{aG as C,oF as Fe,oG as Ue,nI as Ge,oH as Ee,cn as je,b1 as He,oI as Le,oJ as _e,aH as Be,iX as ke,oK as qe,oL as Xe,oM as Ze,ee as Je,oN as Ye,oO as Ke,oP as Qe,fJ as j,bc as B,be as z,jB as We,f_ as ie,g4 as et,aJ as Ae,aI as tt,fK as F,fL as V,bb as Ie,bg as ee}from"./index-BFudLC3v.js";import{t as nt}from"./doublePrecisionUtils-B0owpBza.js";import{s as ot,a as st,c as at,o as Te,e as rt,g as Oe,h as lt,p as it,w as ct,i as ut,j as ft,k as ht,n as G,f as E,l as Re,m as Pe}from"./Geometry-BOtVLlBA.js";import{e as x}from"./VertexAttribute-Cq4MnHjR.js";import{e as pt}from"./mat4f64-Dk4dwAN8.js";import{u as dt}from"./meshVertexSpaceUtils-DPDdFFVl.js";import{e as xe}from"./projectVectorToVector-DCSZNnBl.js";import{o as mt,x as wt}from"./hydratedFeatures-Bq-VVFmF.js";import{r as T,n as U,t as Me}from"./vec3f32-nZdmKIgz.js";import{w as Ce,o as gt}from"./Indices-Dp1bw9et.js";import{M as Ot,l as vt,x as xt}from"./plane-u5CEEXtR.js";import{k as yt}from"./sphere-D-pbN5cj.js";import{t as b}from"./orientedBoundingBox-kCoBq_qJ.js";import{s as te}from"./InterleavedLayout-DaT5bMFb.js";function tn(e){e.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function nn(e,n){return e==null&&(e=[]),e.push(n),e}function on(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function sn(e,n,o,t,s){oe[0]=e.get(n,0),oe[1]=e.get(n,1),oe[2]=e.get(n,2),nt(oe,k,3),o.set(s,0,k[0]),t.set(s,0,k[1]),o.set(s,1,k[2]),t.set(s,1,k[3]),o.set(s,2,k[4]),t.set(s,2,k[5])}const oe=C(),k=new Float32Array(6),At=.5;function an(e,n){e.include(ot),e.attributes.add(x.POSITION,"vec3"),e.attributes.add(x.NORMAL,"vec3"),e.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;st(o,n),at(o,n),o.uniforms.add(new Te("viewport",t=>t.camera.fullViewport),new rt("polygonOffset",t=>t.shaderPolygonOffset),new Oe("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&lt(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||it(o),n.draped||(o.uniforms.add(new Oe("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(At)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&ct(o),n.hasScreenSizePerspective&&ut(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Pt(e){e.uniforms.add(new ft("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ce;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ce||(ce={}));function rn(e){e.vertex.uniforms.add(new Oe("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ce.Occluded?1:n.hudRenderStyle===ce.NotOccluded?0:.75),new Te("viewport",n=>n.camera.fullViewport),new ht("hudVisibilityTexture",n=>{var o;return(o=n.hudVisibility)==null?void 0:o.getTexture()})),e.vertex.include(Pt),e.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function ln(e,n){if(e.type==="point")return _(e,n,!1);if(mt(e))switch(e.type){case"extent":return _(e.center,n,!1);case"polygon":return _(e.centroid,n,!1);case"polyline":return _($e(e),n,!0);case"mesh":return _(dt(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return _(Mt(e),n,!0);case"polygon":return _($t(e),n,!0);case"polyline":return _($e(e),n,!0);case"multipoint":return}}function $e(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=Fe(n,Ue(n)/2);return xe(o[0],o[1],o[2],e.spatialReference)}function Mt(e){return xe(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function $t(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=Ge(e.rings,!!e.hasZ);return xe(o[0],o[1],o[2],e.spatialReference)}function _(e,n,o){const t=o?e:wt(e);return n&&e?Ee(e,t,n)?t:null:t}function cn(e,n,o,t=0){if(e){n||(n=je());const s=e;let f=.5*s.width*(o-1),a=.5*s.height*(o-1);return s.width<1e-7*s.height?f+=a/20:s.height<1e-7*s.width&&(a+=f/20),He(n,s.xmin-f-t,s.ymin-a-t,s.xmax+f+t,s.ymax+a+t),n}return null}function un(e,n,o=null){const t=Le(_e);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function fn(e=ke,n,o,t=1){const s=new Array(3);if(n==null||o==null)s[0]=1,s[1]=1,s[2]=1;else{let f,a=0;for(let l=2;l>=0;l--){const c=e[l],r=c!=null,i=l===0&&!f&&!r,p=o[l];let y;c==="symbol-value"||i?y=p!==0?n[l]/p:1:r&&c!=="proportional"&&isFinite(c)&&(y=p!==0?c/p:1),y!=null&&(s[l]=y,f=y,a=Math.max(a,Math.abs(y)))}for(let l=2;l>=0;l--)s[l]==null?s[l]=f:s[l]===0&&(s[l]=.001*a)}for(let f=2;f>=0;f--)s[f]/=t;return Be(s)}function bt(e){return e.isPrimitive!=null}function hn(e){return St(bt(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function St(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function pn(e,n,o,t=pt()){return e&&qe(t,t,-e/180*Math.PI),n&&Xe(t,t,n/180*Math.PI),o&&Ze(t,t,o/180*Math.PI),t}function dn(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=Je(n),s=Ye(e)*t,f=Ke(e)*t,a=Qe(e)*(n.isGeographic?1:t);return s===0&&f===0&&a===0?o.minDemResolutionForPoints:.01*Math.max(s,f,a)}var ve;(function(e){function n(a,l){const c=a[l],r=a[l+1],i=a[l+2];return Math.sqrt(c*c+r*r+i*i)}function o(a,l){const c=a[l],r=a[l+1],i=a[l+2],p=1/Math.sqrt(c*c+r*r+i*i);a[l]*=p,a[l+1]*=p,a[l+2]*=p}function t(a,l,c){a[l]*=c,a[l+1]*=c,a[l+2]*=c}function s(a,l,c,r,i,p=l){(i=i||a)[p]=a[l]+c[r],i[p+1]=a[l+1]+c[r+1],i[p+2]=a[l+2]+c[r+2]}function f(a,l,c,r,i,p=l){(i=i||a)[p]=a[l]-c[r],i[p+1]=a[l+1]-c[r+1],i[p+2]=a[l+2]-c[r+2]}e.length=n,e.normalize=o,e.scale=t,e.add=s,e.subtract=f})(ve||(ve={}));const X=ve,de=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],It=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Tt=[0,0,1,0,1,1,0,1],Rt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ne=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ne[6*e+n]=e;const q=new Array(36);for(let e=0;e<6;e++)q[6*e]=0,q[6*e+1]=1,q[6*e+2]=2,q[6*e+3]=2,q[6*e+4]=3,q[6*e+5]=0;function mn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=de[t][0]*n[0],o[3*t+1]=de[t][1]*n[1],o[3*t+2]=de[t][2]*n[2];return new E(e,[[x.POSITION,new b(o,Rt,3,!0)],[x.NORMAL,new b(It,Ne,3)],[x.UV0,new b(Tt,q,2)]])}const me=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ct=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Nt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function wn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=me[t][0]*n[0],o[3*t+1]=me[t][1]*n[1],o[3*t+2]=me[t][2]*n[2];return new E(e,[[x.POSITION,new b(o,Nt,3,!0)],[x.NORMAL,new b(Ct,zt,3)]])}const se=T(-.5,0,-.5),ae=T(.5,0,-.5),re=T(0,0,.5),le=T(0,.5,0),Z=U(),J=U(),K=U(),Q=U(),W=U();j(Z,se,le),j(J,se,ae),B(K,Z,J),z(K,K),j(Z,ae,le),j(J,ae,re),B(Q,Z,J),z(Q,Q),j(Z,re,le),j(J,re,se),B(W,Z,J),z(W,W);const we=[se,ae,re,le],Dt=[0,-1,0,K[0],K[1],K[2],Q[0],Q[1],Q[2],W[0],W[1],W[2]],Vt=[0,1,2,3,1,0,3,2,1,3,0,2],Ft=[0,0,0,1,1,1,2,2,2,3,3,3];function gn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=we[t][0]*n[0],o[3*t+1]=we[t][1]*n[1],o[3*t+2]=we[t][2]*n[2];return new E(e,[[x.POSITION,new b(o,Vt,3,!0)],[x.NORMAL,new b(Dt,Ft,3)]])}function On(e,n,o,t,s={uv:!0}){const f=-Math.PI,a=2*Math.PI,l=-Math.PI/2,c=Math.PI,r=Math.max(3,Math.floor(o)),i=Math.max(2,Math.floor(t)),p=(r+1)*(i+1),y=G(3*p),P=G(3*p),A=G(2*p),g=[];let h=0;for(let w=0;w<=i;w++){const I=[],u=w/i,M=l+u*c,$=Math.cos(M);for(let R=0;R<=r;R++){const H=R/r,O=f+H*a,D=Math.cos(O)*$,S=Math.sin(M),ne=-Math.sin(O)*$;y[3*h]=D*n,y[3*h+1]=S*n,y[3*h+2]=ne*n,P[3*h]=D,P[3*h+1]=S,P[3*h+2]=ne,A[2*h]=H,A[2*h+1]=u,I.push(h),++h}g.push(I)}const m=new Array;for(let w=0;w<i;w++)for(let I=0;I<r;I++){const u=g[w][I],M=g[w][I+1],$=g[w+1][I+1],R=g[w+1][I];w===0?(m.push(u),m.push($),m.push(R)):w===i-1?(m.push(u),m.push(M),m.push($)):(m.push(u),m.push(M),m.push($),m.push($),m.push(R),m.push(u))}const d=[[x.POSITION,new b(y,m,3,!0)],[x.NORMAL,new b(P,m,3,!0)]];return s.uv&&d.push([x.UV0,new b(A,m,2,!0)]),s.offset&&(d[0][0]=x.OFFSET,d.push([x.POSITION,new b(Float64Array.from(s.offset),Ce(m.length),3,!0)])),new E(e,d)}function vn(e,n,o,t){const s=Ut(n,o);return new E(e,s)}function Ut(e,n,o){let t,s;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],s=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)X.scale(t,c,e/X.length(t,c));let f={};function a(c,r){c>r&&([c,r]=[r,c]);const i=c.toString()+"."+r.toString();if(f[i])return f[i];let p=t.length;return t.length+=3,X.add(t,3*c,t,3*r,t,p),X.scale(t,p,e/X.length(t,p)),p/=3,f[i]=p,p}for(let c=0;c<n;c++){const r=s.length,i=new Array(4*r);for(let p=0;p<r;p+=3){const y=s[p],P=s[p+1],A=s[p+2],g=a(y,P),h=a(P,A),m=a(A,y),d=4*p;i[d]=y,i[d+1]=g,i[d+2]=m,i[d+3]=P,i[d+4]=h,i[d+5]=g,i[d+6]=A,i[d+7]=m,i[d+8]=h,i[d+9]=g,i[d+10]=h,i[d+11]=m}s=i,f={}}const l=Pe(t);for(let c=0;c<l.length;c+=3)X.normalize(l,c);return[[x.POSITION,new b(Pe(t),s,3,!0)],[x.NORMAL,new b(l,s,3,!0)]]}function xn(e,n={}){const{normal:o,position:t,color:s,rotation:f,size:a,centerOffsetAndDistance:l,uvs:c,featureAttribute:r,objectAndLayerIdColor:i=null}=n,p=t?Ae(t):C(),y=o?Ae(o):tt(0,0,1),P=s?[255*s[0],255*s[1],255*s[2],s.length>3?255*s[3]:255]:[255,255,255,255],A=a!=null&&a.length===2?a:[1,1],g=f!=null?[f]:[0],h=Ce(1),m=[[x.POSITION,new b(p,h,3,!0)],[x.NORMAL,new b(y,h,3,!0)],[x.COLOR,new b(P,h,4,!0)],[x.SIZE,new b(A,h,2)],[x.ROTATION,new b(g,h,1,!0)]];if(c&&m.push([x.UV0,new b(c,h,c.length)]),l!=null){const d=[l[0],l[1],l[2],l[3]];m.push([x.CENTEROFFSETANDDISTANCE,new b(d,h,4)])}if(r){const d=[r[0],r[1],r[2],r[3]];m.push([x.FEATUREATTRIBUTE,new b(d,h,4)])}return new E(e,m,null,Re.Point,i)}function Gt(e,n,o,t,s=!0,f=!0){let a=0;const l=n,c=e;let r=T(0,a,0),i=T(0,a+c,0),p=T(0,-1,0),y=T(0,1,0);t&&(a=c,i=T(0,0,0),r=T(0,a,0),p=T(0,1,0),y=T(0,-1,0));const P=[i,r],A=[p,y],g=o+2,h=Math.sqrt(c*c+l*l);if(t)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),$=T(Math.cos(M)*l,a,Math.sin(M)*l);P.push($);const R=T(c*Math.cos(M)/h,-l/h,c*Math.sin(M)/h);A.push(R)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),$=T(Math.cos(M)*l,a,Math.sin(M)*l);P.push($);const R=T(c*Math.cos(M)/h,l/h,c*Math.sin(M)/h);A.push(R)}const m=new Array,d=new Array;if(s){for(let u=3;u<P.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(P.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<P.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(P.length-1),d.push(1),d.push(2),d.push(A.length-1)}const w=G(3*g);for(let u=0;u<g;u++)w[3*u]=P[u][0],w[3*u+1]=P[u][1],w[3*u+2]=P[u][2];const I=G(3*g);for(let u=0;u<g;u++)I[3*u]=A[u][0],I[3*u+1]=A[u][1],I[3*u+2]=A[u][2];return[[x.POSITION,new b(w,m,3,!0)],[x.NORMAL,new b(I,d,3,!0)]]}function yn(e,n,o,t,s,f=!0,a=!0){return new E(e,Gt(n,o,t,s,f,a))}function An(e,n,o,t,s,f,a){const l=s?Me(s):T(1,0,0),c=f?Me(f):T(0,0,0);a??(a=!0);const r=U();z(r,l);const i=U();F(i,r,Math.abs(n));const p=U();F(p,i,-.5),V(p,p,c);const y=T(0,1,0);Math.abs(1-Ie(r,y))<.2&&ie(y,0,0,1);const P=U();B(P,r,y),z(P,P),B(y,P,r);const A=2*t+(a?2:0),g=t+(a?2:0),h=G(3*A),m=G(3*g),d=G(2*A),w=new Array(3*t*(a?4:2)),I=new Array(3*t*(a?4:2));a&&(h[3*(A-2)]=p[0],h[3*(A-2)+1]=p[1],h[3*(A-2)+2]=p[2],d[2*(A-2)]=0,d[2*(A-2)+1]=0,h[3*(A-1)]=h[3*(A-2)]+i[0],h[3*(A-1)+1]=h[3*(A-2)+1]+i[1],h[3*(A-1)+2]=h[3*(A-2)+2]+i[2],d[2*(A-1)]=1,d[2*(A-1)+1]=1,m[3*(g-2)]=-r[0],m[3*(g-2)+1]=-r[1],m[3*(g-2)+2]=-r[2],m[3*(g-1)]=r[0],m[3*(g-1)+1]=r[1],m[3*(g-1)+2]=r[2]);const u=(O,D,S)=>{w[O]=D,I[O]=S};let M=0;const $=U(),R=U();for(let O=0;O<t;O++){const D=O*(2*Math.PI/t);F($,y,Math.sin(D)),F(R,P,Math.cos(D)),V($,$,R),m[3*O]=$[0],m[3*O+1]=$[1],m[3*O+2]=$[2],F($,$,o),V($,$,p),h[3*O]=$[0],h[3*O+1]=$[1],h[3*O+2]=$[2],d[2*O]=O/t,d[2*O+1]=0,h[3*(O+t)]=h[3*O]+i[0],h[3*(O+t)+1]=h[3*O+1]+i[1],h[3*(O+t)+2]=h[3*O+2]+i[2],d[2*(O+t)]=O/t,d[2*O+1]=1;const S=(O+1)%t;u(M++,O,O),u(M++,O+t,O),u(M++,S,S),u(M++,S,S),u(M++,O+t,O),u(M++,S+t,S)}if(a){for(let O=0;O<t;O++){const D=(O+1)%t;u(M++,A-2,g-2),u(M++,O,g-2),u(M++,D,g-2)}for(let O=0;O<t;O++){const D=(O+1)%t;u(M++,O+t,g-1),u(M++,A-1,g-1),u(M++,D+t,g-1)}}const H=[[x.POSITION,new b(h,w,3,!0)],[x.NORMAL,new b(m,I,3,!0)],[x.UV0,new b(d,w,2,!0)]];return new E(e,H)}function Pn(e,n,o,t,s,f){t=t||10,s=s==null||s,te(n.length>1);const a=[[0,0,0]],l=[],c=[];for(let r=0;r<t;r++){l.push([0,-r-1,-(r+1)%t-1]);const i=r/t*2*Math.PI;c.push([Math.cos(i)*o,Math.sin(i)*o])}return Et(e,c,n,a,l,s,f)}function Et(e,n,o,t,s,f,a=T(0,0,0)){const l=n.length,c=G(o.length*l*3+(6*t.length||0)),r=G(o.length*l*3+(t?6:0)),i=new Array,p=new Array;let y=0,P=0;const A=C(),g=C(),h=C(),m=C(),d=C(),w=C(),I=C(),u=C(),M=C(),$=C(),R=C(),H=C(),O=C(),D=Ot();ie(M,0,1,0),j(g,o[1],o[0]),z(g,g),f?(V(u,o[0],a),z(h,u)):ie(h,0,0,1),be(g,h,M,M,d,h,Se),ee(m,h),ee(H,d);for(let v=0;v<t.length;v++)F(w,d,t[v][0]),F(u,h,t[v][2]),V(w,w,u),V(w,w,o[0]),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2];r[P++]=-g[0],r[P++]=-g[1],r[P++]=-g[2];for(let v=0;v<s.length;v++)i.push(s[v][0]>0?s[v][0]:-s[v][0]-1+t.length),i.push(s[v][1]>0?s[v][1]:-s[v][1]-1+t.length),i.push(s[v][2]>0?s[v][2]:-s[v][2]-1+t.length),p.push(0),p.push(0),p.push(0);let S=t.length;const ne=t.length-1;for(let v=0;v<o.length;v++){let ye=!1;v>0&&(ee(A,g),v<o.length-1?(j(g,o[v+1],o[v]),z(g,g)):ye=!0,V($,A,g),z($,$),V(R,o[v-1],m),vt(o[v],$,D),xt(D,yt(R,A),u)?(j(u,u,o[v]),z(h,u),B(d,$,h),z(d,d)):be($,m,H,M,d,h,Se),ee(m,h),ee(H,d)),f&&(V(u,o[v],a),z(O,u));for(let L=0;L<l;L++)if(F(w,d,n[L][0]),F(u,h,n[L][1]),V(w,w,u),z(I,w),r[P++]=I[0],r[P++]=I[1],r[P++]=I[2],V(w,w,o[v]),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2],!ye){const he=(L+1)%l;i.push(S+L),i.push(S+l+L),i.push(S+he),i.push(S+he),i.push(S+l+L),i.push(S+l+he);for(let pe=0;pe<6;pe++){const Ve=i.length-6;p.push(i[Ve+pe]-ne)}}S+=l}const ze=o[o.length-1];for(let v=0;v<t.length;v++)F(w,d,t[v][0]),F(u,h,t[v][1]),V(w,w,u),V(w,w,ze),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2];const ue=P/3;r[P++]=g[0],r[P++]=g[1],r[P++]=g[2];const fe=S-l;for(let v=0;v<s.length;v++)i.push(s[v][0]>=0?S+s[v][0]:-s[v][0]-1+fe),i.push(s[v][2]>=0?S+s[v][2]:-s[v][2]-1+fe),i.push(s[v][1]>=0?S+s[v][1]:-s[v][1]-1+fe),p.push(ue),p.push(ue),p.push(ue);const De=[[x.POSITION,new b(c,i,3,!0)],[x.NORMAL,new b(r,p,3,!0)]];return new E(e,De)}function Mn(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const s=We(3*n.length),f=new Array(2*(n.length-1));let a=0,l=0;for(let r=0;r<n.length;r++){for(let i=0;i<3;i++)s[a++]=n[r][i];r>0&&(f[l++]=r-1,f[l++]=r)}const c=[[x.POSITION,new b(s,f,3,!0)]];if(o){const r=G(3*o.length);let i=0;for(let p=0;p<n.length;p++)for(let y=0;y<3;y++)r[i++]=o[p][y];c.push([x.NORMAL,new b(r,f,3,!0)])}return t&&c.push([x.COLOR,new b(t,gt(t.length/4),4)]),new E(e,c,null,Re.Line)}function $n(e,n,o,t,s,f=0){const a=new Array(18),l=[[-o,f,s/2],[t,f,s/2],[0,n+f,s/2],[-o,f,-s/2],[t,f,-s/2],[0,n+f,-s/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let r=0;r<6;r++)a[3*r]=l[r][0],a[3*r+1]=l[r][1],a[3*r+2]=l[r][2];return new E(e,[[x.POSITION,new b(a,c,3,!0)]])}function bn(e,n){const o=e.getMutableAttribute(x.POSITION).data;for(let t=0;t<o.length;t+=3){const s=o[t],f=o[t+1],a=o[t+2];ie(Y,s,f,a),et(Y,Y,n),o[t]=Y[0],o[t+1]=Y[1],o[t+2]=Y[2]}}function Sn(e,n=e){const o=e.attributes,t=o.get(x.POSITION).data,s=o.get(x.NORMAL).data;if(s){const f=n.getMutableAttribute(x.NORMAL).data;for(let a=0;a<s.length;a+=3){const l=s[a+1];f[a+1]=-s[a+2],f[a+2]=l}}if(t){const f=n.getMutableAttribute(x.POSITION).data;for(let a=0;a<t.length;a+=3){const l=t[a+1];f[a+1]=-t[a+2],f[a+2]=l}}}function ge(e,n,o,t,s){return!(Math.abs(Ie(n,e))>s)&&(B(o,e,n),z(o,o),B(t,o,e),z(t,t),!0)}function be(e,n,o,t,s,f,a){return ge(e,n,s,f,a)||ge(e,o,s,f,a)||ge(e,t,s,f,a)}const Se=.99619469809,Y=C();function In(e){return e.type==="point"}export{un as A,wn as B,fn as D,dn as E,mn as F,be as M,bn as O,cn as S,hn as U,St as Z,In as a,ce as b,Gt as c,At as d,nn as e,gn as f,An as g,yn as h,ln as i,sn as j,xn as k,Pt as l,Sn as m,rn as n,pn as o,On as p,$n as q,on as r,vn as s,tn as t,an as u,Pn as v,Mn as w,Et as x};
