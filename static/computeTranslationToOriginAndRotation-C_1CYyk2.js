import{eD as N,hw as h,hx as S,hy as M,hz as t,ag as P,hA as R,hB as l,hC as C,gw as T,a$ as O}from"./index-Dc2kMMi_.js";function f(u,a,s){const L=Math.sin(u),r=Math.cos(u),o=Math.sin(a),_=Math.cos(a),n=s;return n[0]=-L,n[4]=-o*r,n[8]=_*r,n[12]=0,n[1]=r,n[5]=-o*L,n[9]=_*L,n[13]=0,n[2]=0,n[6]=_,n[10]=o,n[14]=0,n[3]=0,n[7]=0,n[11]=0,n[15]=1,n}function W(u,a,s){return f(u,a,s),N(s,s),s}function G(u,a,s,L){if(u==null||L==null)return!1;const r=h(u,S),o=h(L,M);if(r===o&&!e(o)&&(r!==t.UNKNOWN||P(u,L)))return R(s,a),!0;if(e(o)){const n=l[r][t.LON_LAT],c=l[t.LON_LAT][o];return n!=null&&c!=null&&(n(a,0,E,0),c(E,0,A,0),f(i*E[0],i*E[1],s),s[12]=A[0],s[13]=A[1],s[14]=A[2],!0)}const _=e(r);if((o===t.WEB_MERCATOR||o===t.PLATE_CARREE||o===t.WGS84||o===t.CGCS2000)&&(r===t.WGS84||_||r===t.WEB_MERCATOR||r===t.CGCS2000)){const n=l[r][t.LON_LAT],c=l[t.LON_LAT][o];return n!=null&&c!=null&&(n(a,0,E,0),c(E,0,A,0),_?W(i*E[0],i*E[1],s):C(s),s[12]=A[0],s[13]=A[1],s[14]=A[2],!0)}return!1}function e(u){return u===t.SPHERICAL_ECEF||u===t.SPHERICAL_MARS_PCPF||u===t.SPHERICAL_MOON_PCPF||u===t.WGS84_ECEF}const i=T(1),E=O(),A=O();export{G as C};