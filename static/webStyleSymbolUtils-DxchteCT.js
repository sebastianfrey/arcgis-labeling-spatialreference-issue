import{c as A,a as S}from"./devEnvironmentUtils-CnNDiFMM.js";import{b as u,d2 as C,P as $,K as c,d3 as w,d4 as D,d5 as P,d6 as v,d7 as F,d8 as K,d9 as N,da as U,db as M,dc as R}from"./index-DKbcOXvO.js";import{e as W}from"./webStyleAcceptedFormats-CG7ZQ6BV.js";function J(t,e,a){const l=t.name;return l==null?Promise.reject(new u("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName==="Esri2DPointSymbolsStyle"?z(l,e,a):C(t,e,a).then(n=>q(n,l,e,R,a))}function k(t,e){return e.items.find(a=>a.name===t)}async function q(t,e,a,l,n){var f,h;const s=(a==null?void 0:a.portal)!=null?a.portal:$.getDefault(),r={portal:s,url:c(t.baseUrl),origin:"portal-item"},m=k(e,t.data);if(!m)throw new u("symbolstyleutils:symbol-name-not-found",`The symbol name '${e}' could not be found`,{symbolName:e});const b=(n==null?void 0:n.acceptedFormats)??W,p=l(m,b);if(!p)throw new u("symbolstyleutils:symbol-reference-no-accepted-format",`The symbol name '${e}' does not have an accepted format (one of ${b})`,{symbolName:e});const{url:O,format:T}=p;let i=w(O,r),y=((f=m.thumbnail)==null?void 0:f.href)??null;const d=(h=m.thumbnail)==null?void 0:h.imageData;A()&&(i=S(i)??"",y=S(y));const E={portal:s,url:c(D(i)),origin:"portal-item"};return P(i,n).then(g=>{const I=T==="cim"?v(g.data):g.data,o=F(I,E);if(o&&K(o)){if(y){const x=w(y,r);o.thumbnail=new N({url:x})}else d&&(o.thumbnail=new N({url:`data:image/png;base64,${d}`}));t.styleUrl?o.styleOrigin=new U({portal:a.portal,styleUrl:t.styleUrl,name:e}):t.styleName&&(o.styleOrigin=new U({portal:a.portal,styleName:t.styleName,name:e}))}return o})}function z(t,e,a){const l=M.replaceAll(/\{SymbolName\}/gi,t),n=e.portal!=null?e.portal:$.getDefault();return P(l,a).then(s=>{const r=v(s.data);return F(r,{portal:n,url:c(D(l)),origin:"portal-item"})})}export{q as fetchSymbolFromStyle,k as getStyleItemFromStyle,J as resolveWebStyleSymbol};
