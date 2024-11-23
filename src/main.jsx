import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import './assets/css/animate.css'
import { RouterProvider } from "react-router-dom";
import { novinRoutes } from "./routes";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={novinRoutes} />
  </StrictMode>
);
