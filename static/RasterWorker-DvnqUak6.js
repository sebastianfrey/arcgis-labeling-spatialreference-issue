import{W as f,bs as u,ap as p,aa as a,aq as S,kY as d}from"./index-DKbcOXvO.js";import{g as i,f as y,W as x,E as h,U as O,D as J,R as N,u as B,s as P}from"./dataUtils-CAg9M2gD.js";import{m as g,j as k,_ as w,h as b}from"./RasterSymbolizer-DwIwhG4b.js";import{T as v}from"./rasterFunctionHelper-BgEDSiiJ.js";import{w as z,j as D,a as T}from"./rasterProjectionHelper-CkVbHPfW.js";import{a as $,c as j,y as F}from"./PolynomialTransform-D3BVYC_D.js";import"./pixelRangeUtils-ouDveaCT.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./colorUtils-BzQn9I3U.js";var m;let l=m=class extends ${constructor(){super(...arguments),this.type="identity"}clone(){return new m}};f([u({IdentityXform:"identity"})],l.prototype,"type",void 0),l=m=f([p("esri.layers.support.rasterTransforms.IdentityTransform")],l);const I=l,E={GCSShiftXform:j,IdentityXform:I,PolynomialXform:F};function G(n){if(!(n==null?void 0:n.type))return null;const e=E[n==null?void 0:n.type];if(e){const s=new e;return s.read(n),s}return null}class V{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=y(e,t.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(t){const e=i.fromJSON(t.pixelBlock),s=g(e);return Promise.resolve(s)}async decode(t){const e=await k(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?a.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(e!=null?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=w.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=v(t.rasterFunctionJSON)}async process(t){var s;const e=this.rasterFunction.process({extent:a.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=t.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?S.fromJSON(o):null),primaryRasterIds:t.primaryRasterIds});return e!=null?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(e==null?void 0:e.toJSON())}estimateStatisticsHistograms(t){const e=b(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=x(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,t.useBilinear===!1);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}clipTile(t){const e=i.fromJSON(t.pixelBlock),s=h({...t,pixelBlock:e});return Promise.resolve(s==null?void 0:s.toJSON())}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(c=>c?new i(c):null),s=O(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=J(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=N(t.destDimension,t.gcsGrid),r=B(r,t.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await P(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=a.fromJSON(t.projectedExtent),s=a.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new d({steps:t.datumTransformationSteps})),(t.includeGCSGrid||z(e.spatialReference,s.spatialReference,o))&&await D();const r=t.rasterTransform?G(t.rasterTransform):null;return T({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{V as default};
