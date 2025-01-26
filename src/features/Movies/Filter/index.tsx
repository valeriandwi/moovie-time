"use client";
import AppSelect from "@/components/AppSelect";
import { genreOptions, sortDropdownOptions } from "@/constants/constants";
import { navigateWithParams } from "@/utils/route";
import { Checkbox, Divider } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

interface FilterProps {
  apiParams: Record<string, string>;
}

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

const Filter: React.FC<FilterProps> = ({ apiParams }) => {
  const router = useRouter();
  const [genreSelected, setGenreSelected] = React.useState<string[]>([]);
  React.useEffect(() => {
    if (genreSelected.length === 0) {
      return navigateWithParams(router, "/movies", apiParams, {
        with_genres: null,
      });
    }
    navigateWithParams(router, "/movies", apiParams, {
      with_genres: genreSelected.join(","),
    });
  }, [genreSelected]);

  return (
    <div className="pt-[20px] pb-[56px] h-fit bg-filter-bg w-[240px] rounded-lg">
      <Title>Sort Result By : </Title>
      <AppDivider marginBottom="18px" marginTop="18px" />
      <div className="px-[18px]">
        <AppSelect
          options={sortDropdownOptions}
          value={apiParams?.["sort_by"]}
          onChange={(value) => {
            navigateWithParams(router, "/movies", apiParams, {
              sort_by: value,
            });
          }}
        />
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
              onChange={(event) => {
                if (!event.target.checked) {
                  return setGenreSelected(
                    genreSelected.filter((prevValue) => prevValue !== value)
                  );
                }
                setGenreSelected((prevState) => [...prevState, value]);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
