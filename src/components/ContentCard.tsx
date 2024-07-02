import { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { ThemeButtonLink } from "./ThemeButton";
import { ArrowUpRight, CaretRight } from "@phosphor-icons/react";

interface Link {
  url: string;
  text: string;
}

interface Detail {
  label: string;
  data: string;
}

type ContentCardProps = {
  image: StaticImageData; // Image data
  alt: string; // Alt text for the image
  title: string;
  body: string;
  description?: string;
  labelUpkeep?: string;
  upkeepLevel?: string;
  linkurl?: string; // Make linkurl and linktext optional since they are conditionally rendered
  linktext?: string;
  links?: Link[]; // Array of links
  details?: Detail[]; // Array of detail content
  hasArrow?: boolean;
};

const ContentCard: FC<ContentCardProps> = ({
  // image,
  image,
  alt,
  title,
  body,
  description,
  linkurl,
  linktext,
  labelUpkeep,
  upkeepLevel,
  links,
  details,
  hasArrow,
}) => {
  return (
    <div
      className={
        hasArrow
          ? "bg-green-100 rounded-md hover:bg-green-200 transition-colors duration-[250ms]"
          : "bg-green-100 rounded-md"
      }
    >
      <div>
        <Image
          src={image.src}
          alt={alt}
          width={300}
          height={300}
          className="rounded-t-md w-full h-44 object-cover object-center"
        />
      </div>
      <div className="flex items-center p-6">
        <div>
          <h3 className="font-bold mb-2 heading-lg">{title}</h3>
          <p>{body}</p>

          {details && details.length > 0 && (
            <div className="grid gap-4 grid-cols-2 pt-5">
              {details.map((detail, index) => (
                <div key={index}>
                  <span className="font-bold">{detail.label}</span>{" "}
                  {detail.data}
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-start flex-col !items-start !text-left pt-5 !px-0 pt-5 !mx-0 !my-0">
            {links &&
              links.length > 0 &&
              links.map((link, index) => (
                <ThemeButtonLink
                  key={index}
                  className="text-blue-900 !bg-green-100 !px-0 !py-0 mb-2 h-5 !text-left !items-start"
                  color="tertiary"
                  aria-label={link.text + " Link opens in new tab"}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  endContent={
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  }
                  label={link.text}
                />
              ))}
          </div>
        </div>
        <div>
          {hasArrow ? (
            <CaretRight className="h-8 w-8" aria-hidden="true" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
