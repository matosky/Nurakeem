import { useEffect, useState } from "react";
import ScrollToSection from "../../../utils/scroll-to-section";
import { headerRoutes } from "@/utils/header-routes";

type DrawerProps = {
  children: React.ReactNode;
};

function Drawer({ children }: DrawerProps) {
  const [activeRoute, setActiveRoute] = useState(headerRoutes[0].id);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleActiveRoute = (id: string) => {
    setActiveRoute(id);
    setIsOpen(false);
  };
  return (
    <div className="drawer drawer-end z-30">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 pt-20 w-80 min-h-full text-base-content bg-grooveBg">
          {headerRoutes.map((route) => (
            <li
              className={` text-[12px] mb-[10px] font-inter text-white hover:cursor-pointer route-hover-active transition-all ease-in delay-100 ${
                activeRoute === route.id ? "route-active" : ""
              }`}
              onClick={() => handleActiveRoute(route.id)}
              key={route.id}
            >
              <ScrollToSection targetId={route.id}>
                {route.name}
              </ScrollToSection>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
