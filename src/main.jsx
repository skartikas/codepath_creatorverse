import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import Header from "./components/Header";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <ShowCreators />
      </>
    )
  },
  {
    path: "/creators/add",
    element: (
      <>
        <Header />
        <AddCreator />
      </>
    )
  },
  {
    path: "/creators/view/:id",
    element: (
      <>
        <Header />
        <ViewCreator />
      </>
    )
  },
  {
    path: "/creators/edit/:id",
    element: (
      <>
        <Header />
        <EditCreator />
      </>
    )
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
