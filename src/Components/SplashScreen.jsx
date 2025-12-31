import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); //

    return () => clearTimeout(timer);
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
