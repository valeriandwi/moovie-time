import { menuRoutes } from "@/routes/route";
import React from "react";

const Menu = () => {
  return (
    <div className="flex flex-row space-x-[38px]">
      {menuRoutes?.map(({ key, name, icon, path }) => (
        <p
          className="text-white text-sm font-semibold capitalize flex flex-row space-x"
          key={key}
        >
          {icon && <span className="mr-[11px]">{icon}</span>}
          {name}
        </p>
      ))}
    </div>
  );
};

export default Menu;
