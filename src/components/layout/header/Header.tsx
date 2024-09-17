"use client";
import NuraLogo from "@/components/ui/icons/nuraLogo";
import { headerRoutes } from "@/utils/header-routes";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Drawer from "../drawer/Drawer";
import CloseIcon from "@/components/ui/icons/Close";
import Container from "../wrapper/Container";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // Manage drawer state

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  // Function to handle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex items-center bg-white py-3 sticky top-0 z-30 mobile_lg:py-2.5">
      <div className="flex relative border border-red-500 tablet_md:w-[90%] justify-end border  desktop_sm:w-[75%]  w-[80%] mx-auto space-x-[155px] items-center">
      <Link href={"/"} className="flex items-center mobile_lg:left-0 absolute left-[-55px] top-1/2 -translate-y-1/2">
          <Image
            src="images/svg/logo_anim.svg"
            alt="icon"
            width={40}
            height={40}
            className="animate-slideIn"
          />
          <NuraLogo />
        </Link>
        <div className="flex mobile_lg:none items-center" />
        <ul className="tablet_md:hidden flex space-x-[60px] items-center relative">
          {headerRoutes.map(
            (route: { name: string; id: string; path: string }) => (
              <li
                key={route.id}
                className="relative text-center h-auto flex items-center text-primary"
              >
                <Link
                  href={route.path}
                  className="text-lg hover:text-customLightGreen mr-2 font-normal leading-[43px] text-left"
                >
                  {route.name}
                </Link>
                {route.name === "About" && (
                  <>
                    {/* Arrow Icon to toggle dropdown */}
                    <Image
                      src="/images/svg/dropdown_icon.svg"
                      alt="icon"
                      width={20}
                      height={20}
                      onMouseOver={toggleDropdown} // Only toggle when clicking the icon
                      className="cursor-pointer"
                    />
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 bg-white w-40 transition-all duration-200 ease-in-out ${
                        isDropdownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      <Link
                        href="/faq"
                        className="text-lg mr-2 font-normal leading-[43px] text-center hover:text-customLightGreen"
                      >
                        Faq
                      </Link>
                    </div>
                  </>
                )}
              </li>
            )
          )}
        </ul>
        <Button
          icon={<FaPhone className="text-white text-1xl" />}
          thickBtnBg
          className="tablet_md:hidden flex items-baseline desktop:px-4 desktop:text-2sm desktop:py-2 bg-thickBtnBg text-white px-10 py-3"
          rounded="rounded-[40px]"
        >
          +44 7904451016
        </Button>

        {!isDrawerOpen ? (
          <div
            onClick={toggleDrawer}
            className="hidden w-[64px] h-[55.41px] tablet_md:block"
          >
            <HamburgerIcon /> {/* Toggle drawer on click */}
          </div>
        ) : (
          <div
            onClick={toggleDrawer}
            className="hidden w-[64px] h-[55.41px] tablet_md:block"
          >
            <CloseIcon /> {/* Toggle drawer on click */}
          </div>
        )}
      </div>
      {/* Render Drawer component */}
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </header>
  );
}

export default Header;
