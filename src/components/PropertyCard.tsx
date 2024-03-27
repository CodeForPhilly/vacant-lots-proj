import Image from "next/image";
import { Chip } from "@nextui-org/react";

interface PropertyCardProps {
  feature: any;
  setSelectedProperty: (feature: any) => void;
}

function toTitleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getPriorityClass(priorityLevel: string) {
  switch (priorityLevel) {
    case "High":
      return "bg-red-200 text-red-800"; // Style for High Priority
    case "Medium":
      return "bg-yellow-200 text-yellow-800"; // Style for Medium Priority
    case "Low":
      return "bg-green-200 text-green-800"; // Style for Low Priority
    default:
      return "bg-gray-500 border-gray-700"; // Default style
  }
}

const PropertyCard = ({ feature, setSelectedProperty }: PropertyCardProps) => {
  const { address, guncrime_density, tree_canopy_gap, priority_level, OPA_ID } =
    feature.properties;

  const image = `https://storage.googleapis.com/cleanandgreenphilly/${OPA_ID}.jpg`;
  const formattedAddress = toTitleCase(address);
  const priorityClass = getPriorityClass(priority_level);

  const handleClick = () => setSelectedProperty(feature);
  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === "Enter" || e.key === "Space") {
      handleClick();
    }
  };

  return (
    <div
      className="sm:max-w-sm w-full lg:w-1/2 p-2 max-lg:px-4 cursor-pointer max-lg:flex max-lg:justify-center"
      onClick={handleClick}
    >
      <div className="max-w-sm w-full h-full">
        <div className="bg-white h-full flex flex-col rounded-md overflow-hidden p-2 hover:bg-gray-100">
          <div
            className="relative w-full rounded-lg overflow-hidden"
            style={{ height: "160px", width: "auto" }}
          >
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="cover"
              unoptimized
            />
          </div>
          <div className="grow p-2">
            <button className="font-bold heading-lg" onKeyDown={handleKeyDown}>
              {formattedAddress}
            </button>
            <div className="text-gray-700 body-sm">
              {guncrime_density} Gun Crime Rate
            </div>
          </div>
          <div className="px-1">
            <Chip
              classNames={{
                base: `${priorityClass} border-small border-white/50`,
                content: "body-sm",
              }}
            >
              {priority_level + " Priority"}
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
