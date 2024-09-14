import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="w-[75%]  mx-auto"  >
      {children}
    </div>
  );
}

export default Container;
