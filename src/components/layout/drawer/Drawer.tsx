"use client"
// components/ui/Drawer.tsx
import Link from "next/link";
import NuraLogo from "@/components/ui/icons/nuraLogo";
import { mobileHeaderRoutes } from "@/utils/header-routes";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-[74px] right-0 h-full w-[280px] bg-white  transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col p-5 space-y-4">
          {mobileHeaderRoutes.map((route,index) => (
            <li key={route.id} className={route.name !== "Faqs" ? `border-b py-2 border-[#D7D7D78A]` : ``}>
              <Link
                href={route.path}
                className="text-sm uppercase font-normal text-primary hover:text-customLightGreen"
                onClick={onClose} // Close the drawer on link click
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-[78px]  inset-0 bg-black opacity-10 z-30"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Drawer;
