import{bb as s,g0 as x,g2 as y,be as _,bc as A,aG as N,fK as C,lW as J,hZ as K,kS as W,f_ as D,fJ as M,fL as Q,ch as Z,ar as X}from"./index-DKbcOXvO.js";import{e as j}from"./mat3f64-q3fE-ZOt.js";import{e as z}from"./mat4f64-Dk4dwAN8.js";import{e as Y}from"./quatf64-aQ5IuZRd.js";function Nt(t,e,r){const n=s(t,e)/s(t,t);return C(r,t,n)}function v(t,e){return s(t,e)/x(t)}function Et(t,e){const r=s(t,e)/(x(t)*x(e));return-y(r)}function ht(t,e,r){_(b,t),_(d,e);const n=s(b,d),c=y(n),o=A(b,b,d);return s(o,r)<0?2*Math.PI-c:c}const b=N(),d=N();let S=class E{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&J(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new E(K)}static createVec3f64(){return new E(N)}static createVec4f64(){return new E(W)}static createMat3f64(){return new E(j)}static createMat4f64(){return new E(z)}static createQuatf64(){return new E(Y)}get test(){}};const Tt=S.createVec2f64(),f=S.createVec3f64(),B=S.createVec4f64();S.createMat3f64();const _t=S.createMat4f64(),Mt=S.createQuatf64();function St(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],r=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],n=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))}function mt(t,e){const r=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),n=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),c=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return D(t,r,n,c),t}function tt(t,e,r){Math.abs(t[0])>Math.abs(t[1])?D(e,0,1,0):D(e,1,0,0),A(r,t,e),A(e,r,t),_(r,r),_(e,e)}function k(t=g){return[t[0],t[1],t[2],t[3]]}function $t(t=g[0],e=g[1],r=g[2],n=g[3]){return G(t,e,r,n,B.get())}function et(t,e){return G(e[0],e[1],e[2],e[3],t)}function gt(t){return t}function G(t,e,r,n,c=k()){return c[0]=t,c[1]=e,c[2]=r,c[3]=n,c}function rt(t,e,r){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],c=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return r[0]=e[0]*c,r[1]=e[1]*c,r[2]=e[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function nt(t,e,r,n=k()){const c=r[0]-e[0],o=r[1]-e[1],a=r[2]-e[2],i=t[0]-e[0],O=t[1]-e[1],l=t[2]-e[2],m=o*l-a*O,w=a*i-c*l,p=c*O-o*i,V=m*m+w*w+p*p,L=Math.abs(V-1)>1e-5&&V>1e-12?1/Math.sqrt(V):1;return n[0]=m*L,n[1]=w*L,n[2]=p*L,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function H(t,e,r,n=0,c=Math.floor(r*(1/3)),o=Math.floor(r*(2/3))){if(r<3)return!1;e($,n);let a=c,i=!1;for(;a<r-1&&!i;)e(T,a),a++,i=!X($,T);if(!i)return!1;for(a=Math.max(a,o),i=!1;a<r&&!i;)e(h,a),a++,M(P,$,T),_(P,P),M(U,T,h),_(U,U),i=!X($,h)&&!X(T,h)&&Math.abs(s(P,U))<ct;return i?(nt($,T,h,t),!0):(n!==0||c!==1||o!==2)&&H(t,e,r,0,1,2)}function Dt(t,e,r=!0){const n=e.length/3;return H(t,(c,o)=>D(c,e[3*o+0],e[3*o+1],e[3*o+2]),r?n-1:n)}const ct=.99619469809,$=N(),T=N(),h=N(),P=N(),U=N();function Ot(t,e,r){return e!==t&&et(t,e),t[3]=-s(t,r),t}function lt(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function bt(t,e,r,n){return A(h,e,t),rt(r,h,n)}function Pt(t,e,r,n){return R(q(t,e,M(f.get(),r,e),at,n))}function Ut(t,e,r){return e!=null&&R(q(t,e.origin,e.direction,ot,r))}function At(t,e,r){return R(q(t,e.origin,e.vector,I.NONE,r))}function Ct(t,e,r){return R(q(t,e.origin,e.vector,I.CLAMP,r))}function Ft(t,e){return F(t,e)>=0}function Rt(t,e){const r=s(t,e.ray.direction),n=-F(t,e.ray.origin);if(r>-1e-6&&r<1e-6)return n>0;const c=n/r;return r>0?c<e.c1&&(e.c1=c):c>e.c0&&(e.c0=c),e.c0<=e.c1}function qt(t,e,r){const n=C(f.get(),t,-t[3]),c=it(t,M(f.get(),e,n),f.get());return Q(r,c,n),r}function wt(t,e,r,n){const c=t,o=f.get(),a=f.get();tt(c,o,a);const i=M(f.get(),r,e),O=v(o,i),l=v(a,i),m=v(c,i);return D(n,O,l,m)}function it(t,e,r){const n=C(f.get(),t,s(t,e));return M(r,e,n),r}function pt(t,e){return Math.abs(F(t,e))}function F(t,e){return s(t,e)+t[3]}var u;function R(t){return t===u.INTERSECTS_INSIDE_OUT||t===u.INTERSECTS_OUTSIDE_IN}function q(t,e,r,n,c){const o=s(t,r),a=F(t,e);if(o===0)return a>=0?u.INSIDE:u.OUTSIDE;let i=-a/o;return n&I.CLAMP&&(i=Z(i,0,1)),!(n&I.INFINITE_MIN)&&i<0||!(n&I.INFINITE_MAX)&&i>1?a>=0?u.INSIDE:u.OUTSIDE:(Q(c,e,C(c,r,i)),a>=0?u.INTERSECTS_INSIDE_OUT:u.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(u||(u={}));const g=[0,0,1,0];var I;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(I||(I={}));const at=I.INFINITE_MIN|I.INFINITE_MAX,ot=I.INFINITE_MAX;export{Dt as A,$t as D,Rt as G,qt as H,wt as J,lt as L,k as M,gt as O,bt as P,pt as Q,G as U,F as V,_t as a,Et as b,f as c,tt as d,v as f,mt as g,et as h,Nt as i,Pt as k,rt as l,St as m,Mt as o,nt as p,At as q,B as r,Tt as t,ht as u,H as v,Ct as w,Ut as x,Ot as y,Ft as z};
