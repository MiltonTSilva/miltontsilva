import type { ReactNode } from "react";

import Footer from "../components/footer";
import Header from "../components/header";

export function Home({ children }: { children?: ReactNode }) {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
