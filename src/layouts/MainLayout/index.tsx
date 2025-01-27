import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-background">
      <Header />
      <div className="min-h-[calc(100vh-222px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
