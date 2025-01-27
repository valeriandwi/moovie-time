import { menuRoutes } from "@/routes/route";
import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-row space-x-[38px]">
      {menuRoutes?.map(({ key, name, icon, path }) => (
        <Link href={path} key={key}>
          <p className="text-white text-sm font-semibold flex flex-row space-x">
            {icon && <span className="mr-[11px]">{icon}</span>}
            <span className="uppercase">{name}</span>
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
