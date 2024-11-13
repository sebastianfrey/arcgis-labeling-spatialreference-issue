import "@esri/calcite-components/dist/calcite/calcite.css";
import "@arcgis/core/assets/esri/themes/light/main.css";

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import OGCFeatureLayer from "@arcgis/core/layers/OGCFeatureLayer";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import LayerList from "@arcgis/core/widgets/LayerList";
import { setAssetPath } from "@esri/calcite-components/dist/components";

import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-action-bar";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";
import "@esri/calcite-components/dist/components/calcite-label";
import "@esri/calcite-components/dist/components/calcite-radio-button";
import "@esri/calcite-components/dist/components/calcite-radio-button-group";

import "./style.css";

setAssetPath("/assets");

const map = new Map({
  basemap: "gray-vector",
});

const view = new MapView({
  container: "viewDiv",
  map,
  spatialReference: {
    wkid: 3857,
  },
  zoom: 12,
  center: [6.93, 49.87],
  padding: {
    left: 49,
  },
});

const layerList = new LayerList({
  view,
  visibilityAppearance: "checkbox",
  container: document.getElementById("layers-container")!,
});

function loadWorldCupLayer(map: Map) {
  const worldCupLayer = new FeatureLayer({
    url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/FIFA_World_Cup/FeatureServer/0",
    labelingInfo: [
      {
        labelExpressionInfo: {
          expression: "$feature.StadiumName",
        },
        symbol: {
          type: "text",
          color: "black",
          font: {
            family: "Arial",
            size: 20,
          },
        },
        maxScale: 0,
        minScale: 0,
      },
    ],
  });
  map.add(worldCupLayer);
}

function loadVineryLayer(map: Map) {
  const vineryLayer = new OGCFeatureLayer({
    url: "https://demo.ldproxy.net/vineyards", // url to the OGC landing page
    collectionId: "vineyards", // unique id of the collection
    // define labeling
    labelingInfo: [
      {
        labelExpressionInfo: {
          expression: "$feature.NAME",
        },
        symbol: {
          type: "text",
          color: "#4a6741",
          haloSize: 1,
          haloColor: "white",
          font: {
            family: "IM FELL DW Pica PRO",
            style: "italic",
            weight: "normal",
            size: 20,
          },
        },
        maxScale: 0,
        minScale: 0,
      },
    ],
    // hide the vineyards in very small scales
    minScale: 5000000,
    // define rendering
    renderer: {
      type: "simple",
      symbol: {
        type: "web-style", // autocasts to WebStyleSymbol
        styleUrl:
          "https://www.arcgis.com/sharing/rest/content/items/c71b13cf8f28452faf91ad0552574d24/data",
        name: "Mangrove_Common_5",
      },
    } as __esri.RendererProperties,
    popupTemplate: {
      title: "{name}",
      content: [
        {
          type: "text",
          text: "The {name} vineyard is {area_ha} hectares and resides in {village} village. It is within the {region} region and the {subregion} subregion. ",
        },
      ],
    },
    opacity: 0.6,
    // display the attribution
    copyright:
      "Landwirtschaftskammer RLP (2020), dl-de/by-2-0, <a href='http://weinlagen.lwk-rlp.de/'' target='_blank'>weinlagen.lwk-rlp.de</a>, <a href='http://weinlagen.lwk-rlp.de/portal/nutzungsbedingungen/gewaehrleistung-haftung.html' target='_blank'>Regelungen zu Gewährleistung und Haftung</a>",
  });
  map.add(vineryLayer);
}

function loadLakesLayers(map: Map) {
  const lakesLayer = new OGCFeatureLayer({
    url: "https://demo.pygeoapi.io/stable",
    collectionId: "lakes",
  });
  map.layers.add(lakesLayer);
}

let activeWidget: string | null = null;

view.when(() => {
  (document.querySelector("#header-title")! as any).heading =
    "Labels are only visible at web mercator projection";
  const handleActionBarClick = ({ target }: any) => {
    if (target.tagName !== "CALCITE-ACTION") {
      return;
    }

    if (activeWidget) {
      (
        document.querySelector(`[data-action-id=${activeWidget}]`)! as any
      ).active = false;
      (
        document.querySelector(`[data-panel-id=${activeWidget}]`)! as any
      ).hidden = true;
    }

    const nextWidget = target.dataset.actionId;
    if (nextWidget !== activeWidget) {
      (
        document.querySelector(`[data-action-id=${nextWidget}]`)! as any
      ).active = true;
      (document.querySelector(`[data-panel-id=${nextWidget}]`)! as any).hidden =
        false;
      activeWidget = nextWidget;
    } else {
      activeWidget = null;
    }
  };

  document
    .querySelector("calcite-action-bar")!
    .addEventListener("click", handleActionBarClick);

  let actionBarExpanded = false;

  document.addEventListener("calciteActionBarToggle", () => {
    actionBarExpanded = !actionBarExpanded;
    view.padding = {
      left: actionBarExpanded ? 150 : 49,
    };
  });

  document.querySelector("calcite-shell")!.hidden = false;

  document
    .querySelector("#srs-radio-group")!
    .addEventListener("calciteRadioButtonGroupChange", (event: any) => {
      const wkid = parseInt(event.target.selectedItem.value);
      view.spatialReference = new SpatialReference({
        wkid,
      });
    });

  loadLakesLayers(map);
  loadVineryLayer(map);
  loadWorldCupLayer(map);
});

(window as any).map = map;
(window as any).view = view;
(window as any).layerList = layerList;
