import React from "react";

interface OverviewProps {
  overview?: string;
}

const Overview: React.FC<OverviewProps> = ({ overview }) => {
  return (
    <div className="pl-[382px] pt-8 flex flex-col space-y-[9px]">
      <p className="text-red text-sm font-semibold">OVERVIEW</p>
      <p className="text-sm leading-[200%] max-w-[526px]">{overview}</p>
    </div>
  );
};

export default Overview;
