import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  Tooltip,
} from "@nextui-org/react";

export default function AboutPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:px-8">
        <h2 className="heading-2xl font-semibold mb-4">What is this?</h2>
        <p className="body-md mb-4">
          Philadelphia has a gun violence problem. Clean & Green Philly empowers
          Philadelphians to take action to solve it.
        </p>
        <p className="body-md">
          Our dashboard helps local residents, non-profit organizations, and
          government stakeholders identify and prioritize vacant properties for
          interventions, understand how to transform the properties they’ve
          identified, and connect with resources that will help them do so.
        </p>
        <br></br>
        <h2 className="heading-2xl font-semibold mb-4">Why make this?</h2>
        <p className="body-md mb-4">
          Clean & Green Philly was built to respond to Philadelphia’s historic
          gun violence problem. With homicides trending up since 2013, and a
          record high of 562 gun deaths in 2021, community members need concrete
          solutions.
        </p>
        <div className="mt-1 flex items-center justify-center">
          <Image
            src="/annual_guncrimes_plot.png"
            alt="A graph of gun crimes in Philadelphia since 2013"
            height={500}
          />
        </div>
        <p className="body-md mb-4">
          Many solutions focus on long-term impact, including{" "}
          <a
            href="https://controller.phila.gov/philadelphia-audits/fy23-anti-violence-budget/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            nearly 80% of the City of Philadelphia’s anti-violence spending
          </a>
          . But immediate, actionable approaches are also needed. Clean & Green
          Philly helps to fill that gap by promoting interventions in vacant
          properties. Our goal is to make it as easy as possible for everyday
          Philadelphians to take action to reduce gun violence in our city.
        </p>
        <p className="body-md mb-4">
          Research shows that greening and cleaning vacant properties is one of
          the most impactful, cost-effective interventions available to reduce
          gun violence in a neighborhood. For example, Dr. Eugenia South and her
          team have demonstrated that
          <a
            href="https://www.pnas.org/doi/10.1073/pnas.1718503115"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            greening vacant lots
          </a>{" "}
          in Philadelphia reduced gun violence by as much as 29% in the
          surrounding area.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Tooltip
            content="Click image to expand"
            color={"primary"}
            offset={-150}
          >
            <Image
              src="/main_article_summary.png"
              alt="Excerpts from research on reducing gun violence with vacant lot interventions"
              width={300}
              onClick={onOpen} // using the onOpen function from useDisclosure
              title="Click to expand"
              className="cursor-pointer mx-auto" // Center the image and change cursor on hover
            />
          </Tooltip>
          <Modal
            size="3xl"
            isOpen={isOpen}
            onClose={() => onOpenChange()}
            shadow="lg"
          >
            <ModalContent>
              <ModalBody className="flex flex-col items-center justify-center">
                {" "}
                {/* Centering content in the modal */}
                <Image
                  src="/main_article_summary.png"
                  alt="Excerpts from research on reducing gun violence with vacant lot interventions"
                  className="max-w-full h-auto" // Responsive width, maintain aspect ratio
                  width={600}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>
        <p className="body-md">
          Transforming Philadelphia’s vacant lots should be a key strategy to
          combating gun violence here. But in a city with nearly 40,000 vacant
          properties, the main obstacle is figuring out which properties to
          prioritize and how to get access to them. Clean & Green Philly helps
          solve this problem by using public data to identify high-priority
          properties, filter them based on the possible ways of intervening, and
          connect users to resources that can support these interventions.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <Image
            src="/transformed_lots.png"
            alt="Examples of transformed lots"
            width={600}
            height={400}
          />
        </div>
      </div>
      <div className="md:px-8">
        <h2 className="heading-2xl font-semibold mb-4">How was this built?</h2>
        <p className="body-md mb-4">
          Clean & Green Philly combines several public datasets in order to
          categorize Philadelphia’s vacant properties based on how important it
          is that someone intervene there and what the easiest way to do that
          is.
        </p>
        <p className="body-md mb-4">
          We created the dataset based on the original research conducted by Dr.
          Eugenia South and her colleagues, as well as many conversations with
          stakeholders, including community residents, CDCs, City government
          offices, academic researchers, and more.
        </p>
        <p className="body-md">
          All of the code used to build this tool is{" "}
          <a
            href="https://github.com/CodeForPhilly/vacant-lots-proj"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            available on our GitHub repository
          </a>
          . We hope to add data documentation in the near future. For further
          questions about our methods, feel free to reach out to us at{" "}
          <a href="mailto:cleanandgreenphl@gmail.com" className="link">
            cleangreenphilly@gmail.com
          </a>
          .
        </p>
        <br></br>
        <h2 className="heading-2xl font-semibold mb-4">Who built this?</h2>
        <p className="body-md mb-4">
          Clean & Green Philly was built by a team of Code for Philly
          volunteers. The project was created and led by{" "}
          <a
            href="https://www.nlebovits.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Nissim Lebovits
          </a>
          .{" "}
          <a
            href="https://www.willonabike.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Will Budreau
          </a>{" "}
          was responsible for user testing and research,{" "}
          <a
            href="https://wwww.brandonfcohen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            Brandon Cohen
          </a>{" "}
          was the lead developer, and{" "}
          <a
            href="https://www.nathanielsidwell.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            Nathaniel Sidwell
          </a>{" "}
          led the UX team. Thanks, too, to the many other contributors along the
          way.
        </p>
        <p className="body-md mb-4">
          Our efforts have been informed and advanced by local residents,
          community leaders, City staff, faculty at the University of
          Pennsylvania, Temple University, and Thomas Jefferson University; and
          many others. Special thanks are due to the Code for Philly leadership,
          Jon Geeting, Dante Leonard, Mjumbe Poe, and Vicky Tam.
        </p>
        <p className="body-md">
          Lastly, we are grateful to Dr. Eugenia South and her colleagues, whose
          work this project depends on.
        </p>
        <br></br>
        <h2 className="heading-2xl font-semibold mb-4">Feedback</h2>
        <p className="body-md mb-4">
          If you find issues in this website or would like to offer us feedback,
          please reach out to us at{" "}
          <a href="mailto:cleanandgreenphl@gmail.com" className="link">
            cleanandgreenphl@gmail.com
          </a>
          .
        </p>
        <h2 className="heading-2xl font-semibold mb-4">Removing Properties</h2>
        <p className="body-md mb-4">
          If you would like to request that we remove a property from the
          dashboard, please see our{" "}
          <a href="/request-removal" className="link">
            Request Removal page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
