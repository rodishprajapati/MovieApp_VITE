import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import API from "./pages/api";
import "./index.css";

import EditMovies from "./pages/editMovies1";

import AddMovies from "./pages/addMovies1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <API />,
  },
  // {
  //   path: "/addData",
  //   element:<ADDMovies/>,
  // },
  {
    path: "/addData",
    element: <AddMovies />,
  },
  {
    path: "/addData/:movie_id",
    element: <EditMovies />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
