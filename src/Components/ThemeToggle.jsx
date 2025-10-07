import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(lightMode ? "light-mode" : "dark-mode");
  }, [lightMode]);

  return (
    <button
      onClick={() => setLightMode(!lightMode)}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "18px",
        color: "inherit",
      }}
    >
      {lightMode ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
