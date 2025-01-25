import { Button, ButtonProps } from "antd";
import React from "react";

interface AppButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const AppButton: React.FC<AppButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default AppButton;
