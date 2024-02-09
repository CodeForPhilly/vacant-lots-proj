import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";

const Header = () => (
  <Navbar maxWidth="full" position="sticky" height="auto" isBordered>
    <NavbarContent
      className="hidden sm:flex basis-1/5 sm:basis-full"
      style={{ paddingTop: "16px", paddingBottom: "16px", paddingLeft: "32px" }}
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

    <NavbarContent
      className="hidden sm:flex  sm:basis-full md:w-16"
      justify="end"
    >
      <NavbarItem key="Find Properties">
        <Link href="/map">
          <Button size="md" className="mb-2 text-grey bg-white hover:bg-slate-300  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <text>
            Find properties
            </text>
          </Button>
        </Link>
      </NavbarItem>

      {/* Dropdown for Take Action */}
      <Dropdown>
        <DropdownTrigger>
        <Button size="md" className="mb-2 text-grey bg-white hover:bg-slate-300  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
          </svg>
          <text>
            Take Action
          </text>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Take Action">
          <DropdownItem key="overview " className="rounded-lg">
            <Link href="/take-action-overview">Overview</Link>
          </DropdownItem>
          <DropdownItem key="get-access" className="rounded-lg">
            <Link href="/get-access">Get Access</Link>
          </DropdownItem>
          <DropdownItem key="transform-property" className="rounded-lg">
            <Link href="/transform-property">Transform a Property</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* Dropdown for About */}
      <Dropdown>
        <DropdownTrigger>
        <Button size="md" className="mb-2 text-grey bg-white hover:bg-slate-300  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          <text>
            About
          </text>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Overview ">
          <DropdownItem key="about" className="rounded-lg">
            <Link href="/about">Overview</Link>
          </DropdownItem>
          <DropdownItem key="methodology" className="rounded-lg">
            <Link href="/methodology">Methodology</Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>
);

export default Header;
