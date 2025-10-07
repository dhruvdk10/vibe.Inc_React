import React from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <h2>{darkMode ? "🌙" : "☀️"}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light" : "Switch to Dark"}
      </button>
    </div>
  );
}


export default ThemeToggle
