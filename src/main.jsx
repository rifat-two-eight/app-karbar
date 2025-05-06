import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AppDetails from "./Components/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,

    children: [
      { index: true, Component: Home, loader: () => fetch("api.json") },
      {
        path: "/appdetails/:id",
        loader: () => fetch("api.json"),
        Component: AppDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
