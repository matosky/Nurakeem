import React, {useCallback } from "react";

type ScrollToSectionProps = {
  targetId: string;
  children: React.ReactNode;
  currentInstance?: string
};

function ScrollToSection({ targetId, currentInstance, children }: ScrollToSectionProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(targetId, targetId, `#${targetId}`);
      }
    },
    [targetId]
  );

  const linkColor = currentInstance==='footer' ? "text-white" : "big_screen:text-black mobile_lg:text-white"

  return (
    <a className={linkColor} href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
}

export default ScrollToSection;
