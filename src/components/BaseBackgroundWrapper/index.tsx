import React from "react";

interface BaseBackgroundWrapperProps {
  children: React.ReactNode;
}

const BaseBackgroundWrapper: React.FC<BaseBackgroundWrapperProps> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-secondary-bg absolute h-[333px] w-full z-0 bg-top bg-cover bg-fixed " />
      <div className="relative">{children}</div>
    </>
  );
};

export default BaseBackgroundWrapper;
