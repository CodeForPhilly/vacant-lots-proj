import { FC } from "react";
import DimensionFilter from "./Filters/DimensionFilter";
import { Button } from "@nextui-org/react";
import { PiCheck } from "react-icons/pi";
import { BarClickOptions } from "@/app/map/page";

const filters = [
  {
    property: "priority_level",
    display: "Priority Level",
    options: ["Low", "Medium", "High"],
    tooltip: "For information on how this is calculated, see the About page",
  },
  {
    property: "parcel_type",
    display: "Parcel Type",
    options: ["Land", "Building"],
    tooltip: "Parcel type from City of Philadelphia data",
  },
  {
    property: "access_process",
    display: "Access Process",
    options: ["Buy Property", "Land Bank", "Private Land Use Agreement"],
    tooltip: "For information on what these mean, see the Get Access page",
  },
  {
    property: "tactical_urbanism",
    display: "Tactical Urbanism",
    options: ["Yes", "No"],
    tooltip: "For an explanation of this, see the Get Access page",
  },
  {
    property: "conservatorship",
    display: "Conservatorship Eligible",
    options: ["Yes", "No"],
    tooltip: "For an explanation of this, see the Get Access page",
  },
  {
    property: "side_yard_eligible",
    display: "Side Yard Eligible",
    options: ["Yes", "No"],
    tooltip: "For an explanation of this, see the Get Access page",
  },
  {
    property: "llc_owner",
    display: "LLC Owner",
    options: ["Yes", "No"],
    tooltip: "For an explanation of this, see the Get Access page",
  },
];

type FilterViewProps = {
  updateCurrentView: (view: BarClickOptions) => void;
};

const FilterView: FC<FilterViewProps> = ({ updateCurrentView }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold heading-xl">Filter</h1>
        <Button
          size="sm"
          className="bg-gray-100 text-gray-900"
          onPress={() => updateCurrentView("detail")}
        >
          <PiCheck className="size-4" />
          Done
        </Button>
      </div>
      {filters.map(({ property, display, options, tooltip }) => (
        <DimensionFilter
          key={property}
          property={property}
          options={options}
          display={display}
          tooltip={tooltip}
        />
      ))}
    </div>
  );
};

export default FilterView;
