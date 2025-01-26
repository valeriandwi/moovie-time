import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <div className="w-full h-[66px] bg-white bg-opacity-5 relative top-0 flex justify-between items-center px-[120px] z-[2]">
      <Image src="/logo.svg" alt="moovie-time-logo" width={112} height={31} />
      <SearchBar />
      <Menu />
    </div>
  );
};

export default Header;
