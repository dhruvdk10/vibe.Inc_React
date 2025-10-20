import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const ThemeReceiver = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleChange = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleChange}
      title={theme === 'light-mode' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <FontAwesomeIcon
        icon={faCircleHalfStroke}
        className="theme-icon fs-4"
        style={{
          color: theme === 'dark-mode' ? '#ddd' : '#333',
          transform: theme === 'dark-mode' ? 'scaleX(-1)' : 'none',
          transition: 'transform 0.3s ease, color 0.3s ease',
        }}
      />
    </button>
  );
};

export default ThemeReceiver;
