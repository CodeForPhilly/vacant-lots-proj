import { Image } from "@nextui-org/react";

export default function MethodologyPage() {
  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 py-8 px-4 md:px-6 lg:px-24">
      <div className="px-4 md:px-8">
        <h1 className="heading-3xl font-bold mb-6">Methodology</h1>

        <h2 className="heading-2xl font-semibold mb-4">Overview</h2>

        <p className="body-md mb-4">
          Clean & Green Philly combines several public datasets in order to
          categorize Philadelphia’s vacant properties based on how important it
          is that someone intervene there and what the easiest way to do that
          is. To do this, we created a dataset based on{" "}
          <a
            href="https://www.pnas.org/doi/10.1073/pnas.1718503115"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the original research conducted by Dr. Eugenia South and her
            colleagues
          </a>
          , as well as many conversations with stakeholders, including community
          residents, CDCs, City government offices, academic researchers, and
          more.
        </p>

        <p className="body-md">
          Although we aim to simplify the decision-making process for users of
          Clean & Green Philly, we value transparency. Below, we lay out key
          aspects of our methodology. For further questions, feel free to reach
          out to us at{" "}
          <a href="mailto:cleanandgreenphl@gmail.com" className="link">
            cleangreenphilly@gmail.com
          </a>
          .
        </p>

        <br></br>

        <h2 className="heading-2xl font-semibold mb-4">
          How did you determine "possible impact"?
        </h2>

        <p className="body-md mb-4">
          Clean & Green Philly aims to reduce gun violence by cleaning and
          greening vacant properties. Accordingly, we base our calculation of
          possible impact on which properties 1) have high levels of gun
          violence and 2) are not clean and/or green. Additionally, we consider
          whether the property in question is already accounted for in{" "}
          <a
            href="https://phsonline.org/programs/transforming-vacant-land"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the Pennsylvania Horticultural Society’s LandCare Program
          </a>
          , which is Philadelphia’s original cleaning and greening initiative
          and the basis for Dr. South’s research.
        </p>

        <p className="body-md mb-4">
          Concretely, we combine Philadelphia Police Department data on gun
          violence with L&I data on various kinds of unclean or hazardous
          conditions (e.g., illegal dumping or abandoned cars),{" "}
          <a
            href="https://www.treeequityscore.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Tree Equity Score data
          </a>{" "}
          on tree canopy coverage, and PHS data on participation in either the
          Community LandCare or Philadelphia LandCare initiatives. These
          specific datasets were chosen based on the original research and
          extensive stakeholder engagement. The decision tree below indicates
          the specific breakpoints we use in our classification.
        </p>

        <br></br>

        <h2 className="heading-2xl font-semibold mb-4">
          How did you determine "access process"?
        </h2>

        <p className="body-md mb-4">
          Getting legal access to intervene in a property is a significant
          obstacle to cleaning and greening vacant properties. We hope to reduce
          this barrier by helping users identify the most properties with the
          simplest or most attainable routes of getting access. We identify
          these routes by considering various factors, such as the owner of the
          property (e.g., a private individual versus the Philadelphia Land
          Bank), the price of the property, and whether it may qualify for Act
          135 conservatorship. We based our criteria on local law and land
          disposition policies, as well as the availability and applicability of
          data. Some of our guiding references include{" "}
          <a
            href="https://groundedinphilly.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Grounded in Philly’s work
          </a>{" "}
          and{" "}
          <a
            href="https://k05f3c.p3cdn1.secureserver.net/wp-content/uploads/Resources/Philadelphia-Land-Bank-Disposition-Policies-2020.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            the Philadelphia Land Bank’s disposition policies
          </a>
          .
        </p>

        <p className="body-md mb-4">
          Additionally, we note that our access process labels are only
          suggestions. Anyone using Clean & Green Philly should verify the
          information we have provided before acting on it. When applicable, we
          encourage users to seek legal advice to ensure that they are in
          compliance with relevant laws. Please see{" "}
          <a href="/legal-disclaimer" className="link">
            our legal disclaimer
          </a>{" "}
          for more detail.
        </p>
      </div>

      <div className="px-4 md:px-8">
        <h2 className="heading-2xl font-semibold mb-4">
          Gun Crime Calculations
        </h2>

        <p className="body-md mb-4">
          It is impossible to reduce the impact of a shooting to a single
          statistic, and Clean & Green Philly applauds the organizations
          throughout our city who work to give voice to the profound effect of
          this epidemic on individuals, families, and communities. With this in
          mind, we have done our best to estimate the spatial intensity of gun
          violence in Philadelphia in a way that is 1) statistically rigorous
          and 2) as sensitive to local experience as possible. Following Dr.
          South’s original research, we use a kernel density estimate to
          calculate the intensity of gun crime at any given point in
          Philadelphia. Specifically, we use an adaptive bandwidth to better
          capture the local nuances of gun crime at small spatial scales. (For
          more on this, please see this memo from the data analysis team at the
          District Attorney’s Office [link].)
        </p>

        <div className="mt-1 flex items-center justify-center">
          <Image
            src="/kde_map.png"
            alt="A map of gun crime density in Philadelphia in March of 2023"
            width={700}
            height={700}
          />
        </div>

        <br></br>

        <h2 className="heading-2xl font-semibold mb-4">
          Protecting Community Gardens
        </h2>

        <p className="body-md mb-4">
          To protect community gardens from potential predatory development, we
          have excluded all properties listed by the Pennsylvania Horticultural
          Society and Neighborhoods Garden Trust as community gardens. If you
          believe that a property listed on Clean & Green Philly is a community
          garden, or should be removed from the site for another reason, please
          see our{" "}
          <a href="/request-removal" className="link">
            Request Removal page
          </a>
          .
        </p>

        <br></br>

        <h2 className="heading-2xl font-semibold mb-4">Our Code</h2>

        <p className="body-md mb-4">
          Clean & Green Philly was created by a Code for Philly team. In keeping
          with the open source ethos of Code for Philly, all of the code used to
          build this tool is available on{" "}
          <a
            href="https://github.com/CodeForPhilly/vacant-lots-proj"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            our GitHub repository
          </a>
          . We welcome feature requests, bug reports, code contributions, and
          more.
        </p>

        <br></br>

        <h2 className="heading-2xl font-semibold mb-4">Data Sources</h2>

        <p className="body-md mb-4">
          Documentation of the data that we use is available on{" "}
          <a
            href="https://github.com/CodeForPhilly/vacant-lots-proj/blob/main/docs/DATASETS.md"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            our GitHub repository
          </a>
          . We hope to continue to build out this documentation in the future.
        </p>
      </div>
    </div>
  );
}
