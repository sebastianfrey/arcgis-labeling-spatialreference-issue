import{i,e as l,f as a,j as n,x as o,g as d,S as c}from"./index-DKbcOXvO.js";import{n as p}from"./resources6-Cs2_VmEC.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */const h=i`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`,t=class t extends l{constructor(){super(),this.mutationObserver=a("mutation",()=>this.updateItems()),this.scale="m",this.selectionMode="single",this.calciteInternalDropdownItemChange=n({cancelable:!1}),this.listen("calciteInternalDropdownItemSelect",this.updateActiveItemOnChange)}connectedCallback(){var e;super.connectedCallback(),this.updateItems(),(e=this.mutationObserver)==null||e.observe(this.el,{childList:!0})}load(){this.groupPosition=this.getGroupPosition()}willUpdate(e){e.has("selectionMode")&&(this.hasUpdated||this.selectionMode!=="single")&&this.updateItems()}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}updateActiveItemOnChange(e){this.requestedDropdownGroup=e.detail.requestedDropdownGroup,this.requestedDropdownItem=e.detail.requestedDropdownItem,this.calciteInternalDropdownItemChange.emit({requestedDropdownGroup:this.requestedDropdownGroup,requestedDropdownItem:this.requestedDropdownItem})}updateItems(){Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach(e=>e.selectionMode=this.selectionMode)}getGroupPosition(){return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"),this.el)}render(){const e=this.groupTitle?o`<span aria-hidden=true class="dropdown-title">${this.groupTitle}</span>`:null,r=this.groupPosition>0?o`<div class="dropdown-separator" role=separator></div>`:null;return this.el.ariaLabel=this.groupTitle,this.el.role="group",o`<div class=${d({[p.container]:!0})}>${r}${e}<slot></slot></div>`}};t.properties={groupTitle:3,scale:3,selectionMode:3},t.shadowRootOptions={mode:"open",delegatesFocus:!0},t.styles=h;let s=t;c("calcite-dropdown-group",s);export{s as DropdownGroup};
