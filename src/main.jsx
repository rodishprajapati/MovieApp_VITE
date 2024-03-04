import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import API from "./pages/api";
import "./index.css";
import ADDMovies from "./pages/addMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <API />,
  },
  {
    path: "/addData",
    element: <ADDMovies />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
