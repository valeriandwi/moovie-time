import MovieIcon from "@/assets/MovieIcon";
import SearchIcon from "@/assets/SearchIcon";
import { Input } from "antd";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[517px]">
      <Input
        placeholder="Find movie"
        className="!h-[2.25rem] !text-text-primary !text-[1rem]"
        prefix={
          <span className="mr-3">
            <MovieIcon />
          </span>
        }
        suffix={<SearchIcon />}
      />
    </div>
  );
};

export default SearchBar;
