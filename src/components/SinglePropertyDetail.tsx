import { Button } from "@nextui-org/react";
import { MapGeoJSONFeature } from "maplibre-gl";
import Image from "next/image";
import {
  ArrowSquareOut,
  ArrowLeft,
  HandWaving,
  Handshake,
  Money,
  Tree,
  ProhibitInset,
  PiggyBank,
  ArrowsOut,
} from "@phosphor-icons/react";
import SinglePropertyInfoCard from "./SinglePropertyInfoCard";
import { Dispatch, SetStateAction } from "react";
import { BarClickOptions } from "@/app/map/page";

interface PropertyDetailProps {
  property: MapGeoJSONFeature | null;
  setSelectedProperty: (property: MapGeoJSONFeature | null) => void;
  setIsStreetViewModalOpen: Dispatch<SetStateAction<boolean>>;
  updateCurrentView: (view: BarClickOptions) => void;
}

const SinglePropertyDetail = ({
  property,
  setSelectedProperty,
  setIsStreetViewModalOpen,
  updateCurrentView
}: PropertyDetailProps) => {
  if (!property) return null;
  const { properties } = property;
  if (!properties) return null;

  const {
    access_process,
    address,
    council_district,
    guncrime_density,
    market_value,
    neighborhood,
    open_violations_past_year,
    owner_1,
    owner_2,
    parcel_type,
    priority_level,
    total_due,
    tree_canopy_gap,
    zipcode,
    OPA_ID,
  } = properties;
  const image = `https://storage.googleapis.com/cleanandgreenphilly/${OPA_ID}.jpg`;
  const atlasUrl = `https://atlas.phila.gov/${address}`;

  const priorityBgClassName = priority_level.includes("High")
    ? "bg-priority-high"
    : priority_level.includes("Medium")
    ? "bg-priority-medium"
    : priority_level.includes("Low")
    ? "bg-priority-low"
    : "";

  const Th = ({ children }: { children: React.ReactNode }) => (
    <th scope="row" className="table-cell whitespace-nowrap w-1/3">
      {children}
    </th>
  );


  return (
    <div
      className="w-full p-4"
      style={{
        paddingRight: "24px",
        paddingBottom: "24px",
        paddingLeft: "24px",
      }}
    >
      <div className="pb-4">
        <Button
          onPress={() => {setSelectedProperty(null); updateCurrentView("detail")}}
          className="bg-white rounded-md hover:bg-gray-100"
        >
          <ArrowLeft color="#3D3D3D" size={24} />{" "}
          <span className="body-md">Back</span>{" "}
        </Button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="relative h-48 w-full rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={`Property at ${address}`}
            layout="fill"
            objectFit="cover"
            unoptimized
          />
          <button
            className="absolute top-4 right-4 bg-white p-[10px] rounded-md hover:bg-gray-100"
            onClick={() => setIsStreetViewModalOpen(true)}
            aria-label="Open full screen street view map"
          >
            <ArrowsOut color="#3D3D3D" size={24} />
          </button>
        </div>
      </div>
      <div className="py-4 px-2">
        <div className="flex justify-between content-center">
          <h2
            className="font-bold heading-2xl"
            style={{
              textTransform: "capitalize",
            }}
          >
            {address.toLowerCase()}
          </h2>
          <div>
            <a
              href={atlasUrl}
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              className="flex p-2 items-center gap-1 body-md"
            >
              Atlas Link
              <ArrowSquareOut className="inline h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <table aria-label="Community Impact" className="w-full mb-3">
        <tbody
          style={{
            fontSize: "16px",
          }}
        >
          <tr>
            <Th>Suggested Priority</Th>
            <td className="table-cell">
              <div className="flex gap-1 items-center">
                <span
                  className={`inline-block w-4 h-4 ${priorityBgClassName}`}
                />
                {priority_level}
              </div>
            </td>
          </tr>
          <tr>
            <Th>Gun Crime Rate</Th>
            <td className="table-cell">{guncrime_density}</td>
          </tr>
          <tr>
            <Th>Tree Canopy Gap</Th>
            <td className="table-cell">{Math.round(tree_canopy_gap * 100)}%</td>
          </tr>
        </tbody>
      </table>

      <table aria-label="Land Information" className="w-full mb-4">
        <tbody>
          <tr style={{ display: "none" }}>
            <Th>Access Process</Th>
            <td className="table-cell">{access_process}</td>
          </tr>
          <tr>
            <Th>Owner</Th>
            <td className="table-cell">
              <p>{owner_1}</p>
              {owner_2 && <p>{owner_2}</p>}
            </td>
          </tr>
          <tr>
            <Th>Parcel Type</Th>
            <td className="table-cell">
              <p>{parcel_type}</p>
            </td>
          </tr>
          <tr>
            <Th>Zip Code</Th>
            <td className="table-cell">{zipcode}</td>
          </tr>
          <tr>
            <Th>RCO</Th>
            <td className="table-cell">{neighborhood}</td>
          </tr>
          <tr>
            <Th>Council District</Th>
            <td className="table-cell">{council_district}</td>
          </tr>
          <tr>
            <Th>Market Value</Th>
            <td className="table-cell">${market_value.toLocaleString()}</td>
          </tr>
          <tr>
            <Th>Tax Delinquency</Th>
            <td className="table-cell">{total_due ? "Yes" : "No"}</td>
          </tr>
          <tr>
            <Th>L&I Violations</Th>
            <td className="table-cell">{open_violations_past_year}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-bold mb-2 py-2 heading-xl">Getting Access</h3>
      <p className="mb-4">
        Based on the information about this property, we believe that you can
        get access to this property through:
      </p>

      <div className="flex mb-4 px-2 gap-4">
        {access_process === "Private Land Use Agreement" && (
          <SinglePropertyInfoCard
            title="Private Land Use Agreement"
            body="Given the price and ownership of this property, we believe the easiest way to get access to this property is through a land use agreement with its owner."
            icon={<Handshake className="h-12 w-12" aria-hidden="true" />}
          />
        )}
        {access_process === "Buy Property" && (
          <SinglePropertyInfoCard
            title="Buying a Property"
            body="This property is cheap enough that we believe you can buy it outright."
            icon={<Money className="h-12 w-12" aria-hidden="true" />}
          />
        )}
        {access_process === "Do Nothing (Too Complicated)" && (
          <SinglePropertyInfoCard
            title="Do Nothing (Too Complicated)"
            body="We believe access this property legally is too complicated to justify the effort."
            icon={<ProhibitInset className="h-12 w-12" aria-hidden="true" />}
          />
        )}
        {access_process === "Land Bank" && (
          <SinglePropertyInfoCard
            title="Land Bank"
            body="You may be able to acquire this property for a nominal or discounted price from the Land Bank."
            icon={<PiggyBank className="h-12 w-12" aria-hidden="true" />}
          />
        )}
      </div>

      <p>
        {" "}
        To learn more about what this means, visit{" "}
        <a
          href="/get-access"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          our <HandWaving className="inline h-6 w-6" aria-hidden="true" /> Get
          Access page.
        </a>
      </p>

      <h3 className="font-bold mb-2 py-2 heading-xl">
        Ways to transform the lot
      </h3>
      <p className="mb-4">
        To see different ways in which you might transform this property, see
        <a
          href="/transform-property"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {" "}
          our <Tree className="inline h-6 w-6" aria-hidden="true" /> Transform a
          Property page.
        </a>
      </p>

      {/*
      <div className="flex mb-4 px-2 gap-4">
        <SinglePropertyInfoCard
          title="Lot Cleanup"
          body="In a day, clean up with a street crew and PHS!"
          icon={<Broom className="h-12 w-12" aria-hidden="true" />}
        />
        <SinglePropertyInfoCard
          title="Community Garden"
          body="Set up a longer term, sustainable green space."
          icon={<PottedPlant className="h-12 w-12" aria-hidden="true" />}
        />
      </div>
      */}

      <h3 className="font-bold mb-2 py-2 heading-xl">Remove This Property</h3>
      <p>
        If you would like to request that we remove this property from the
        dashboard, please see our{" "}
        <a href="/request-removal" className="link">
          Request Removal page
        </a>
        .
      </p>
    </div>
  );
};

export default SinglePropertyDetail;
