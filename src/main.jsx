import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AppDetails from "./Components/AppDetails";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AuthProvider from "./Components/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute";
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
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
