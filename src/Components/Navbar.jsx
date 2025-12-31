import React, { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { ThemeContext } from "./ContextAPI/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import ThemeReceiver from "./ContextAPI/ThemeReceiver";

const Navbar = ({ setSearchTerm }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSearch, setShowSearch] = useState(false);

  const { theme } = useContext(ThemeContext);
  const lightMode = theme === "light-mode";

  // ✅ SAME FUNCTION FOR ICON CLICK + ENTER KEY
  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Placeholder color fix */}
      <style>
        {`
          .search-input::placeholder { color: #ccc; }
          .light-mode .search-input::placeholder { color: #000; }
        `}
      </style>

      {/* 🔹 TOP NAVBAR */}
      <nav className="navbar fixed-top">
        <div className="container-fluid d-flex mx-0">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              src="/vibe.Inc_React/vibe._logo.png"
              alt="logo"
              className="logo"
              height="40"
              width="150"
              style={{ objectFit: "cover" }}
            />
          </NavLink>

          <div className="d-flex align-items-center">
            {/* 🔍 SEARCH FORM */}
            <form
              className="d-flex align-items-center position-relative"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearchToggle(); // ✅ ENTER works correctly
              }}
            >
              <input
                type="search"
                className={`form-control mx-2 search-input ${showSearch ? "d-block" : "d-none"
                  } ${lightMode ? "light-mode" : "dark-mode"}`}
                placeholder="Find your vibe."
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "230px",
                  height: "35px",
                  boxShadow: "none",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
              />

              <button
                className="btn btn-link px-2"
                type="button"
                onClick={handleSearchToggle}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fs-4"
                  color={lightMode ? "#333" : "#ddd"}
                />
              </button>
            </form>

            {/* ✅ THEME TOGGLE (OUTSIDE FORM) */}
            <div className="ms-2">
              <ThemeReceiver />
            </div>

            {/* 👤 PROFILE */}
            <div className="dropdown ps-1">
              <button
                className="btn options d-flex align-items-center text-white"
                data-bs-toggle="dropdown"
                style={{ background: "none", border: "none" }}
              >
                <FontAwesomeIcon icon={faUser} className="fs-4" />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔹 BOTTOM NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ marginTop: "66px" }}
      >
        <div className="container-fluid ms-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottomNav"
            style={{ border: "none", boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="bottomNav">
            <ul className="navbar-nav ms-2 me-auto mb-lg-0">
              {["/", "/Series", "/Movies", "/Games", "/MyList"].map((path, i) => {
                const labels = ["Home", "Series", "Movies", "Games", "My List"];
                return (
                  <li className="nav-item" key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        isActive && windowWidth > 991
                          ? "nav-link active ms-2"
                          : "nav-link ms-2"
                      }
                    >
                      {labels[i]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
