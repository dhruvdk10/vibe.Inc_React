import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
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
          </Link>

          <div className="d-flex align-items-center">

            {/* Search */}
            <form className="d-flex align-items-center" role="search">
              <input
                className="form-control mx-2 d-none"
                type="search"
                placeholder="Find your vibe."
                aria-label="Search"
                style={{
                  width: "265px",
                  background: "black",
                  color: "#fff",
                  border: "none",
                }}
              />
              <button
                className="btn btn-link text-white px-2"
                type="button"
                id="search-toggle"
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
                <Link className="nav-link" to="/series">
                  Series
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/games">
                  Games
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/my-list">
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

