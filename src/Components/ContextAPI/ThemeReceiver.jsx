import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const ThemeReceiver = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleChange = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleChange}
    >
      {theme === 'light-mode' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeReceiver;

