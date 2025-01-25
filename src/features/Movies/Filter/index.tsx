"use client";
import AppSelect from "@/components/AppSelect";
import { genreOptions, sortDropdownOptions } from "@/constants/constants";
import { Checkbox, Divider } from "antd";
import React from "react";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="font-semibold text-[16px] px-[18px] text-white">{children}</p>
  );
};

const AppDivider: React.FC<{ marginTop: string; marginBottom: string }> = ({
  marginTop,
  marginBottom,
}) => (
  <Divider
    className={`!mt-[${marginTop}] !mb-[${marginBottom}] !bg-secondary-bg`}
  />
);

const Filter = () => {
  return (
    <div className="pt-[20px] pb-[56px] bg-filter-bg w-[240px] rounded-lg">
      <Title>Sort Result By : </Title>
      <AppDivider marginBottom="18px" marginTop="18px" />
      <div className="px-[18px]">
        <AppSelect options={sortDropdownOptions} />
      </div>
      <AppDivider marginBottom="11px" marginTop="31px" />
      <Title>Genres</Title>
      <AppDivider marginBottom="18px" marginTop="13px" />
      <div className="px-[18px] flex flex-col space-y-4">
        {genreOptions.map(({ key, label, value }) => (
          <div className="flex flex-row justify-between items-center" key={key}>
            <p className="text-white text-sm">{label}</p>
            <Checkbox
              rootClassName="!border-[#A2A5A9] "
              onChange={(value) => console.log(value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
