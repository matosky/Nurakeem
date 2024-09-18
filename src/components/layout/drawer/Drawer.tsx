"use client";
// components/ui/Drawer.tsx
import Link from "next/link";
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
        className={`absolute top-[100%] pb-10 left-0 w-full bg-white z-[-1]`}
      >
        <ul className="flex flex-col p-5 space-y-4">
          {mobileHeaderRoutes.map((route) => (
            <li
              key={route.id}
              className={`px-4 py-2 hover:bg-[#D7D7D78A] hover:rounded-[43px] ${
                route.name !== "Contact" ? "border-b border-[#D7D7D78A]" : ""
              }`}
            >
              <Link
                href={route.path}
                className="text-lg uppercase font-normal text-primary hover:text-customLightGreen"
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
          className="absolute top-full inset-0 bg-black opacity-20 z-30"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Drawer;
