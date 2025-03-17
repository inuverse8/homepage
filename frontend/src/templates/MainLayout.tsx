import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="bg-gray-100 flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
