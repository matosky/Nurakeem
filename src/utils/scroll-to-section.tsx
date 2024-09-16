"use client";
import Link from "next/link";
import React, { useCallback } from "react";

type ScrollToSectionProps = {
  targetId: string;
  children: React.ReactNode;
  currentInstance?: string;
};

function ScrollToSection({ targetId, currentInstance, children }: ScrollToSectionProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId); // Get the element by id
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the element
        window.history.pushState(null, "", `#${targetId}`); // Update the URL with hash
      }
    },
    [targetId]
  );

  const linkColor = currentInstance === "footer" ? "text-white" : "big_screen:text-black mobile_lg:text-white";

  return (
    <a className={`${linkColor} rounded-[40px] py-3 block px-10 border border-white font-normal hover:bg-thickBtnBg bg-transBtnBg text-white transition-all flex items-center ease-in-out delay-150`} href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ScrollToSection;
