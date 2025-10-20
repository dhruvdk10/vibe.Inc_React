import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemeReceiver from './ContextAPI/ThemeReceiver'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faBell } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <style>
        {`
          .search-input::placeholder {
            color: #ccc;
          }
          .light-mode .search-input::placeholder {
            color: #000;
          }
        `}
      </style>
      {/* Top Navbar */}
      <nav className="navbar fixed-top">
        <div className="container-fluid d-flex mx-0">
          {/* Brand Logo navigates to home */}
          <div>
            <NavLink className="navbar-brand" to="/">
              <img
                src="/vibe.Inc_React/vibe._logo.png"
                alt="logo"
                height="40"
                width="150"
                style={{ objectFit: "cover" }}
              />
            </NavLink>
          </div>

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
                  width: "225px",
                  height: "35px",
                  color: "#fff",
                  boxShadow: "none",
                  outline: "none",
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
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fa fa-search fs-4"
                />
              </button>

              <ThemeReceiver />

            </form>

            {/* Notification */}
            <button className="btn btn-link text-white ps-2 pe-1" type="button">
              <FontAwesomeIcon
                icon={faBell}
                className="fa fa-bell fs-4"
              />
            </button>

            {/* Profile Dropdown */}
            <div className="dropdown ps-1">
              <NavLink
                to="#"
                className="options d-flex align-items-center text-decoration-none text-white"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="fa fa-user fs-4" style={{ color: "cyan" }}
                />
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/login"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Log In
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/sign out">
                    Sign Out
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >

      {/* Bottom Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ marginTop: "66px" }}
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
            <ul className="navbar-nav ms-2 me-auto mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-2" : "nav-link ms-2"
                }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Series" className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-2" : "nav-link ms-2"
                }>
                  Series
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Movies" className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-2" : "nav-link ms-2"
                }>
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Games" className={({ isActive }) =>
                    isActive && windowWidth > 991 ? "nav-link active ms-2" : "nav-link ms-2"
                  }>
                  Games
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/MyList" className={({ isActive }) =>
                    isActive && windowWidth > 991 ? "nav-link active ms-2" : "nav-link ms-2"
                  }>
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

