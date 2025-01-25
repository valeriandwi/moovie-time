import { ThemeConfig } from "antd";

export const theme: ThemeConfig | undefined = {
  components: {
    Input: {
      borderRadius: 4,
      activeBorderColor: "transparent",
      colorBgContainer: "rgb(0,0,0,0.13)",
      colorTextPlaceholder: "#E5E5E5",
      hoverBorderColor: "transparent",
      colorBorder: "transparent",
    },
    Button: {
      borderRadius: 32,
      colorPrimary: "#FF0000",
      colorError: "#F5222D",
      primaryColor: "#fff",
      colorPrimaryHover: "#FF0000",
      defaultBg: "#21252a",
      defaultColor: "#fff",
      defaultHoverBg: "#21252a",
      defaultBorderColor: "transparent",
      defaultHoverBorderColor: "transparent",
      defaultHoverColor: "#fff",
      primaryShadow: "transparent",
    },
  },
};
