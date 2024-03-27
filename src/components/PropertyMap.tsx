"use client";

import {
  FC,
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";
import { maptilerApiKey, mapboxAccessToken } from "../config/config";
import { useFilter } from "@/context/FilterContext";
import Map, {
  Source,
  Layer,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl/maplibre";
import maplibregl, {
  Map as MaplibreMap,
  PointLike,
  MapGeoJSONFeature,
  ColorSpecification,
  FillLayerSpecification,
  CircleLayerSpecification,
  DataDrivenPropertyValueSpecification,
  IControl,
  LngLatLike,
  MapMouseEvent,
  LngLat,
} from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import mapboxgl from "mapbox-gl";
import { Protocol } from "pmtiles";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import ZoomModal from "./ZoomModal";
import { Coordinates } from "../app/types";
import { MapLegendControl } from "./MapLegendControl";
import { createPortal } from "react-dom";
import { Tooltip } from "@nextui-org/react";
import { Info } from "@phosphor-icons/react";
import { centroid } from "@turf/centroid";

const MIN_MAP_ZOOM = 10;
const MAX_MAP_ZOOM = 20;
const MAX_TILE_ZOOM = 16;

const layers = [
  "vacant_properties_tiles_polygons",
  "vacant_properties_tiles_points",
];

const colorScheme: DataDrivenPropertyValueSpecification<ColorSpecification> = [
  "match",
  ["get", "priority_level"], // get the value of the guncrime_density property
  "High",
  "#FF4500", // Orange Red
  "Medium",
  "#FFD700", // Gold
  "Low",
  "#B0E57C", // Light Green
  "#D3D3D3", // default color if none of the categories match
];

const layerStylePolygon: FillLayerSpecification = {
  id: "vacant_properties_tiles_polygons",
  type: "fill",
  source: "vacant_properties_tiles",
  "source-layer": "vacant_properties_tiles_polygons",
  paint: {
    "fill-color": colorScheme,
    "fill-opacity": 0.7,
  },
  metadata: {
    name: "Priority",
  },
};

const layerStylePoints: CircleLayerSpecification = {
  id: "vacant_properties_tiles_points",
  type: "circle",
  source: "vacant_properties_tiles",
  "source-layer": "vacant_properties_tiles_points",
  paint: {
    "circle-color": colorScheme,
    "circle-opacity": 0.7,
    "circle-radius": 3,
  },
  metadata: {
    name: "Priority",
  },
};

// info icon in legend summary
let summaryInfo: ReactElement | null = null;

const MapControls = () => (
  <>
    <GeolocateControl position="bottom-right" />
    <FullscreenControl position="bottom-right" />
    <NavigationControl showCompass={false} position="bottom-right" />
    <ScaleControl />
    <MapLegendControl position="bottom-left" layerStyle={layerStylePolygon} />
  </>
);

interface PropertyMapProps {
  setFeaturesInView: Dispatch<SetStateAction<any[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  selectedProperty: MapGeoJSONFeature | null;
  setSelectedProperty: (property: MapGeoJSONFeature | null) => void;
  setFeatureCount: Dispatch<SetStateAction<number>>;
  setSmallScreenMode: Dispatch<SetStateAction<string>>;
}
const PropertyMap: FC<PropertyMapProps> = ({
  setFeaturesInView,
  setLoading,
  selectedProperty,
  setSelectedProperty,
  setFeatureCount,
  setSmallScreenMode
}) => {
  const { appFilter } = useFilter();
  const [popupInfo, setPopupInfo] = useState<any | null>(null);
  const [map, setMap] = useState<MaplibreMap | null>(null);
  const [zoom, setZoom] = useState<number>(13);
  const geocoderRef = useRef<MapboxGeocoder | null>(null);

  useEffect(() => {
    let protocol = new Protocol();
    maplibregl.addProtocol("pmtiles", protocol.tile);
    return () => {
      maplibregl.removeProtocol("pmtiles");
    };
  }, []);

  // filter function
  // update filters on both layers for ease of switching between layers
  const updateFilter = () => {
    if (!map) return;

    const isAnyFilterEmpty = Object.values(appFilter).some((filterItem) => {
      return filterItem.values.length === 0;
    });

    if (isAnyFilterEmpty) {
      map.setFilter("vacant_properties_tiles_points", ["==", ["id"], ""]);
      map.setFilter("vacant_properties_tiles_polygons", ["==", ["id"], ""]);

      return;
    }

    const mapFilter = Object.entries(appFilter).reduce(
      (acc, [property, filterItem]) => {
        if (filterItem.values.length) {
          acc.push(["in", property, ...filterItem.values]);
        }

        return acc;
      },
      [] as any[]
    );

    map.setFilter("vacant_properties_tiles_points", ["all", ...mapFilter]);
    map.setFilter("vacant_properties_tiles_polygons", ["all", ...mapFilter]);
  };

  const onMapClick = (e: MapMouseEvent) => {
    handleMapClick(e.lngLat);
  };

  const moveMap = (targetPoint: LngLatLike) => {
    if (map) {
      map.easeTo({
        center: targetPoint,
      });
    }
  };

  const handleMapClick = (clickPoint: LngLat) => {
    if (map) {
      const features = map.queryRenderedFeatures(map.project(clickPoint), {
        layers,
      });

      if (features.length > 0) {
        setSelectedProperty(features[0]);
      } else {
        setSelectedProperty(null);
      }
    }
  };

  const handleSetFeatures = (event: any) => {
    if (!["moveend", "sourcedata"].includes(event.type)) return;
    if (!map) return;
    setLoading(true);

    const zoom_ = map.getZoom();
    setZoom(zoom_);

    let bbox: [PointLike, PointLike] | undefined = undefined;

    const features = map.queryRenderedFeatures(bbox, { layers });

    //Get count of features if they are clustered
    const clusteredFeatureCount = features.reduce(
      (acc: number, feature: MapGeoJSONFeature) => {
        if (feature.properties?.clustered) {
          acc += feature.properties?.point_count || 0;
        } else {
          acc += 1;
        }
        return acc;
      },
      0
    );

    setFeatureCount(clusteredFeatureCount);

    const priorities: { [key: string]: number } = {
      High: 1,
      Medium: 2,
      Low: 3,
    };

    const sortedFeatures = features
      .sort((a: MapGeoJSONFeature, b: MapGeoJSONFeature) => {
        return (
          priorities[a?.properties?.priority_level || ""] -
          priorities[b?.properties?.priority_level || ""]
        );
      })
      .slice(0, 100);

    // only set the first 100 properties in state
    setFeaturesInView(sortedFeatures);
    setLoading(false);
  };

  useEffect(() => {
    if (map) {
      // Add info icon to legend on map load
      const legendSummary = document.getElementById("legend-summary");
      if (legendSummary) {
        const infoString: string =
          "We prioritize properties based on how much they can reduce gun violence considering the vacancy, gun violence, cleanliness, and tree canopy.";
        summaryInfo = createPortal(
          <Tooltip
            showArrow
            placement="top-start"
            color="primary"
            content={infoString}
            classNames={{
              base: ["before:-translate-x-2"],
              content: ["max-w-96 -translate-x-2"],
            }}
          >
            <Info
              alt="Priority Info"
              className="text-gray-500 cursor-pointer"
              tabIndex={0}
            />
          </Tooltip>,
          legendSummary
        );
      }

      // Add Geocoder
      if (!geocoderRef.current) {
        const center = map.getCenter();
        geocoderRef.current = new MapboxGeocoder({
          accessToken: mapboxAccessToken,
          mapboxgl: mapboxgl,
          marker: false,
          proximity: {
            longitude: center.lng,
            latitude: center.lat,
          },
        });

        map.addControl(geocoderRef.current as unknown as IControl, "top-right");

        geocoderRef.current.on("result", (e) => {
          map.easeTo({
            center: e.result.center,
            zoom: MAX_TILE_ZOOM,
          });
        });
      }
    }

    return () => {
      // Remove Geocoder
      if (map && geocoderRef.current) {
        map.removeControl(geocoderRef.current as unknown as IControl);
        geocoderRef.current = null;
      }
    };
  }, [map]);

  useEffect(() => {
    if (!map) return;
    if (!selectedProperty) {
      setPopupInfo(null);
    } else {
      const propCentroid = centroid(selectedProperty.geometry);
      moveMap(propCentroid.geometry.coordinates as LngLatLike);
      setPopupInfo({
        longitude: propCentroid.geometry.coordinates[0],
        latitude: propCentroid.geometry.coordinates[1],
        feature: selectedProperty.properties,
      });
    }
  }, [selectedProperty]);

  useEffect(() => {
    if (map) {
      updateFilter();
    }
  }, [map, appFilter]);

  const changeCursor = (e: any, cursorType: "pointer" | "default") => {
    e.target.getCanvas().style.cursor = cursorType;
  };

  // map load
  return (
    <div className="customized-map relative max-sm:min-h-[calc(100svh-100px)] max-sm:max-h-[calc(100svh-100px) h-full w-full">
      <Map
        mapLib={maplibregl as any}
        initialViewState={{
          longitude: -75.15975924194129,
          latitude: 39.9910071520824,
          zoom,
        }}
        mapStyle={`https://api.maptiler.com/maps/dataviz/style.json?key=${maptilerApiKey}`}
        onMouseEnter={(e) => changeCursor(e, "pointer")}
        onMouseLeave={(e) => changeCursor(e, "default")}
        onClick={onMapClick}
        minZoom={MIN_MAP_ZOOM}
        maxZoom={MAX_MAP_ZOOM}
        interactiveLayerIds={layers}
        onLoad={(e) => {
          setMap(e.target);
        }}
        onSourceData={(e) => {
          handleSetFeatures(e);
        }}
        onMoveEnd={handleSetFeatures}
      >
        <MapControls />
        {popupInfo && (
          <Popup
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <p className="font-semibold body-md p-1">
                {popupInfo.feature.address}
              </p>
            </div>
          </Popup>
        )}
        <Source
          type="vector"
          url="pmtiles://https://storage.googleapis.com/cleanandgreenphilly/vacant_properties_tiles.pmtiles"
          id="vacant_properties_tiles"
        >
          <Layer {...layerStylePoints} />
          <Layer {...layerStylePolygon} />
        </Source>
      </Map>
      {summaryInfo /* Render the summary info icon using createPortal */}
    </div>
  );
};
export default PropertyMap;
