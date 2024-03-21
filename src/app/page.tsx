import { InfoGraphicSection } from "@/components/InfoGraphicSection";
import { NumberedIconCard } from "@/components/NumberedIconCard";
import imageCleaning from "@/images/cleaningLot.jpg";
import imageGunCrimes from "@/images/graphic-guncrimes.png";
import imageResearch from "@/images/graphic-research.png";
import imageGreened from "@/images/greenedLot.jpg";
import imageStep1 from "@/images/landing-step-1.png";
import imageStep2 from "@/images/landing-step-2.png";
import imageStep3 from "@/images/landing-step-3.png";
import { Button, Image, Link } from "@nextui-org/react";
import {
  PiArrowRight,
  PiBinoculars,
  PiKey,
  PiTree,
  PiArrowDown,
} from "react-icons/pi";
import { FC } from "react";
import { TextContentLayout } from "./layout";

const images = [
  {
    src: "/dirtyLot.jpg",
    alt: "Dirty lot in Philadelphia",
  },
  {
    src: "/cleaningLot.jpg",
    alt: "Cleaning lot in Philadelphia",
  },
  {
    src: "/greenedLot.jpg",
    alt: "Greened lot in Philadelphia",
  },
];

const LandingPage: FC = () => {
  return (
    <TextContentLayout>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-10 my-10 md:mb-16">
          <h1 className="heading-3xl font-extrabold leading-tight md:leading-[3rem] text-pretty text-left pr-9 col-span-2">
            Cleaning and greening vacant properties can{" "}
            <span className="text-green-600 font-extrabold">
              reduce gun violence
            </span>{" "}
            by as much as 29%.
          </h1>
          <div className="flex flex-col justify-between items-start">
            <div className="text-gray-700 mb-4">
              <p className="body-lg text-balance">
                This tool can empower community groups and organizations trying
                to clean and green vacant properties to reduce gun violence.
              </p>
            </div>
            <Button
              href="#guncrimes"
              as={Link}
              className="bg-gray-200 iconLink"
            >
              <PiArrowDown className="w-5 h-5" />
              <span className="body-md">Learn How</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {images.map(({ src, alt }, index) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width="100%"
              height="auto"
              className={`rounded-[8px] aspect-video md:aspect-auto object-cover object-center ${
                // only show the middle image on mobile
                !(index % 2) && "hidden md:block"
              }`}
            />
          ))}
        </div>

        <div id={"guncrimes"} className="my-20">
          <InfoGraphicSection
            header={{ text: "Philadelphia has a gun violence problem." }}
            body={{
              text: (
                <>
                  With homicides trending up since 2013, and a record high of
                  562 gun deaths in 2021, community members need concrete
                  solutions. Many solutions focus on long-term impact, including{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://controller.phila.gov/philadelphia-audits/fy23-anti-violence-budget/#/"
                    className="default"
                  >
                    nearly 80% of the City of Philadelphia's anti-violence
                    spending
                  </a>
                  , but immediate, actionable approaches are also needed.
                </>
              ),
            }}
            image={{
              data: imageGunCrimes,
            }}
          />
        </div>

        <div id={"research"} className="my-20">
          <InfoGraphicSection
            header={{ text: "Cleaning and greening reduces violence by 29%." }}
            body={{
              text: (
                <>
                  Research shows that greening and cleaning vacant properties is
                  one of the most impactful, cost-effective interventions
                  available to reduce gun violence in a neighborhood. Dr.
                  Eugenia South and her team have demonstrated that{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href="https://www.pnas.org/doi/10.1073/pnas.1718503115"
                    className="default"
                  >
                    greening vacant lots
                  </a>{" "}
                  in Philadelphia reduced gun violence by as much as 29% in the
                  surrounding area.
                </>
              ),
            }}
            image={{
              data: imageResearch,
              className: "aspect-[4/3] object-cover object-center",
            }}
          />
        </div>

        <div id={"community"} className="my-20">
          <InfoGraphicSection
            header={{
              text: "Community groups and organizations are taking action.",
            }}
            body={{
              text: "Community groups have been cleaning up lots in their own neighborhoods for decades. Large organizations like the Pennsylvania Horticulture Society have cleaned, greened and now maintain thousands of lots. Their efforts have been instrumental in proving this works.",
            }}
            image={{
              data: imageCleaning,
              className: "aspect-video object-cover object-center",
            }}
          />
        </div>

        <div id={"actions"} className="my-20">
          <InfoGraphicSection
            header={{
              text: "We are building the ultimate toolkit to help them.",
            }}
            body={{
              text: "We are a passionate group of volunteers with a vision to empower citizens, groups, and organizations to do impactful data-driven environmental interventions in Philadelphia.",
            }}
            component={
              <ol role="list" className="grid grid-cols-3 gap-5 w-full">
                <NumberedIconCard
                  icon={PiBinoculars}
                  num={1}
                  body={"Find a Vacant Property"}
                />
                <NumberedIconCard
                  icon={PiKey}
                  num={2}
                  body={"Get Access to the Property"}
                />
                <NumberedIconCard
                  icon={PiTree}
                  num={3}
                  body={"Transform the Property"}
                />
              </ol>
            }
          />
        </div>

        <div id={"step-1"} className="my-20">
          <InfoGraphicSection
            header={{
              text: (
                <div className="flex flex-row space-x-2">
                  <span>1.</span>
                  <h3>Find vacant properties that match your goals.</h3>
                </div>
              ),
              as: "div",
            }}
            body={{
              text: "You can search and find vacant properties that match your goals. Understand the data around that property and the surrounding neighborhoods.",
            }}
            image={{
              data: imageStep1,
            }}
            link={{
              icon: PiBinoculars,
              label: "Find Properties",
              href: "/map",
            }}
          />
        </div>

        <div id={"step-2"} className="my-20">
          <InfoGraphicSection
            header={{
              text: (
                <div className="flex flex-row space-x-2">
                  <span>2.</span>
                  <h3>
                    Get data-driven suggestions on how to legally get access.
                  </h3>
                </div>
              ),
              as: "div",
            }}
            body={{
              text: "How do you actually get access to the property legally? This is often confusing and baffling to people. We use the property data to suggest the most convenient options and provide guidance on the process.",
            }}
            image={{
              data: imageStep2,
            }}
            link={{
              icon: PiKey,
              label: "Get Access",
              href: "/get-access",
            }}
          />
        </div>

        <div id={"step-3"} className="my-20">
          <InfoGraphicSection
            header={{
              text: (
                <div className="flex flex-row space-x-2">
                  <span>3.</span>
                  <h3>See all the ways you can transform properties.</h3>
                </div>
              ),
              as: "div",
            }}
            body={{
              text: "We guide you through the most common, convenient and affordable ways to transform properties and resources on how to do it.",
            }}
            image={{
              data: imageStep3,
            }}
            link={{
              icon: PiTree,
              label: "Transform",
              href: "/transform-property",
            }}
          />
        </div>

        <div id={"get-started"} className="my-20">
          <InfoGraphicSection
            header={{ text: "Let's Do This!" }}
            body={{
              text: "There's groups and organizations throughout Philadelphia taking action and seeing impacts in their community and you can too.",
            }}
            image={{
              data: imageGreened,
              className: "aspect-video object-cover object-center",
            }}
            link={{
              icon: PiArrowRight,
              label: "Get Started",
              href: "/map",
            }}
          />
        </div>
      </div>
    </TextContentLayout>
  );
};

export default LandingPage;
