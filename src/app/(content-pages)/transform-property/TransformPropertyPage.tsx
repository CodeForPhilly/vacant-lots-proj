import { Accordion, AccordionItem } from "@nextui-org/react";

export default function TransformPropertyPage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
      <div className="flew-grow container mx-auto pt-20">
        <h1 className="heading-3xl font-bold mb-6">Transform a Property</h1>

        <p className="body-md">
          Clean & Green Philly aims to help reduce gun violence by intervening
          in vacant properties. Very simply, this means improving the property.
          This can range from removing trash to planting a community garden,
          from trimming trees to building affordable housing. Below, we lay out
          ways to transform a vacant property into something that positively
          impacts the neighborhood around it.
        </p>

        <h2 className="heading-2xl font-bold mt-8">Types of Interventions</h2>
        <p className="body-md">
          The original research that Clean & Green Philly is based on promotes
          “cleaning and greening”. This includes removing trash, grading the
          land, planting trees, installing low fences, and maintaining the
          property. These are low-cost interventions and have been proven to be
          highly effective; even something as simple as cleaning up trash can
          have a big impact. That said, there are many ways to transform a
          vacant property. You could, for example:
        </p>
        <ul className="list-disc pl-6 my-4">
          <li>Partner with a local restaurant to offer outdoor eating</li>
          <li>Install bike parking</li>
          <li>
            Work with the Philadelphia Water Department to install green
            stormwater infrastructure
          </li>
          <li>
            Plant a pollinator garden to attract birds, butterflies, and bees
          </li>
          <li>
            Connect with a non-profit organization to build affordable housing
          </li>
        </ul>
        <p className="body-md">
          These are just some of the many possibilities. Remember to be both
          creative and practical: there is no one-size-fits-all solution, and
          Philadelphia will need a variety of uses in its vacant properties,
          including green space, housing, parks, commercial space, and more.
        </p>

        <h2 className="heading-2xl font-bold mt-8">
          What's right for my property?
        </h2>
        <p className="body-md">
          Different properties have different opportunities and different
          challenges. Some properties might be a great spot for a rain garden
          but not for a playground. Likewise, you wouldn’t want to start a
          community garden in a vacant lot that doesn’t get any sun. To better
          understand what your options are for a specific property, try filling
          out the{" "}
          <a
            href="https://detroitfuturecity.com/whatwedo/land-use/DFC-lots/"
            className="link"
          >
            Detroit Future City vacant property quiz
          </a>
          . It’s meant to help users understand the best options for their
          specific properties. Although it was built for users in Detroit, it’s
          still helpful here in Philadelphia. Also, remember to think about
          other constraints, like how much funding you have, and how much
          maintenance you’re willing or able to do.
        </p>

        <h2 className="heading-2xl font-bold mt-8">Where can I get help?</h2>
        <p className="body-md">
          Many organizations in Philadelphia offer support transforming vacant
          properties.
        </p>
        <h3 className="heading-xl font-bold mt-8 mb-4">
          Community Groups and Local Representatives
        </h3>
        <p className="body-md">
          For help with greening projects, reach out to local Neighborhood
          Advisory Committees, Community Development Corporations, or Registered
          Community Organizations. They can guide you through the planning
          process and help with local rules. Local representatives can also
          support you, especially if you're facing red tape. Bring them a solid
          plan and show how your project can improve the community.
        </p>

        <h3 className="heading-xl font-bold mt-8 mb-4">
          Garden Justice Legal Initiative
        </h3>
        <p className="body-md">
          The{" "}
          <a
            href="https://pubintlaw.org/cases-and-projects/garden-justice-legal-initiative-gjli/"
            className="link"
          >
            Garden Justice Legal Initiative
          </a>{" "}
          supports community gardens and urban farms, offering free legal help,
          policy research, and community education. They work with coalitions
          like{" "}
          <a href="https://soilgeneration.org/" className="link">
            Soil Generation
          </a>{" "}
          to empower residents to use vacant land for gardens and farming,
          providing tools and information through training sessions and their
          online resource,{" "}
          <a href="https://groundedinphilly.org/" className="link">
            Grounded in Philly
          </a>
          .
        </p>

        <h3 className="heading-xl font-bold mt-8 mb-4">StreetBoxPHL</h3>
        <p className="body-md">
          <a href="https://streetboxphl.com/" className="link">
            StreetBoxPHL
          </a>{" "}
          helps community groups revitalize urban spaces by making parklets,
          pedestrian plazas, and bike corrals. Their tools can quickly transform
          underused spaces into vibrant, green areas that benefit the whole
          community. They offer technical support, a street furniture library,
          and help with insurance requirements.
        </p>

        <h3 className="heading-xl font-bold mt-8 mb-4">Park in a Truck</h3>
        <p className="body-md">
          <a
            href="https://www.jefferson.edu/academics/colleges-schools-institutes/architecture-and-the-built-environment/programs/landscape-architecture/park-in-a-truck.html"
            className="link"
          >
            Park in a Truck
          </a>{" "}
          supports community residents in quickly building custom parks. They've
          developed{" "}
          <a
            href="https://www.jefferson.edu/content/dam/academic/cabe/landscape-architecture/park-in-a-truck/toolkit/PiaT-toolkit-2022.pdf"
            className="link"
          >
            a toolkit
          </a>{" "}
          that helps community groups design and build parks that fit their
          needs. They also offer training and technical support to help
          communities create and maintain their parks.
        </p>

        <h2 className="heading-2xl font-bold mt-8">
          What else should I think about?
        </h2>

        <div className="body-md">
          <Accordion variant="light" selectionMode="multiple">
            <AccordionItem
              key="1"
              aria-label="Maintenance"
              title="Maintenance"
              subtitle="Click to expand"
              className="font-bold text-large"
            >
              <div className="text-base font-normal">
                It's also key to make sure that the improvements you make can
                keep going for a long time. Getting people in the area to care
                about and look after these spaces can really help. Choose
                projects that don't cost much but still have a big impact, so
                they're easier for the community to maintain. Be smart about
                legal stuff, especially with private property, and work with
                local authorities to make sure everything is okay there.
              </div>
            </AccordionItem>

            <AccordionItem
              key="2"
              aria-label="Funding"
              title="Funding"
              subtitle="Click to expand"
              className="font-bold text-large"
            >
              <div className="text-base font-normal">
                When it comes to funding, try to connect with local businesses
                and community groups. Small grants and donations might be easier
                to get for groups like yours. And don't forget about raising
                money right in the community through events or online campaigns.
              </div>
            </AccordionItem>

            <AccordionItem
              key="3"
              aria-label="Gentrification"
              title="Gentrification"
              subtitle="Click to expand"
              className="font-bold text-large"
            >
              <div className="text-base font-normal">
                Remember, your projects shouldn't push out the current
                residents. Keep them at the heart of what you do, and keep an
                eye on how things change in the neighborhood. Work together with
                other local groups, schools, and businesses - it's a great way
                to get more resources and ideas. Have regular meetings with
                people in the community to keep them in the loop and involved in
                decisions.
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
