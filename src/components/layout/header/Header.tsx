import NuraLogo from "@/components/ui/icons/nuraLogo";
import Container from "../wrapper/Container";
import { headerRoutes } from "@/utils/header-routes";
import Button from "@/components/ui/button/Button";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";

function Header() {
  return (
    <header className="flex px-40 items-center bg-white py-4 sticky top-0 z-30 mobile_lg:py-2.5">
        <div className="flex justify-between items-center w-full">
          <NuraLogo />
          <ul className="flex space-x-8 items-center">
            {headerRoutes.map(
              (route: { name: string; id: string; path: string }) => (
                <li
                  key={route.id}
                  className="text-center h-auto flex items-center text-primary"
                >
                  <Link
                    href={route.path}
                    className="text-lg font-normal leading-[43px] text-left"
                  >
                    {route.name}
                  </Link>
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
