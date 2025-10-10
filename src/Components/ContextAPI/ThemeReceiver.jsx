import React, {useContext} from "react";
import { ThemeContext } from "./ThemeProvider";
const ThemeReceiver = () => {
  const { theme, setTheme } = useContext(ThemeContext);
    const toggleChange = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    document.body.className = newTheme;
  };
  return (
    <>
        <button className="theme-toggle-button"
        onClick={toggleChange}>
        {theme === "light-mode" ? "🌙 " : "☀️"}</button>
        </>
    )
}

export default ThemeReceiver;
