import { FC } from "react";
import DimensionFilter from "./Filters/DimensionFilter";
import { Button } from "@nextui-org/react";
import { Check } from "@phosphor-icons/react";
import { BarClickOptions } from "@/app/map/page";

const filters = [
{
property: "priority_level",
display: <strong className="filter-title">Suggested Priority</strong>,
options: ["Low", "Medium", "High"],
tooltip: "For information on how this is calculated, see the About page",
},
{
property: "property_type",
display: <strong className="filter-title">Parcel Type</strong>,
options: ["Land", "Building"],
tooltip: "Parcel type from City of Philadelphia data",
},
{
property: "access_process",
display: <strong className="filter-title">Access Process</strong>,
options: ["Buy Property", "Land Bank", "Private Land Use Agreement", "Conservatorship"],
tooltip: "For information on what these mean, see the Get Access page",
},
// {
// property: "tactical_urbanism",
// display: "Tactical Urbanism",
// options: ["Yes", "No"],
// tooltip: "For an explanation of this, see the Get Access page",
// },
// {
// property: "conservatorship",
// display: "Conservatorship Eligible",
// options: ["Yes", "No"],
// tooltip: "For an explanation of this, see the Get Access page",
// },
// {
// property: "side_yard_eligible",
// display: "Side Yard Eligible",
// options: ["Yes", "No"],
// tooltip: "For an explanation of this, see the Get Access page",
// },
// {
// property: "llc_owner",
// display: "LLC Owner",
// options: ["Yes", "No"],
// tooltip: "For an explanation of this, see the Get Access page",
// },
];

type FilterViewProps = {
  setCurrentView: (view: BarClickOptions) => void;
};

const FilterView: FC<FilterViewProps> = ({ setCurrentView }) => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-2xl pb-4">Filter</div>
        <Button
          size="sm"
          className="bg-green-60 text-white"
          onClick={() => setCurrentView("detail")}
        >
          <Check className="h-4 w-4" />
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
