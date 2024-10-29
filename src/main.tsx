import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StepProvider from "./context/StepContext.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StepProvider>
      <App />
    </StepProvider>
  </StrictMode>
);
