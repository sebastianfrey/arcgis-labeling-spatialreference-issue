import{e as Ie}from"./deduplicate-nPGjn6Fv.js";import{H as C}from"./InterleavedLayout-Bgeaec7X.js";import{e as c}from"./VertexAttribute-BdZWZuT1.js";import{t as Z}from"./glUtil-D50PYw6z.js";import{a$ as w,da as ee,ey as Oe,ex as k,el as oe,aX as H,eB as Se,eA as Ae,aY as he,eh as re,a_ as pe,gw as de,bG as Ee,ek as we,ll as Te}from"./index-Dc2kMMi_.js";const Me=C().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),ve=C().vec2u8(c.SIDENESS).freeze();Z(ve);const j=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=C().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;let ye=class{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}};const W=-1;function $e(e,n,s){const o=e.vertices.position,a=e.vertices.componentIndex,l=O.position0,p=O.position1,g=O.faceNormal0,m=O.faceNormal1,{edges:i,normals:h}=xe(e),N=i.length/4,A=n.allocate(N);let R=0;const F=N,T=s==null?void 0:s.allocate(F);let B=0,t=0,r=0;_.length=0;for(let d=0;d<N;++d){const v=4*d;o.getVec(i.data[v],l),o.getVec(i.data[v+1],p);const x=_.pushNew();x.index=4*d,x.length=Oe(l,p)}_.sort((d,v)=>v.length-d.length);const f=new Array,u=new Array;_.forAll(({length:d,index:v})=>{const x=i.data[v],me=i.data[v+1],te=i.data[v+2],ne=i.data[v+3],se=ne===W;if(o.getVec(x,l),o.getVec(me,p),se){const E=3*te;k(g,h.data[E],h.data[E+1],h.data[E+2]),oe(m,g),O.componentIndex=a.get(x),O.cosAngle=H(g,m)}else{let E=3*te;if(k(g,h.data[E],h.data[E+1],h.data[E+2]),E=3*ne,k(m,h.data[E],h.data[E+1],h.data[E+2]),O.componentIndex=a.get(x),O.cosAngle=H(g,m),Re(O,Le))return;O.cosAngle<-.9999&&oe(m,g)}t+=d,r++,se||Pe(O,Fe)?(n.write(A,R++,O),f.push(d)):Ve(O,ge)&&(T&&s&&s.write(T,B++,O),u.push(d))});const S=new Float32Array(f.reverse()),M=new Float32Array(u.reverse()),y=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:M}}:void 0;return{regular:{instancesData:A.slice(0,R),lodInfo:{lengths:S}},silhouette:y,averageEdgeLength:t/r}}function Pe(e,n){return e.cosAngle<n}function Re(e,n){return e.cosAngle>n}function Ve(e,n){const s=Se(e.cosAngle);return Ae(ae,e.position1,e.position0),s*(H(he(be,e.faceNormal0,e.faceNormal1),ae)>0?-1:1)>n}function xe(e){const n=e.faces.length/3,s=e.faces,o=e.neighbors,a=e.vertices.position;I.length=K.length=0;for(let l=0;l<n;l++){const p=3*l,g=o[p],m=o[p+1],i=o[p+2],h=s[p],N=s[p+1],A=s[p+2];a.getVec(h,V),a.getVec(N,z),a.getVec(A,X),re(z,z,V),re(X,X,V),he(V,z,X),pe(V,V),K.pushArray(V),(g===W||h<N)&&(I.push(h),I.push(N),I.push(l),I.push(g)),(m===W||N<A)&&(I.push(N),I.push(A),I.push(l),I.push(m)),(i===W||A<h)&&(I.push(A),I.push(h),I.push(l),I.push(i))}return{edges:I,normals:K}}class De{constructor(){this.index=0,this.length=0}}const _=new ee({allocator:e=>e||new De,deallocator:null}),I=new ee({deallocator:null}),K=new ee({deallocator:null}),O=new ye,be=w(),ae=w(),V=w(),z=w(),X=w(),ge=de(4),Le=Math.cos(ge),Ce=de(35),Fe=Math.cos(Ce);function ie(e,n,s){const o=n/3,a=new Uint32Array(s+1),l=new Uint32Array(s+1),p=(t,r)=>{t<r?a[t+1]++:l[r+1]++};for(let t=0;t<o;t++){const r=e[3*t],f=e[3*t+1],u=e[3*t+2];p(r,f),p(f,u),p(u,r)}let g=0,m=0;for(let t=0;t<s;t++){const r=a[t+1],f=l[t+1];a[t+1]=g,l[t+1]=m,g+=r,m+=f}const i=new Uint32Array(6*o),h=a[s],N=(t,r,f)=>{if(t<r){const u=a[t+1]++;i[2*u]=r,i[2*u+1]=f}else{const u=l[r+1]++;i[2*h+2*u]=t,i[2*h+2*u+1]=f}};for(let t=0;t<o;t++){const r=e[3*t],f=e[3*t+1],u=e[3*t+2];N(r,f,t),N(f,u,t),N(u,r,t)}const A=(t,r)=>{const f=2*t,u=r-t;for(let S=1;S<u;S++){const M=i[f+2*S],y=i[f+2*S+1];let d=S-1;for(;d>=0&&i[f+2*d]>M;d--)i[f+2*d+2]=i[f+2*d],i[f+2*d+3]=i[f+2*d+1];i[f+2*d+2]=M,i[f+2*d+3]=y}};for(let t=0;t<s;t++)A(a[t],a[t+1]),A(h+l[t],h+l[t+1]);const R=new Int32Array(3*o),F=(t,r)=>t===e[3*r]?0:t===e[3*r+1]?1:t===e[3*r+2]?2:-1,T=(t,r)=>{const f=F(t,r);R[3*r+f]=-1},B=(t,r,f,u)=>{const S=F(t,r);R[3*r+S]=u;const M=F(f,u);R[3*u+M]=r};for(let t=0;t<s;t++){let r=a[t];const f=a[t+1];let u=l[t];const S=l[t+1];for(;r<f&&u<S;){const M=i[2*r],y=i[2*h+2*u];M===y?(B(t,i[2*r+1],y,i[2*h+2*u+1]),r++,u++):M<y?(T(t,i[2*r+1]),r++):(T(y,i[2*h+2*u+1]),u++)}for(;r<f;)T(t,i[2*r+1]),r++;for(;u<S;)T(i[2*h+2*u],i[2*h+2*u+1]),u++}return R}function Y(e,n,s,o,a,l=2){const p=1/(Math.abs(s)+Math.abs(o)+Math.abs(a)),g=s*p,m=o*p,i=a<=0?(g>=0?1:-1)*(1-Math.abs(m)):g,h=a<=0?(m>=0?1:-1)*(1-Math.abs(g)):m,N=n*l;e[N]=ce(i),e[N+1]=ce(h)}function ce(e){return Ee(Math.round(32767*e),-32767,32767)}const q=.7;let Ne=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?_e:Be}write(n,s,o){U.seed=this._edgeHashFunction(o);const a=U.getIntRange(0,255),l=U.getIntRange(0,this.settings.variants-1),p=U.getFloat(),g=255*(.5*ze(-(1-Math.min(p/q,1))+Math.max(0,p-q)/(1-q),1.2)+.5);n.position0.setVec(s,o.position0),n.position1.setVec(s,o.position1),n.componentIndex.set(s,o.componentIndex),n.variantOffset.set(s,a),n.variantStroke.set(s,l),n.variantExtension.set(s,g)}};const $=new Float32Array(6),P=new Uint32Array($.buffer),L=new Uint32Array(1);function Be(e){return $[0]=e.position0[0],$[1]=e.position0[1],$[2]=e.position0[2],$[3]=e.position1[0],$[4]=e.position1[1],$[5]=e.position1[2],L[0]=31*(31*(31*(31*(31*(166811+P[0])+P[1])+P[2])+P[3])+P[4])+P[5],L[0]}function _e(e){const n=$;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),L[0]=5381;for(let s=0;s<P.length;s++)L[0]=31*L[0]+P[s];return L[0]}const le=1e4;function D(e){return Math.round(e*le)/le}function ze(e,n){return Math.abs(e)**n*Math.sign(e)}class J{constructor(){this._commonWriter=new Ne}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return j.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o),we(b,o.faceNormal0,o.faceNormal1),pe(b,b);const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;Y(a,s,b[0],b[1],b[2],l)}}J.Layout=j,J.glLayout=Z(j,1);class Q{constructor(){this._commonWriter=new Ne}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,o){this._commonWriter.write(n,s,o);{const{typedBuffer:a,typedBufferStride:l}=n.normalCompressed;Y(a,s,o.faceNormal0[0],o.faceNormal0[1],o.faceNormal0[2],l)}{const{typedBuffer:a,typedBufferStride:l}=n.normal2Compressed;Y(a,s,o.faceNormal1[0],o.faceNormal1[1],o.faceNormal1[2],l)}}}Q.Layout=G,Q.glLayout=Z(G,1);const b=w(),U=new Te;function Ye(e){const n=Xe(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return ue.updateSettings(e.writerSettings),fe.updateSettings(e.writerSettings),$e(n,ue,fe)}function Xe(e,n,s,o){if(n){const p=ie(s,o,e.count);return new Ue(s,o,p,e)}const a=Ie(e.buffer,e.stride/4,{originalIndices:s,originalIndicesLength:o}),l=ie(a.indices,o,a.uniqueCount);return{faces:a.indices,facesLength:a.indices.length,neighbors:l,vertices:Me.createView(a.buffer)}}class Ue{constructor(n,s,o,a){this.faces=n,this.facesLength=s,this.neighbors=o,this.vertices=a}}const ue=new J,fe=new Q,Je=C().vec3f(c.POSITION0).vec3f(c.POSITION1),Qe=C().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{Me as E,Je as d,Ye as f,Qe as m,$e as p,Xe as u};