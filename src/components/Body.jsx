import React from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/Favorites",
    element: <Favorites />,
  },
]);
const Body = () => {
  return (
    <div>
      {" "}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
