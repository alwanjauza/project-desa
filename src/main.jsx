import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./route/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoute />
  </BrowserRouter>
);
