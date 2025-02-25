import{c as v}from"./arcade-BfFnI3OG.js";import{a as o,r as c}from"./executionError-DhMmVYP7.js";import{o as d,H as m,E as b,y,B as u,O as p,k as T,j as f,l as A,p as g,$ as x,D,q as j,u as F,K as O,w}from"./languageUtils-Dw31acRB.js";import"./index-DKbcOXvO.js";import"./TimeOnly-D9V4gdT1.js";import"./WhereClause-CwBWhUUt.js";import"./unitConversion-CzRBBR1u.js";import"./number-BXlzBnh7.js";function l(t,e){return t&&t.domain?t.domain.type==="coded-value"||t.domain.type==="codedValue"?v.convertObjectToArcadeDictionary({type:"codedValue",name:t.domain.name,dataType:w[t.field.type],codedValues:t.domain.codedValues.map(a=>({name:a.name,code:a.code}))},f(e)):v.convertObjectToArcadeDictionary({type:"range",name:t.domain.name,dataType:w[t.field.type],min:t.domain.minValue,max:t.domain.maxValue},f(e)):null}function H(t){t.mode==="async"&&(t.functions.domain=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,2,3,e,a),m(n[0]))return l(b(n[0],y(n[1]),n[2]===void 0?void 0:n[2]),e);if(u(n[0]))return await n[0]._ensureLoaded(),l(p(y(n[1]),n[0],null,n[2]===void 0?void 0:n[2]),e);throw new o(e,c.InvalidParameter,a)})},t.functions.subtypes=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,1,1,e,a),m(n[0])){const r=T(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}if(u(n[0])){await n[0]._ensureLoaded();const r=n[0].subtypeMetaData();return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new o(e,c.InvalidParameter,a)})},t.functions.domainname=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,2,4,e,a),m(n[0]))return A(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(u(n[0])){await n[0]._ensureLoaded();const r=p(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return g(r,n[2])}throw new o(e,c.InvalidParameter,a)})},t.signatures.push({name:"domainname",min:2,max:4}),t.functions.domaincode=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,2,4,e,a),m(n[0]))return x(n[0],y(n[1]),n[2],n[3]===void 0?void 0:n[3]);if(u(n[0])){await n[0]._ensureLoaded();const r=p(y(n[1]),n[0],null,n[3]===void 0?void 0:n[3]);return D(r,n[2])}throw new o(e,c.InvalidParameter,a)})},t.signatures.push({name:"domaincode",min:2,max:4}),t.functions.text=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,1,2,e,a),u(n[0])){const r=j(n[1],"");if(r==="")return n[0].castToText();if(r.toLowerCase()==="schema")return n[0].convertToText("schema",i.abortSignal);if(r.toLowerCase()==="featureset")return n[0].convertToText("featureset",i.abortSignal);throw new o(e,c.InvalidParameter,a)}return F(n[0],n[1])})},t.functions.gdbversion=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,1,1,e,a),m(n[0]))return n[0].gdbVersion();if(u(n[0]))return(await n[0].load()).gdbVersion;throw new o(e,c.InvalidParameter,a)})},t.functions.schema=function(e,a){return t.standardFunctionAsync(e,a,async(i,s,n)=>{if(d(n,1,1,e,a),u(n[0]))return await n[0].load(),v.convertObjectToArcadeDictionary(n[0].schema(),f(e));if(m(n[0])){const r=O(n[0]);return r?v.convertObjectToArcadeDictionary(r,f(e)):null}throw new o(e,c.InvalidParameter,a)})})}export{H as registerFunctions};
