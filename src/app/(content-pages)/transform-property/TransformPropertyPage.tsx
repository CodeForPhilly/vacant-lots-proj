import Image from "next/image";
import beforeAfter from "@/images/beforeAfter.png";
import { ArrowUpRight } from "@phosphor-icons/react";
import { ThemeButtonLink } from "@/components/ThemeButton";
import cleanup from "@/images/lot-cleanup.png";
import plant from "@/images/plant-trees.jpeg";
import maintain from "@/images/maintain.jpeg";
import fence from "@/images/fence.png";
import pollinators from "@/images/flowers.png";
import garden from "@/images/community-garden.jpeg";
import meadow from "@/images/meadow.jpeg";
import bikeracks from "@/images/bike-rack.jpeg";
import stormwater from "@/images/stormwater.png";
import restaurant from "@/images/restaurant.jpeg";
import housing from "@/images/housing.png";
import park from "@/images/install-a-park.jpeg";
import ContentCard from "../../../components/ContentCard";

export default function TransformPropertyPage() {
  const parkInATruckUrl =
    "https://www.jefferson.edu/academics/colleges-schools-institutes/architecture-and-the-built-environment/programs/landscape-architecture/park-in-a-truck.html";
  const jumpStartUrl = "https://www.jumpstartphilly.com/";
  const localRepresentativesUrl = "https://phlcouncil.com/council-members/";

  return (
    <>
      <h1 className="heading-3xl font-bold mb-6">Transform a Property</h1>
      <p className="body-lg mb-12">
        After gaining access to the property, you can transform a property to
        improve the quality of life in the neighborhood.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-10">
        <Image
          src={beforeAfter}
          alt={
            "A Philadelphia lot before a clean up and the same lot, filled with trees and greenery after a clean up."
          }
          placeholder="blur"
          className="w-full overflow-hidden rounded-[20px] aspect-video md:aspect-auto object-cover object-center"
        />
      </div>

      <h2 className="heading-2xl font-bold mt-8 mb-6">Basic Interventions</h2>
      <p className="body-md">
        The original research that Clean &amp; Green Philly is based on promotes
        “cleaning and greening.” This includes removing trash, grading the land,
        planting trees, installing low fences, and maintaining the property.
        These are low-cost interventions and have been proven to be highly
        effective; even something as simple as picking up trash can have a big
        impact.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-6">
        <ContentCard
          image={cleanup}
          alt=""
          title="Clean Garbage & Debris"
          body="Organizing a community clean-up or hiring a waste removal service to clean a property enhances its appearance, improves residents' mental health, and eliminates potential hazards."
          details={[
            {
              label: "Cost:",
              data: "Low",
            },
            {
              label: "Upkeep:",
              data: "None",
            },
          ]}
          links={[
            {
              url: "https://nkcdc.org/community/cleaning-greening/community-cleanup-resources/",
              text: "Resources on NKCDC",
            },
          ]}
        />

        <ContentCard
          image={plant}
          alt=""
          title="Plant Trees"
          body="Planting trees not only adds beauty and shade to the property but also contributes to urban cooling, cleaner air, and habitat for wildlife."
          details={[
            {
              label: "Cost:",
              data: "Low",
            },
            {
              label: "Upkeep:",
              data: "Low",
            },
          ]}
          links={[
            {
              url: "https://treephilly.org/yard-trees-2/",
              text: "Help on Tree Philly",
            },
          ]}
        />

        <ContentCard
          image={maintain}
          alt=""
          title="Maintain Regularly"
          body="Mowing grass, raking leaves, and clearing trash regularly ensures the lot remains clean, safe, and attractive, promoting community pride and deterring illegal activities."
          details={[
            {
              label: "Cost:",
              data: "Low",
            },
            {
              label: "Upkeep:",
              data: "Low",
            },
          ]}
        />

        <ContentCard
          image={fence}
          alt=""
          title="Install Low Fences"
          body="Hiring a contractor to install low fences defines boundaries, enhances safety, and improves aesthetics while allowing for easy access and integration with the neighborhood."
          details={[
            {
              label: "Cost:",
              data: "Medium",
            },
            {
              label: "Upkeep:",
              data: "Low",
            },
          ]}
        />
      </div>

      <h2 className="heading-2xl font-bold mt-8 mb-6">
        Advanced Interventions
      </h2>
      <p className="body-md mb-4">
        Different properties have different opportunities and different
        challenges. Some properties might be a great spot for a rain garden but
        not for a playground. Likewise, you wouldn&rsquo;t want to start a
        community garden in a vacant lot that doesn&rsquo;t get any sun. To
        better understand what your options are for a specific property, try
        filling out the{" "}
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://detroitfuturecity.com/whatwedo/land-use/DFC-lots/"
          className="link"
        >
          Detroit Future City vacant property quiz
        </a>{" "}
        (the recommendations work for Philadelphia, too). It&rsquo;s meant to
        help users understand the best options for their specific properties.
        Also, remember to think about other constraints, like how much funding
        you have, and how much maintenance you&rsquo;re willing or able to do.
      </p>
      <p className="body-md mb-4">
        With funding and community support, there are many ways to transform a
        vacant property. We list several ideas below.
        {/* Check out our{" "}
          <a href="/resources" className="link">
            Resources Page
          </a>{" "}
          to explore more like these: */}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 py-6">
        <ContentCard
          image={pollinators}
          alt=""
          title="Plant Pollinator Garden"
          body="Creating a pollinator garden promotes biodiversity and beautifies the lot with colorful flowers."
          links={[
            {
              url: "https://phsonline.org/uploads/attachments/ckacmpaca1evpj7rasp7ty5aq-pollinator-gardens-infosheet.pdf",
              text: "Help from PHS",
            },
          ]}
        />

        <ContentCard
          image={garden}
          alt=""
          title="Establish a Community Garden"
          body="Establishing a community garden provides fresh produce, promotes social interaction, and transforms the lot into a vibrant space for residents."
          links={[
            {
              url: "https://groundedinphilly.org/",
              text: "Resources from Grounded in Philly",
            },
          ]}
        />

        <ContentCard
          image={meadow}
          alt=""
          title="Plant a Meadow"
          body="Planting native wildflowers and grasses brings natural beauty, supports local wildlife, and requires less maintenance than traditional landscaping."
          links={[
            {
              url: "https://extension.psu.edu/meadows-and-prairies-wildlife-friendly-alternatives-to-lawn",
              text: "Instructions from Penn State",
            },
          ]}
        />

        <ContentCard
          image={bikeracks}
          alt=""
          title="Install Bike Parking"
          body="Installing bike parking encourages sustainable transportation, reduces traffic, and supports a healthier lifestyle for community members."
          links={[
            {
              url: "https://streetboxphl.com/",
              text: "Help from StreetBoxPHL",
            },
            {
              url: "https://www.phila.gov/media/20211109093815/OTIS-bike-corral-application.pdf",
              text: "Guidelines from City of Phila",
            },
          ]}
        />

        <ContentCard
          image={stormwater}
          alt=""
          title="Install Green Stormwater Infrastructure"
          body="Rain gardens and other infrastructure reduces stormwater runoff, prevents flooding, and improves water quality while adding greenery to the landscape."
          links={[
            {
              url: "https://groundedinphilly.org/",
              text: "Help from Phila Water Department",
            },
          ]}
        />

        <ContentCard
          image={restaurant}
          alt=""
          title="Offer Outdoor Restaurant Space"
          body="Providing seating and shade to restaurants supports local business while creating a dynamic street life."
          links={[
            {
              url: "https://streetboxphl.com/",
              text: "Help from StreetBoxPHL",
            },
            {
              url: "https://www.phila.gov/services/permits-violations-licenses/get-a-license/business-licenses/food-businesses/get-a-streetery-license/",
              text: "Guidelines from City of Phila",
            },
          ]}
        />

        <ContentCard
          image={housing}
          alt=""
          title="Affordable Housing"
          body="Developing affordable housing helps address Philadelphia's housing crisis and can combat gentrification by enabling residents to stay in their neighborhood."
          links={[
            {
              url: "https://phdcphila.org/land/buy-land/propose-affordable-housing-project/",
              text: "Help from PHDC",
            },
            {
              url: "https://www.habitatphiladelphia.org/homeownership-program/",
              text: "Help from Habitat from Humanity",
            },
            {
              url: "https://www.lisc.org/philly/our-priorities/affordable-housing/",
              text: "Help from LISC",
            },
          ]}
        />

        <ContentCard
          image={park}
          alt=""
          title="Install a Park"
          body="Providing seating, green spaces, and walking paths offers recreational space, improves public health, and enhances quality of life."
          links={[
            {
              url: "https://www.jefferson.edu/academics/colleges-schools-institutes/architecture-and-the-built-environment/programs/landscape-architecture/park-in-a-truck.html",
              text: "Help from Park in a Truck",
            },
          ]}
        />
      </div>

      <h2 className="heading-2xl font-bold mt-8 mb-6">Get Help</h2>
      <p className="body-md">
        Many organizations in Philadelphia offer support transforming vacant
        properties. Currently, we list a handful here. We hope to add more
        documentation for this in the future.
      </p>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Park in a Truck</h3>
        <p className="body-md mb-4">
          Park in a Truck supports community residents in quickly building
          custom parks. They&rsquo;ve developed a toolkit that helps community
          groups design and build parks that fit their needs. They also offer
          training and technical support to help communities create and maintain
          their parks.
        </p>
        <ThemeButtonLink
          className="text-blue-900 inline-flex"
          href={parkInATruckUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          label="Park in a Truck"
          endContent={<ArrowUpRight aria-hidden="true" />}
          aria-label="Open Park in a Truck in a new tab"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Jump Start</h3>
        <p className="body-md mb-4">
          Jump Start is a community-oriented lender that offers acquisition and
          construction financing for residential and mixed-use investment
          projects throughout the City of Philadelphia. They provide mentorship
          and training to Black and Brown developers to help them succeed in a
          competitive real estate market while also reducing blight, building
          local wealth, and encouraging a mix of affordable and market-rate
          housing in historically neglected neighborhoods.
        </p>
        <ThemeButtonLink
          className="text-blue-900 inline-flex"
          href={jumpStartUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          label="Jump Start"
          endContent={<ArrowUpRight aria-hidden="true" />}
          aria-label="Open Jump Start in a new tab"
        />
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Local Representatives</h3>
        <p className="body-md">
          Your local representatives will be crucially allies in helping you
          push your project forward and cut through red tape. Contact them with
          an explanation of what you want to do and why, and ask for their
          support. They can help you navigate the legal process, find funding,
          and connect you with other resources.
        </p>
        <ThemeButtonLink
          className="text-blue-900  inline-flex"
          href={localRepresentativesUrl}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
          label="City Council Directory"
          endContent={<ArrowUpRight aria-hidden="true" />}
          aria-label="Open City Council directory in a new tab"
        />
      </div>

      <h2 className="heading-2xl font-bold mt-8 mb-6">
        Additional Considerations
      </h2>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Funding</h3>
        <p className="body-md mb-4">
          Getting funding is a vital part of returning vacant properties to
          productive use. Funding can come from many sources, such as grants
          from local government and non-profit funders, public-private partners,
          and crowd-sourced fundraising. In the future, we plan to add a page to
          list common funding sources and explain how to use data from Clean
          &amp; Green Philly to support a grant application.
        </p>
        <p className="body-md mb-4">
          Any amount of funding can be useful. Many effective interventions such
          as property cleanups can be accomplished for a few hundred dollars—or
          even for free, with volunteer support! When planning your property
          intervention, consider what level of funding you have access to, and
          how you can get the most bang for your buck.
        </p>
        <p className="body-md mb-4">
          Funding is needed not only for the initial property transformation,
          but also to maintain the project in the long term. When planning your
          project, consider dividing your funding into two parts: one part to
          pay for the initial intervention, and a second part—at least equal to
          the first part—to pay for maintaining your project in the future.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Maintenance</h3>
        <p className="body-md mb-4">
          Transforming a vacant property isn&rsquo;t a one-and-done event. In
          fact, many properties that are currently vacant were transformed years
          ago—but not maintained in the decades since. In order to make sure
          that your intervention is high-impact and long-lived, make sure to
          have a maintenance plan in place.
        </p>
        <p className="body-md mb-4">
          Consider who will be responsible for maintaining the property, what
          their tasks will be, what kind of resources they will need, and how
          you will fund this ongoing maintenance. Often, partnering with an
          established organization like a CDC can help make sure that you have
          the capacity and resources needed to ensure that your intervention
          continues to be effective for many years into the future.
        </p>
      </div>

      <div className="bg-gray-100 rounded-lg p-8 mt-8">
        <h3 className="heading-xl font-bold mb-4">Gentrification </h3>
        <p className="body-md">
          Our goal is to help community groups reduce violence through cleaning
          and greening in their neighborhoods. We recognize that this may lead
          to increased property values and rental prices, which can put
          already-marginalized Philadelphians at risk of displacement. To
          understand how we&rsquo;re working to mitigate the risk of
          &ldquo;green gentrification,&rdquo;{" "}
          <a href="/gentrification" className="link">
            click here to read more
          </a>
          .
        </p>
      </div>
    </>
  );
}
