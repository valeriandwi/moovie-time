import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import MainLayout from "@/layouts/MainLayout";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { theme } from "@/styles/theme";

const monsterrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MoovieTime",
  description:
    "MoovieTime is a movie database website that provides information about movies, TV shows, and celebrities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monsterrat.className}`}>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <MainLayout>{children}</MainLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
