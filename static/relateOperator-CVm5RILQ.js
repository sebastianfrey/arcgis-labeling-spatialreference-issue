import{aI as f,aJ as y,aK as d,aL as _}from"./ProjectionTransformation-35JUtHir.js";import{getSpatialReference as b,fromGeometry as n,fromSpatialReference as s}from"./apiConverter-Dad-RcA5.js";import"./Transformation2D-DUa_jsnY.js";import"./index-DKbcOXvO.js";import"./jsonConverter-DxrSAG4j.js";class g{supportsCurves(){return!0}getOperatorType(){return 1}execute(e,t,a,i,m){return f(e,t,a,i,m)}isValidDE9IM(e){return y(e)===0}accelerateGeometry(e,t,a){return d(e,t,a)}canAccelerateGeometry(e){return _(e)}}const o=new g;function u(r){const e=b(r);return o.accelerateGeometry(n(r),s(e),1)}function c(r,e,t){return o.execute(n(r),n(e),s(r.spatialReference),t,null)}function l(r){return o.isValidDE9IM(r)}const p=o.supportsCurves(),S=Object.freeze(Object.defineProperty({__proto__:null,accelerateGeometry:u,execute:c,isValidDE9IM:l,supportsCurves:p},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,accelerateGeometry:u,execute:c,isValidDE9IM:l,supportsCurves:p},Symbol.toStringTag,{value:"Module"}));export{S as f,j as r};
