import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from './Components/ContextAPI/ThemeProvider';
import { UserProvider } from './Components/ContextAPI/UserContext';
import "./index.css";
import "./Firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
);
