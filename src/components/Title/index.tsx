import React from "react";
import clsx from "clsx";

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <div className={clsx(className, "flex flex-col space-y-3")}>
      <div className="w-[112px] h-[6px] bg-red" />
      <h1 className="text-text-primary font-semibold text-[24px]">{title}</h1>
    </div>
  );
};

export default Title;
