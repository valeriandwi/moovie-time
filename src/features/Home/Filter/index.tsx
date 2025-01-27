"use client";
import AppButton from "@/components/AppButton";
import { VIEW_BY } from "@/constants/enum";
import { useRouter } from "next/navigation";
import React from "react";

interface FilterByProps {
  viewBy: string;
}

const FilterBy: React.FC<FilterByProps> = ({ viewBy }) => {
  const router = useRouter();

  const onClick = (viewBy: string) => {
    router.push(`/home/${viewBy}`);
  };

  return (
    <div className="flex flex-row space-x-[21px]">
      <AppButton
        color={"primary"}
        type={viewBy === VIEW_BY.POPULARITY ? "primary" : "default"}
        onClick={() => onClick(VIEW_BY.POPULARITY)}
      >
        Popularity
      </AppButton>
      <AppButton
        color="green"
        type={viewBy === VIEW_BY.RELEASE_DATE ? "primary" : "default"}
        onClick={() => onClick(VIEW_BY.RELEASE_DATE)}
      >
        Release Date
      </AppButton>
    </div>
  );
};

export default FilterBy;
