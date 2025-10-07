import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <style>
        {`
          .search-input::placeholder {
            color: #aaa;
          }
        `}
      </style>
      {/* Top Navbar */}
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "#141414" }}
      >
        <div className="container-fluid d-flex mx-auto">
          {/* Brand Logo navigates to home */}
          <Link className="navbar-brand" to="/">
            <img
              src="/vibe.Inc_React/vibe._logo.png"
              alt="logo"
              height="40"
              width="150"
              style={{ objectFit: "cover" }}
            />

            <div className={darkMode ? "dark-mode" : "light-mode"}>
              <h2>{darkMode ? "🌙" : "☀️"}</h2>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
              </button>
            </div>
          </Link>

          <div className="d-flex align-items-center">
            {/* Search */}
            <form
              className="d-flex align-items-center position-relative"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={`form-control mx-2 search-input ${showSearch ? "d-block" : "d-none"
                  }`}
                type="search"
                placeholder="Find your vibe."
                aria-label="Search"
                autoFocus={showSearch}
                style={{
                  width: "265px",
                  background: "black",
                  color: "#fff",
                  boxShadow: "none",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onBlur={() => setShowSearch(false)}
              />
              <button
                className="btn btn-link text-white px-2"
                type="button"
                id="search-toggle"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="fas fa-search text-white fs-4"></i>
              </button>
            </form>

            {/* Notification */}
            <button className="btn btn-link text-white px-2" type="button">
              <i className="fa fa-bell fs-4"></i>
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown ps-2">
              <Link
                to=""
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-user fs-4 text-info"></i>
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to=""
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/logout">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black", marginTop: "66px" }}
      >
        <div className="container-fluid ms-0">
          <button
            className="navbar-toggler ms-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottomNav"
            style={{ border: "none", outline: "none", boxShadow: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="bottomNav">
            <ul className="navbar-nav ms-3 me-auto mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Series">
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Games">
                  Games
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/MyList">
                  My List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

