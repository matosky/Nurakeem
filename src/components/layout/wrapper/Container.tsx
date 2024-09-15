import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  height?: string
};

function Container({ children, height }: ContainerProps) {
  return (
    <div className={`w-[70%] h-[${height}]  mx-auto`}  >
      {children}
    </div>
  );
}

export default Container;
