import { createBrowserRouter } from "react-router";
import { PresentationLayout } from "./components/PresentationLayout";
import { Slide1 } from "./slides/Slide1";
import { Slide2 } from "./slides/Slide2";
import { Slide3 } from "./slides/Slide3";
import { Slide4 } from "./slides/Slide4";
import { Slide5 } from "./slides/Slide5";
import { Slide6 } from "./slides/Slide6";
import { Slide7 } from "./slides/Slide7";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationLayout,
    children: [
      { index: true, Component: Slide1 },
      { path: "slide-2", Component: Slide2 },
      { path: "slide-3", Component: Slide3 },
      { path: "slide-4", Component: Slide4 },
      { path: "slide-5", Component: Slide5 },
      { path: "slide-6", Component: Slide6 },
      { path: "slide-7", Component: Slide7 },
    ],
  },
]);
