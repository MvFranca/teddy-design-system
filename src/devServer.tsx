import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./hooks/ThemeProvider";
import { Button } from "./components/Button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <h1>Teddy Design System</h1>
      <Button/>
    </ThemeProvider>
  </React.StrictMode>
);
