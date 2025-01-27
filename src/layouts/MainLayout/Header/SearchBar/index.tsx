"use client";
import MovieIcon from "@/assets/MovieIcon";
import SearchIcon from "@/assets/SearchIcon";
import { getMovieByKeyword } from "@/services/movies";
import { AutoComplete, AutoCompleteProps } from "antd";
import { debounce } from "lodash";
import React from "react";
import "./index.css";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [options, setOptions] = React.useState<AutoCompleteProps["options"]>(
    []
  );
  const [value, setValue] = React.useState("");
  const router = useRouter();
  const onClick = (id: string) => {
    setValue("");
    setOptions([]);
    router.push(`/detail/${id}`);
  };

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value: string) => {
      setOptions([]);
      getMovieByKeyword(value).then((newOptions) => {
        const options =
          newOptions?.response?.results?.map((value) => ({
            label: <span className="capitalize">{value.name}</span>,
            value: value.id.toString(),
          })) || [];
        setOptions(options);
      });
    };

    return debounce(loadOptions, 800);
  }, []);

  return (
    <div className="w-[517px]">
      <AutoComplete
        placeholder="Find movie"
        value={value}
        onChange={(value) => setValue(value)}
        options={options}
        className="!h-[2.25rem] !w-full !text-text-primary !text-[1rem] custom-autocomplete"
        prefix={<MovieIcon />}
        suffixIcon={<SearchIcon />}
        onSearch={debounceFetcher}
        onSelect={(value) => onClick(value)}
      />
    </div>
  );
};

export default SearchBar;
