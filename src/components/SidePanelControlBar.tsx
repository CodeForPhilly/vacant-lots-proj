"use client";

import React, { FC } from "react";
import { Button } from "@nextui-org/react";
import { BarClickOptions } from "@/app/map/page";
import { DownloadSimple, Funnel, GlobeHemisphereWest, SquaresFour, Table } from "@phosphor-icons/react";

type SidePanelControlBarProps = {
  currentView: string,
  featureCount: number;
  loading: boolean;
  smallScreenMode: string;
  updateCurrentView: (view: BarClickOptions) => void;
  updateSmallScreenMode: () => void;
};

const SearchBarComponent: FC<SidePanelControlBarProps> = ({
  currentView,
  featureCount,
  loading,
  smallScreenMode,
  updateCurrentView,
  updateSmallScreenMode
}) => {

  return loading ? (
    <div>{/* Keep empty while loading */}</div>
  ) : (
    <>
    <div className="flex justify-between items-center bg-white p-2 h-14">
      {/* Left-aligned content: Total Properties in View */}
      <Button
        aria-label={`Change to ${smallScreenMode}`}
        className="bg-white w-fit px-2 sm:hidden hover:bg-gray-100 max-md:min-w-[4rem]"
        onPress={updateSmallScreenMode}
      >
        {smallScreenMode === "map" ? <SquaresFour className="h-6 w-6" /> : <GlobeHemisphereWest className="h-6 w-6"/>}
      </Button>
      <div className="sm:px-4 py-2">
        <h1 className="body-md">
          <span className="font-bold">{featureCount.toLocaleString()} </span> 
          Properties <span className="max-lg:hidden"> in View </span>
        </h1>
      </div>

      {/* Right-aligned content: Buttons */}
      <div
        className="flex items-center space-x-2"
        role="region"
        aria-label="controls"
      >
        <Button
          onPress={() => updateCurrentView("filter")}
          startContent={<Funnel className="h-6 w-6" />}
          className="bg-white px-2 hover:bg-gray-100 max-md:min-w-[4rem]"
        >
          <span className="max-lg:hidden body-md">Filter</span>
        </Button>
        <Button
          onPress={() => updateCurrentView("detail")}
          startContent={ <Table className="h-6 w-6" />}
          className={`bg-white px-2 hover:bg-gray-100 max-md:min-w-[4rem] ${smallScreenMode === "map" ? "max-sm:hidden" : ""}`}
        >
        </Button>
        <Button
          onPress={() => updateCurrentView("download")}
          startContent={<DownloadSimple className="h-6 w-6" /> }
          className={`bg-white px-2 hover:bg-gray-100 max-md:min-w-[4rem] ${smallScreenMode === "map" ? "max-sm:hidden" : ""}`}
        ></Button>
      </div>
    </div>
    </>
  );
};

export default SearchBarComponent;
