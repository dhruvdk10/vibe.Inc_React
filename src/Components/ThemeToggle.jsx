import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = lightMode ? "#ffffff" : "#000000";
    document.body.style.color = lightMode ? "#000000" : "#ffffff";
  }, [lightMode]);

  return (
    <button
      onClick={() => setLightMode(!lightMode)}
      style={{
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontSize: "1.5rem",
        color: "inherit",
      }}
    >
      {lightMode ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
