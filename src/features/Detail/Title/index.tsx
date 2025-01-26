import React from "react";

interface DetailTitleProps {
  year: string;
  title?: string;
  genres?: string[];
}

const DetailTitle: React.FC<DetailTitleProps> = ({ year, title, genres }) => {
  return (
    <div className="absolute pl-[377px] text-text-primary pb-[111px]">
      <h2 className="font-medium text-subtitle">{year}</h2>
      <h1 className="font-semibold text-title">{title}</h1>
      <h3 className="font-medium text-md">{genres?.join(", ")}</h3>
    </div>
  );
};

export default DetailTitle;
