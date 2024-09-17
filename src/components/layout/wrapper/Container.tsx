import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  height?: string
  width?: string;
};

function Container({ children, height }: ContainerProps) {
  return (
    <div className={`tablet_md:w-[90%]  desktop_sm:w-[75%] w-[80%] h-[${height}]  mx-auto`}  >
      {children}
    </div>
  );
}

export default Container;
