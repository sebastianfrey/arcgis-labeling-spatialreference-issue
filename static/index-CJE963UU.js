import{i as a,e as l,v as n,B as c,x as o,g as r,S as d}from"./index-DKbcOXvO.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const s={container:"container",selected:"selected"},h=a`:host{display:flex}.container{display:none;inline-size:var(--calcite-container-size-content-fluid)}:host([selected]) .container{display:block}:host([hidden]){display:none}[hidden]{display:none}`,e=class e extends l{constructor(){super(...arguments),this.guid=`calcite-carousel-item-${n()}`,this.selected=!1}render(){const i=this.el.id||this.guid;return c(this.el,"id",i),o`<div .ariaLabel=${this.label} class=${r({[s.container]:!0,[s.selected]:this.selected})} role=tabpanel><slot></slot></div>`}};e.properties={label:1,selected:7},e.styles=h;let t=e;d("calcite-carousel-item",t);export{t as CarouselItem};
