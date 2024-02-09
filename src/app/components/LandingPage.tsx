import { Button, Link, Image } from "@nextui-org/react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

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

const LandingPage = () => (
  <div className=" mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-10">
      <div className="ml-12 text-3xl">
        <h1 className="text-green-600  md:text-2xl lg:text-6xl font-thin  md:leading-[3rem]">
          <span className="block leading-tight">
            Cleaning and greening vacant <br/> properties can{" "}
            <span className="font-extrabold">reduce gun violence</span> in <br/> neighborhoods <span className="font-extrabold">by as much as 29%.</span>
          </span>
        </h1>
      </div>
      <div className="flex flex-col justify-between items-end px-8">
        <div className="text-gray-700 mb-4">
          {/* Responsive paragraphs */}
          <p className="hidden md:block text-2xl mr-1">
            This tool can empower anyone to <br /> find properties that would make a <br /> significant impact in Philadelphia <br /> and take action.
          </p>
        </div>
        <div className="space-x-2">
          <Link href="/map">
          <button type="button" className="text-white bg-green-600 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600">
          <svg className="rtl:rotate-180 w-4 h-4 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
            <text className="text-lg">
            Find properties
            </text>
          </button>
          </Link>
          <Link href="/about">
          <button type="button" className="border bg-slate-200  hover:bg-slate-400 focus:ring-4 focus:outline-none focus:ring-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          <svg className="rtl:rotate-180 w-4 h-4 m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="grey" viewBox="0 0 14 10">
          <path stroke="grey" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          <text className="text-slate-500 text-lg">Learn more</text>
          </button>
          </Link>
        </div>
      </div>
    </div>
    <div className="ml-12 grid md:grid-cols-3 gap-4">
      {images.map(({ src, alt }) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          width="100%"
          height="auto"
          radius="none"
        />
      ))}
    </div>
  </div>
);

export default LandingPage;
