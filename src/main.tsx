import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./components/Add.tsx";
import Watchlist from "./components/Watchlist.tsx";
import Watched from "./components/Watched.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Add /> },
      { path: "watchlist", element: <Watchlist /> },
      { path: "watched", element: <Watched /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
