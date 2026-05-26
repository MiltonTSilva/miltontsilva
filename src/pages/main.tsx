import type { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export function Main({ children }: { children?: ReactNode }) {
  return (
    <div className="container">
      <Header />
      {children ? children : <Outlet />}
      <Footer />
    </div>
  );
}
