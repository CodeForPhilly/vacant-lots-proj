"use client";

import React, { FC, useState, useEffect, useRef } from "react";
import { MapGeoJSONFeature } from "maplibre-gl";

interface SidePanelProps {
  children?: React.ReactNode;
  isVisible: string;
  selectedProperty: MapGeoJSONFeature | null;
}

const SidePanel: FC<SidePanelProps> = ({ children, isVisible, selectedProperty }) => {
  const [expanded, setExpanded] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Scrolls the selected property to the top onmount for mobile */
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [selectedProperty])

  return (
    <div
      role="region"
      aria-label="results sidepanel"
      className={`min-h-[calc(100svh-100px)] max-h-[calc(100svh-100px)] h-full overflow-y-scroll transition-all duration-300 bg-white flex flex-col ${
        expanded ? "w-5/12" : "w-0"
      } bg-white max-sm:w-full ${isVisible}`}
      ref={panelRef}
    >
      {children}
    </div>
  );
};

export default SidePanel;
