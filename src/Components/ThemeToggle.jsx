import React, { useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark-mode");

  const toggleChange = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <button
      onClick={toggleChange}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "18px",
      }}
    >
      {theme === "light-mode" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
