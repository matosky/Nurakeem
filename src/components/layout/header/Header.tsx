"use client";
import NuraLogo from "@/components/ui/icons/nuraLogo";
import { headerRoutes } from "@/utils/header-routes";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";
import HamburgerIcon from "@/components/ui/icons/HamburgerIcon";
import Drawer from "../drawer/Drawer";
import CloseIcon from "@/components/ui/icons/Close";
import DropIcon from "@/components/ui/icons/DropIcon";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // Manage drawer state
  const [hasShadow, setHasShadow] = useState(false); // Track scroll state for shadow

  // Toggle drawer
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  // Effect to add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  // Handle mouse enter for dropdown
  const handleDropdownMouseEnter = () => {
    setDropdownOpen(true);
  };

  // Handle mouse leave for dropdown
  const handleDropdownMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header
      className={`flex items-center bg-white py-3 sticky top-0 z-30 mobile_lg:py-2.5 transition-shadow duration-300 ${
        hasShadow ? "shadow-custom-dark" : ""
      }`}
    >
      <div className="flex relative tablet_md:w-[90%] justify-end desktop_sm:w-[75%] w-[80%] mx-auto space-x-[155px] items-center">
        <Link
          href={"/"}
          className="flex items-center mobile_lg:left-0 absolute left-[-55px] top-1/2 -translate-y-1/2"
        >
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
                    <div
                      className="cursor-pointer hover:text-customLightGreen"
                      onMouseEnter={handleDropdownMouseEnter} // Show dropdown on hover
                    >
                      <DropIcon />
                    </div>

                    <div
                      className={`absolute top-full left-0 mt-2 bg-white w-40 transition-all duration-200 ease-in-out ${
                        isDropdownOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                      onMouseLeave={handleDropdownMouseLeave} // Close dropdown when leaving dropdown area
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
          href="#"
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
            <HamburgerIcon />
          </div>
        ) : (
          <div
            onClick={toggleDrawer}
            className="hidden w-[64px] h-[55.41px] tablet_md:block"
          >
            <CloseIcon />
          </div>
        )}
      </div>
      {isDrawerOpen && <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />}
    </header>
  );
}

export default Header;
