import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize the theme safely and normalize older values
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // normalize legacy values "light" / "dark" to "light-mode" / "dark-mode"
      if (savedTheme === 'light') return 'light-mode';
      if (savedTheme === 'dark') return 'dark-mode';
      return savedTheme; // already in expected format
    }

    // No saved preference: try to respect system preference, fallback to dark-mode
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initial = prefersDark ? 'dark-mode' : 'light-mode';
    document.body.classList.add(initial);
    return initial;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
