import React from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="w-[112px] h-[6px] bg-red" />
      <h1 className="text-text-primary font-semibold text-[24px]">{title}</h1>
    </div>
  );
};

export default Title;
