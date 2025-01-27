import { Select, SelectProps } from "antd";
import React from "react";
import "./index.css";
import clsx from "clsx";

interface AppSelectProps extends SelectProps {
  className?: string;
}

const AppSelect: React.FC<AppSelectProps> = ({
  className,
  options,
  ...props
}) => {
  return (
    <Select
      className={clsx(className, "w-full text-white custom-select !h-9")}
      options={options}
      dropdownStyle={{ backgroundColor: "#111419" }}
      {...props}
    />
  );
};

export default AppSelect;
