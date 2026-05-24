import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

//PAGES
const Home = lazy(() =>
  import("../pages/home").then((module) => ({ default: module.Home })),
);

const About = lazy(() =>
  import("../pages/about").then((module) => ({ default: module.About })),
);

const Projects = lazy(() =>
  import("../pages/project").then((module) => ({ default: module.Projects })),
);

const Curriculum = lazy(() =>
  import("../pages/curriculum").then((module) => ({
    default: module.Curriculum,
  })),
);

const Contact = lazy(() =>
  import("../pages/contact").then((module) => ({ default: module.Contact })),
);

export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
