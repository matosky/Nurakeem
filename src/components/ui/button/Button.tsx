import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  transBg?: boolean;
  thickBtnBg?: boolean;
  hasBackground?: boolean;
  target?: string;
  rounded?: string;
  className?: string;
  icon?: React.ReactNode; // Icon prop
  handleClick?: () => void; // New onClick prop
};

function Button({
  children,
  href = "#", // Default href
  transBg,
  thickBtnBg,
  target,
  rounded = "rounded-sm",
  className,
  icon,
  handleClick, // Added handleClick
}: ButtonProps) {
  if (transBg) {
    return (
      <Link
        className={`${rounded} whitespace-nowrap py-3 block px-10 hover:border-n  border border-white font-normal hover:bg-thickBtnBg bg-transBtnBg text-white transition-all flex items-center ease-in-out delay-150`}
        href={href}
        target={target}
        onClick={handleClick} // Handle click
      >
        <div className="flex  items-center gap-2">
          {icon}
          {children}
        </div>
      </Link>
    );
  }

  if (thickBtnBg) {
    return (
      <Link
        className={`${className} whitespace-nowrap flex items-center ${rounded} block text-center`}
        href={href}
        target={target}
        onClick={handleClick} // Handle click
      >
        <div className="flex items-center gap-2">
          {icon}
          {children}
        </div>
      </Link>
    );
  }

  return (
    <Link
      className={`${rounded} whitespace-nowrap flex items-center text-black transition-all ease-in-out delay-150 gradient-bg py-2 px-4 font-poppins hover:opacity-80 hover:cursor-pointer desktop:py-[9px] desktop:px-[16px] desktop:text-[14px] tablet_max:py-[8px] tablet_max:px-[15px] tablet_max:text-[13px] inline-block mobile_lg:w-full mobile_lg:text-center`}
      href={href}
      target={target}
      onClick={handleClick} // Handle click
    >
      <div className="flex items-center gap-2">
          {icon}
          {children}
        </div>
    </Link>
  );
}

export default Button;
