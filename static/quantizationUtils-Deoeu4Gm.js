import"./index-DKbcOXvO.js";function G(t){return t?{originPosition:t.originPosition==="upper-left"?"upperLeft":t.originPosition==="lower-left"?"lowerLeft":t.originPosition,scale:t.tolerance?[t.tolerance,t.tolerance,1,1]:[1,1,1,1],translate:t.extent!=null?[t.extent.xmin,t.extent.ymax,t.extent.zmin??0,t.extent.mmin??0]:[0,0,0,0]}:null}function k(t){return t.originPosition==="lowerLeft"&&t.scale.length===4&&t.translate.length===4}function m(t){if(k(t))return t;const{originPosition:r,scale:n,translate:s}=t,l=n[0]??1,o=n[1]??1;return{originPosition:"lowerLeft",scale:[l,r==="lowerLeft"?o:-o,n[2]??1,n[3]??1],translate:[s[0]??0,s[1]??0,s[2]??0,s[3]??0]}}function p({scale:t,translate:r},n){return Math.round((n-r[0])/t[0])}function M({scale:t,translate:r},n){return Math.round((n-r[1])/t[1])}function w({scale:t,translate:r},n){return Math.round(((n??0)-r[2])/t[2])}function Z({scale:t,translate:r},n){return n?Math.round((n-r[3])/t[3]):0}function b(t,r){return t&&r?E:t&&!r?C:!t&&r?D:B}const B=(t,r)=>{const n=[];if(!r.length)return null;const s=r[0];let l=p(t,s[0]),o=M(t,s[1]);n.push([l,o]);for(let u=1;u<r.length;u++){const[e,c]=r[u],a=p(t,e),i=M(t,c);a===l&&i===o||n.push([a-l,i-o]),l=a,o=i}return n},C=(t,r)=>{const n=[];if(!r.length)return null;const s=r[0];let l=p(t,s[0]),o=M(t,s[1]),u=w(t,s[2]);n.push([l,o,u]);for(let e=1;e<r.length;e++){const[c,a,i]=r[e],h=p(t,c),f=M(t,a),g=w(t,i);h===l&&f===o&&g===u||n.push([h-l,f-o,g]),l=h,o=f,u=g}return n},D=(t,r)=>{const n=[];if(!r.length)return null;const s=r[0];let l=p(t,s[0]),o=M(t,s[1]),u=Z(t,s[2]);n.push([l,o,u]);for(let e=1;e<r.length;e++){const[c,a,i]=r[e],h=p(t,c),f=M(t,a),g=Z(t,i);h===l&&f===o&&g===u||n.push([h-l,f-o,g]),l=h,o=f,u=g}return n},E=(t,r)=>{const n=[];if(!r.length)return null;const s=r[0];let l=p(t,s[0]),o=M(t,s[1]),u=w(t,s[2]),e=Z(t,s[3]);n.push([l,o,u,e]);for(let c=1;c<r.length;c++){const[a,i,h,f]=r[c],g=p(t,a),x=M(t,i),A=w(t,h),d=Z(t,f);g===l&&x===o&&A===u&&d===e||n.push([g-l,x-o,A,d]),l=g,o=x,u=A,e=d}return n};function H(t,r,n,s){const l=[],o=b(n,s);for(let u=0;u<r.length;u++){const e=o(t,r[u]);e&&e.length>=3&&l.push(e)}return l.length?l:null}function I(t,r,n,s){const l=[],o=b(n,s);for(let u=0;u<r.length;u++){const e=o(t,r[u]);e&&e.length>=2&&l.push(e)}return l.length?l:null}function L({scale:t,translate:r},n){return n*t[0]+r[0]}function z({scale:t,translate:r},n){return n*t[1]+r[1]}function P({scale:t,translate:r},n){return(n??0)*t[2]+r[2]}function y({scale:t,translate:r},n){return n?n*t[3]+r[3]:0}function N(t,r){return t&&r?v:t&&!r?U:!t&&r?q:T}const T=(t,r)=>{const n=new Array(r.length);if(!r.length)return n;const s=r[0];let l=L(t,s[0]),o=z(t,s[1]);n[0]=[l,o];const{scale:u,originPosition:e}=t,c=u[0],a=e==="lowerLeft"?u[1]:-u[1];for(let i=1;i<r.length;i++){const[h,f]=r[i];l+=c*h,o+=a*f,n[i]=[l,o]}return n},U=(t,r)=>{const n=new Array(r.length);if(!r.length)return n;const s=r[0];let l=L(t,s[0]),o=z(t,s[1]);n[0]=[l,o,P(t,s[2])];const{scale:u,originPosition:e}=t,c=u[0],a=e==="lowerLeft"?u[1]:-u[1];for(let i=1;i<r.length;i++){const[h,f,g]=r[i];l+=c*h,o+=a*f,n[i]=[l,o,P(t,g)]}return n},q=(t,r)=>{const n=new Array(r.length);if(!r.length)return n;const s=r[0];let l=L(t,s[0]),o=z(t,s[1]);n[0]=[l,o,y(t,s[2])];const{scale:u,originPosition:e}=t,c=u[0],a=e==="lowerLeft"?u[1]:-u[1];for(let i=1;i<r.length;i++){const[h,f,g]=r[i];l+=c*h,o+=a*f,n[i]=[l,o,y(t,g)]}return n},v=(t,r)=>{const n=new Array(r.length);if(!r.length)return n;const s=r[0];let l=L(t,s[0]),o=z(t,s[1]);n[0]=[l,o,P(t,s[2]),y(t,s[3])];const{scale:u,originPosition:e}=t,c=u[0],a=e==="lowerLeft"?u[1]:-u[1];for(let i=1;i<r.length;i++){const[h,f,g,x]=r[i];l+=c*h,o+=a*f,n[i]=[l,o,P(t,g),y(t,x)]}return n};function j(t,r,n){const s=new Array(n.length);for(let l=0;l<n.length;l++)s[l]=r(t,n[l]);return s}function J(t,r,n){const s=m(t);return r.x=p(s,n.x),r.y=M(s,n.y),n.z!=null&&(r.z=w(s,n.z)),n.m!=null&&(r.m=Z(s,n.m)),r}function K(t,r,n){const s=H(m(t),n.rings,n.hasZ,n.hasM);return s?(r.rings=s,r.hasZ=n.hasZ??!1,r.hasM=n.hasM??!1,r):null}function O(t,r,n){const s=I(m(t),n.paths,n.hasZ,n.hasM);return s?(r.paths=s,r.hasZ=n.hasZ??!1,r.hasM=n.hasM??!1,r):null}function Q(t,r,n,s=(n==null?void 0:n.hasZ)??!1,l=(n==null?void 0:n.hasM)??!1){if(n!=null){const o=m(t);r.points=N(s,l)(o,n.points),r.hasZ=s,r.hasM=l}return r}function R(t,r,n,s=(n==null?void 0:n.z)!=null,l=(n==null?void 0:n.m)!=null){if(n==null)return r;const o=m(t);return r.x=L(o,n.x),r.y=z(o,n.y),s&&(r.z=P(o,n.z)),l&&(r.m=y(o,n.m)),r}function S(t,r,n,s=(n==null?void 0:n.hasZ)??!1,l=(n==null?void 0:n.hasM)??!1){if(n!=null){const o=m(t);r.rings=j(o,N(s,l),n.rings),r.hasZ=s,r.hasM=l}return r}function V(t,r,n,s=(n==null?void 0:n.hasZ)??!1,l=(n==null?void 0:n.hasM)??!1){if(n!=null){const o=m(t);r.paths=j(o,N(s,l),n.paths),r.hasZ=s,r.hasM=l}return r}export{Q as B,R as C,S as D,V as H,K as U,M as a,p as i,J as j,O as k,G as s,m as u};
