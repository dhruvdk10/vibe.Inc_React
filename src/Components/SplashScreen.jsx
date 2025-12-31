import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // ✅ Play intro only if not played this session
    if (sessionStorage.getItem("introPlayed")) {
      onFinish();
    } else {
      sessionStorage.setItem("introPlayed", "true");

      const timer = setTimeout(() => {
        onFinish();
      }, 2000); // 2 sec splash

      return () => clearTimeout(timer);
    }
  }, [onFinish]);

  return (
    <div className="splash">
      <NavLink to="/" className="splash-logo-link">
        <img
          src="/vibe.Inc_React/vibe._logo.png"
          alt="Vibe Logo"
          className="splash-logo-img"
        />
      </NavLink>
    </div>
  );
};

export default SplashScreen;
