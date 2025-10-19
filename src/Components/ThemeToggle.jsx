import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ThemeToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    // On load, check localStorage
    if (localStorage.getItem("theme") === "light") {
      document.documentElement.classList.add("light-mode");
      setLight(true);
    } else {
      document.documentElement.classList.add("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (light) {
      // Switch to dark mode
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      // Switch to light mode
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
    setLight(!light);
  };

  return (
    <button
      id="modeToggle"
      className="btn btn-sm rounded-circle ms-2"
      onClick={toggleTheme}
    >
      {light ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
