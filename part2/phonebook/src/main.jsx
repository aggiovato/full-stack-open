// EXTERNAL MODULES
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// EXTERNAL COMPONENTS
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
