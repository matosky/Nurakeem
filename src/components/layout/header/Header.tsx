"use client";
import NuraLogo from "@/components/ui/icons/nuraLogo";
import { headerRoutes } from "@/utils/header-routes";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="flex px-40 items-center bg-white py-3 sticky top-0 z-30 mobile_lg:py-2.5">
      <div className="flex justify-between items-center w-full">
        <Link href={"/"} className="flex items-center">
          {/* Apply the animation to the logo image */}
          <Image
            src="images/svg/logo_anim.svg"
            alt="icon"
            width={50}
            height={50}
            className="mr-2 animate-slideIn"
          />
          <NuraLogo />
        </Link>
        <ul className="flex space-x-8 items-center relative">
          {headerRoutes.map(
            (route: { name: string; id: string; path: string }) => (
              <li
                key={route.id}
                className="relative text-center h-auto flex items-center text-primary"
                onMouseEnter={() =>
                  route.name === "About" && setDropdownOpen(true)
                }
                onMouseLeave={() =>
                  route.name === "About" && setDropdownOpen(false)
                }
              >
                <Link
                  href={route.path}
                  className="text-lg mr-2 font-normal leading-[43px] text-left"
                >
                  {route.name}
                </Link>
                {route.name === "About" && (
                  <>
                    <Image
                      src="/images/svg/dropdown_icon.svg"
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    {/* Dropdown */}
                    <div
                      className={`absolute top-full left-0 mt-2 bg-white  w-40 transition-all duration-200 ease-in-out ${
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
          icon={<FaPhone className="mt-[-4px] text-white" />}
          thickBtnBg
          className="bg-thickBtnBg text-white px-10 py-3"
          rounded="rounded-[40px]"
        >
          +44 7904451016
        </Button>
      </div>
    </header>
  );
}

export default Header;
