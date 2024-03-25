import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { PiBinoculars, PiKey, PiTree, PiInfo } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import IconLink from "./IconLink";
import MobileNav from "./MobileNav";

const Header = () => (
  <header>
    <Navbar maxWidth="full" position="sticky" height="auto" isBordered>
      <MobileNav />
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        style={{
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "32px",
        }}
        justify="start"
      >
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Clean & Green Philly Logo"
              width={112}
              height={67}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <nav role="navigation" aria-label="Primary Navigation">
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <ul className="flex space-x-4">
            <li>
              <IconLink
                icon={<PiBinoculars className="h-6 w-6" />}
                text="Find Properties"
                href="/map"
              />
            </li>
            <li>
              <IconLink
                icon={<PiKey className="h-6 w-6" />}
                text="Get Access"
                href="/get-access"
              />
            </li>
            <li>
              <IconLink
                icon={<PiTree className="h-6 w-6" />}
                text="Transform"
                href="/transform-property"
              />
            </li>
            <li>
              <IconLink
                icon={<PiInfo className="h-6 w-6" />}
                text="About"
                href="/about"
              />
            </li>
          </ul>
        </NavbarContent>
      </nav>
    </Navbar>
  </header>
);

export default Header;
