// src/main.jsx
import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; // Import your final App.css with Tailwind + custom styles
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
