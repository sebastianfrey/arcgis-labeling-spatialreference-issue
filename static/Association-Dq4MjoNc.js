import{V as d,W as o,Z as e,ap as m,aF as c,dR as p,dW as u,cf as y}from"./index-DKbcOXvO.js";var a;(function(t){t[t.RTJunctionJunctionConnectivity=1]="RTJunctionJunctionConnectivity",t[t.RTContainment=2]="RTContainment",t[t.RTAttachment=3]="RTAttachment",t[t.RTJunctionEdgeConnectivity=4]="RTJunctionEdgeConnectivity",t[t.RTEdgeJunctionEdgeConnectivity=5]="RTEdgeJunctionEdgeConnectivity"})(a||(a={}));new d({connected:"connected",upstream:"upstream",downstream:"downstream",shortestPath:"shortest-path",subnetwork:"subnetwork",subnetworkController:"subnetwork-controller",loops:"loops",isolation:"isolation"});const l=new d({junctionJunctionConnectivity:"junction-junction-connectivity",connectivity:"connectivity",attachment:"attachment",containment:"containment",junctionEdgeFromConnectivity:"junction-edge-from-connectivity",junctionEdgeMidspanConnectivity:"junction-edge-midspan-connectivity",junctionEdgeToConnectivity:"junction-edge-to-connectivity"});new d({normal:"normal",rebuild:"rebuild",forceRebuild:"force-rebuild"});let i=class extends c{constructor(t){super(t),this.assetGroupCode=null,this.assetTypeCode=null,this.globalId=null,this.networkSourceId=null,this.objectId=null,this.positionFrom=null,this.positionTo=null,this.terminalId=null}};o([e({type:Number,json:{write:!0}})],i.prototype,"assetGroupCode",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"assetTypeCode",void 0),o([e({type:String,json:{write:!0}})],i.prototype,"globalId",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"networkSourceId",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"objectId",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"positionFrom",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"positionTo",void 0),o([e({type:Number,json:{write:!0}})],i.prototype,"terminalId",void 0),i=o([m("esri.rest.networks.support.NetworkElement")],i);const s=i;let r=class extends c{constructor(t){super(t),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(t,n){return new s({globalId:n.fromGlobalId,networkSourceId:n.fromNetworkSourceId,terminalId:n.fromTerminalId})}writeFromNetworkElement(t,n){t&&(n.fromGlobalId=t.globalId,n.fromNetworkSourceId=t.networkSourceId,n.fromTerminalId=t.terminalId)}readToNetworkElement(t,n){return new s({globalId:n.toGlobalId,networkSourceId:n.toNetworkSourceId,terminalId:n.toTerminalId})}writeToNetworkElement(t,n){t&&(n.toGlobalId=t.globalId,n.toNetworkSourceId=t.networkSourceId,n.toTerminalId=t.terminalId)}};o([e({type:String,json:{write:!0}})],r.prototype,"globalId",void 0),o([e({type:l.apiValues,json:{type:l.jsonValues,read:l.read,write:l.write}})],r.prototype,"associationType",void 0),o([e({type:s,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],r.prototype,"fromNetworkElement",void 0),o([p("fromNetworkElement")],r.prototype,"readFromNetworkElement",null),o([u("fromNetworkElement")],r.prototype,"writeFromNetworkElement",null),o([e({type:s,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],r.prototype,"toNetworkElement",void 0),o([p("toNetworkElement")],r.prototype,"readToNetworkElement",null),o([u("toNetworkElement")],r.prototype,"writeToNetworkElement",null),o([e({type:y,json:{write:!0}})],r.prototype,"geometry",void 0),o([e({type:String,json:{write:!0}})],r.prototype,"errorMessage",void 0),o([e({type:Number,json:{write:!0}})],r.prototype,"percentAlong",void 0),o([e({type:Number,json:{write:!0}})],r.prototype,"errorCode",void 0),o([e({type:Boolean,json:{write:!0}})],r.prototype,"isContentVisible",void 0),o([e({type:Number,json:{write:!0}})],r.prototype,"status",void 0),r=o([m("esri.rest.networks.support.Association")],r);const I=r;export{I as d,l as i,s as p};
