import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="w-full h-[66px] bg-black bg-opacity-5 relative top-0 flex justify-between items-center px-[120px] z-[2]">
      <Link href="/">
        <Image src="/logo.svg" alt="moovie-time-logo" width={112} height={31} />
      </Link>
      <SearchBar />
      <Menu />
    </div>
  );
};

export default Header;
