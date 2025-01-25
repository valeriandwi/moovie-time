import React from "react";

interface BaseBackgroundWrapper {
  children: React.ReactNode;
}

const BaseBackgroundWrapper: React.FC<BaseBackgroundWrapper> = ({
  children,
}) => {
  return (
    <>
      <div className="bg-secondary-bg absolute h-[333px] w-full z-0" />
      <div className="relative">{children}</div>
    </>
  );
};

export default BaseBackgroundWrapper;
