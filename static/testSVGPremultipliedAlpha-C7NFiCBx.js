import{b as A}from"./WGLContainer-KjbWquGu.js";import{E as X}from"./BufferObject-OESQIBso.js";import{be as v,cT as l,cX as p,cW as g,b5 as f,cY as Q,iV as I,iR as b,c_ as M,cV as R}from"./index-BPaEurMl.js";import{E as P}from"./Program-zoZbL6gv.js";import{o as S}from"./VertexArrayObject-CnnK3PQk.js";class m{constructor(s,e,r,n,u,E,o,_,T){this.createQuery=s,this.deleteQuery=e,this.resultAvailable=r,this.getResult=n,this.disjoint=u,this.beginTimeElapsed=E,this.endTimeElapsed=o,this.createTimestamp=_,this.timestampBits=T}}let i=!1;function B(t,s){if(s.disjointTimerQuery)return null;let e=t.getExtension("EXT_disjoint_timer_query_webgl2");return e?new m(()=>t.createQuery(),r=>{t.deleteQuery(r),i=!1},r=>t.getQueryParameter(r,t.QUERY_RESULT_AVAILABLE),r=>t.getQueryParameter(r,t.QUERY_RESULT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,t.beginQuery(e.TIME_ELAPSED_EXT,r))},()=>{t.endQuery(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>t.getQuery(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):(e=t.getExtension("EXT_disjoint_timer_query"),e?new m(()=>e.createQueryEXT(),r=>{e.deleteQueryEXT(r),i=!1},r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_AVAILABLE_EXT),r=>e.getQueryObjectEXT(r,e.QUERY_RESULT_EXT),()=>t.getParameter(e.GPU_DISJOINT_EXT),r=>{i||(i=!0,e.beginQueryEXT(e.TIME_ELAPSED_EXT,r))},()=>{e.endQueryEXT(e.TIME_ELAPSED_EXT),i=!1},r=>e.queryCounterEXT(r,e.TIMESTAMP_EXT),()=>e.getQueryEXT(e.TIMESTAMP_EXT,e.QUERY_COUNTER_BITS_EXT)):null)}class U{constructor(){this._result=!1}dispose(){this._program=v(this._program)}get result(){return this._program!=null&&(this._result=this._test(this._program),this.dispose()),this._result}}class N extends U{constructor(s){super(),this._rctx=s;const e=`
    precision highp float;

    attribute vec2 a_pos;
    varying vec2 v_uv;

    void main() {
      v_uv = a_pos;
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `,r=`
    precision highp float;

    varying vec2 v_uv;

    uniform sampler2D u_texture;

    void main() {
      gl_FragColor = texture2D(u_texture, v_uv);
    }
    `;this._program=s.programCache.acquire(e,r,new Map([["a_pos",0]]))}dispose(){super.dispose()}_test(s){const e=this._rctx;if(!e.gl)return s.dispose(),!0;const r=new l(1);r.wrapMode=p.CLAMP_TO_EDGE,r.samplingMode=g.NEAREST;const n=new P(e,r),u=X.createVertex(e,f.STATIC_DRAW,new Uint16Array([0,0,1,0,0,1,1,1])),E=new S(e,new Map([["a_pos",0]]),A,new Map([["geometry",u]])),o=new l;o.samplingMode=g.LINEAR,o.wrapMode=p.CLAMP_TO_EDGE;const _=new Q(e,o,a);e.useProgram(s),e.bindTexture(_,0),s.setUniform1i("u_texture",0);const T=e.getBoundFramebufferObject(),{x:d,y:h,width:w,height:y}=e.getViewport();e.bindFramebuffer(n),e.setViewport(0,0,1,1),e.setClearColor(0,0,0,0),e.setBlendingEnabled(!1),e.clear(I.COLOR),e.bindVAO(E),e.drawArrays(b.TRIANGLE_STRIP,0,4);const c=new Uint8Array(4);return n.readPixels(0,0,1,1,M.RGBA,R.UNSIGNED_BYTE,c),E.dispose(),n.dispose(),_.dispose(),e.setViewport(d,h,w,y),e.bindFramebuffer(T),c[0]!==255}}const a=new Image;a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,a.decode();export{B as a,N as f,U as t};
