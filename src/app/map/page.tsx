"use client";

import React, { FC, useRef, useState, useEffect } from "react";
import {
  FilterView,
  Footer,
  PropertyDetailSection,
  PropertyMap,
  SidePanel,
  SidePanelControlBar,
} from "@/components";
import { FilterProvider } from "@/context/FilterContext";
import { NextUIProvider } from "@nextui-org/react";
import { X } from "@phosphor-icons/react";
import { MapGeoJSONFeature } from "maplibre-gl";
import ReactDOM from "react-dom";
import StreetView from "../../components/StreetView";
import { centroid } from "@turf/centroid";
import { Position } from "geojson";

export type BarClickOptions = "filter" | "download" | "detail" | "list";

const MapPage: FC = () => {
  const [featuresInView, setFeaturesInView] = useState<MapGeoJSONFeature[]>([]);
  const [featureCount, setFeatureCount] = useState<number>(0);
  const [currentView, setCurrentView] = useState<BarClickOptions>("detail");
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] =
    useState<MapGeoJSONFeature | null>(null);
  const [isStreetViewModalOpen, setIsStreetViewModalOpen] =
    useState<boolean>(false);
  const [streetViewLocation, setStreetViewLocation] = useState<Position | null>(
    null,
  );
  const [smallScreenMode, setSmallScreenMode] = useState("map");
  const prevRef = useRef("map");
  const sizeRef = useRef(0);

  const updateCurrentView = (view: BarClickOptions) => {
    setCurrentView(view === currentView ? "detail" : view);

    if (prevRef.current === "map" && window.innerWidth < 640) {
      setSmallScreenMode((prev : string) => (prev === "map" ? "properties" : "map"));
    }
  };

  const updateSmallScreenMode = () => 
    setSmallScreenMode((prev : string) => {
      prevRef.current = prev === "map" ? "properties" : "map";
      setCurrentView("detail");
      return prevRef.current
    });

    /*
      Because filter view is part of smallScreenMode = properties,
      we need to switch to properties when filtering from map.
      If filters are selected from small screen but screen is resized before applying them,
      restores original small screen mode with the filters.
     */
    useEffect(() => {
      sizeRef.current = window.innerWidth;
      const updateWindowDimensions = () => {
        if (sizeRef.current >= 640 && window.innerWidth < 640) {
          setCurrentView(c => {
            setSmallScreenMode(c !== "detail" ? "properties" : prevRef.current);
            return c;
          });
        }
        sizeRef.current = window.innerWidth;
      };

      window.addEventListener("resize", updateWindowDimensions);

      return () => window.removeEventListener("resize", updateWindowDimensions);

      }, []);
  

  const controlBarProps = {currentView, featureCount, loading, smallScreenMode, updateCurrentView, updateSmallScreenMode};
  const isVisible = (mode : string) => (smallScreenMode === mode ? "" : "max-sm:hidden");

  useEffect(() => {
    if (!selectedProperty) return;
    const propCentroid = centroid(selectedProperty.geometry);
    setStreetViewLocation(propCentroid.geometry.coordinates);
  }, [selectedProperty]);

  return (
    <FilterProvider>
      <NextUIProvider>
        <div className="flex flex-col">
          <div className="flex flex-grow overflow-hidden">
            <StreetViewModal isOpen={isStreetViewModalOpen}>
              <div
                id="street-view-overlay"
                className="fixed w-full h-full bg-black"
              >
                <button
                  className="absolute top-4 right-4 bg-white p-[10px] rounded-md flex flex-row space-x-1 items-center"
                  onClick={() => setIsStreetViewModalOpen(false)}
                  aria-label="Close full screen street view map"
                >
                  <X color="#3D3D3D" size={20} />
                  <span className="leading-0">Close</span>
                </button>
                <StreetView
                  lat={streetViewLocation?.[1].toString() || ""}
                  lng={streetViewLocation?.[0].toString() || ""}
                  yaw="180"
                  pitch="5"
                  fov="0.7"
                />
              </div>
            </StreetViewModal>
            <div className={`flex-grow overflow-auto ${isVisible("map")}`}>
              <div className={`sticky top-0 z-10 sm:hidden ${isVisible("map")}`}>
                <SidePanelControlBar {...controlBarProps} />
              </div>
              <PropertyMap
                setFeaturesInView={setFeaturesInView}
                setLoading={setLoading}
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                setFeatureCount={setFeatureCount}
                setSmallScreenMode={setSmallScreenMode}
              />
            </div>
            <SidePanel isVisible={isVisible("properties")} selectedProperty={selectedProperty}>
              {currentView === "filter" ? (
                <FilterView updateCurrentView={updateCurrentView} />
              ) : (
                <>
                  {!selectedProperty && (
                    <div className="h-14 sticky top-0 z-10">
                      <SidePanelControlBar {...controlBarProps} />
                    </div>
                  )}
                  {currentView === "download" ? (
                    <div className="p-4 mt-8 text-center flex-grow">
                      <h2 className="text-2xl font-bold mb-4">
                        Access Our Data
                      </h2>
                      <p>
                        If you are interested in accessing the data behind this
                        dashboard, please reach out to us at
                        <a
                          href="mailto:cleanandgreenphl@gmail.com"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          {" "}
                          cleanandgreenphl@gmail.com
                        </a>
                        . Let us know who you are and why you want the data. We
                        are happy to share the data with anyone with
                        community-oriented interests.
                      </p>
                    </div>
                  ) : (
                    <PropertyDetailSection
                      featuresInView={featuresInView}
                      display={currentView as "detail" | "list"}
                      loading={loading}
                      selectedProperty={selectedProperty}
                      setSelectedProperty={setSelectedProperty}
                      setIsStreetViewModalOpen={setIsStreetViewModalOpen}
                      smallScreenMode={smallScreenMode}
                      updateCurrentView={updateCurrentView}
                    />
                  )}
                </>
              )}
              <Footer />
            </SidePanel>
          </div>
        </div>
      </NextUIProvider>
    </FilterProvider>
  );
};

export default MapPage;

const StreetViewModal = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="absolute inset-0 z-50 w-full h-full">{children}</div>,
    document.body,
  );
};
