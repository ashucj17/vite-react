import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import MyFun from "./MyFun.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyFun />
  </StrictMode>
);
