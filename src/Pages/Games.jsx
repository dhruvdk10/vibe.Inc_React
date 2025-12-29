import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  gamesbanner,
  gamestoppicksforyouData,
  gamescasualData,
  gamesstrategictData,
} from "../Components/Data";

import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Games = ({ searchTerm, openModal }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  /* 🔹 Combine all games */
  const allGames = [
    ...gamestoppicksforyouData,
    ...gamescasualData,
    ...gamesstrategictData,
  ];

  /* 🔹 Search filter */
  const searchResults = allGames.filter((game) =>
    !searchTerm ||
    game.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* 🔹 Top Section */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Games</h1>

        <div className="dropdown ps-2 me-3">
          <a
            href="#"
            className="genre d-flex align-items-center text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Category
          </a>

          <ul className="dropdown-menu dropdown-menu-end">
            {["Action", "Sports", "Casual", "Strategy", "Adventure", "More..."].map(
              (cat, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {cat}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* 🔹 Banner */}
      <section className="img_display">
        <div
          id="mybannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {gamesbanner.map((banner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
                  style={{ objectPosition: banner.position }}
                />
                <div className="update">{banner.update}</div>

                <div className="carousel-caption text-light">
                  <div className="play">
                    <button>
                      <FontAwesomeIcon icon={faPlay} className="me-1" />
                      Play
                    </button>
                  </div>
                  <div className="info">
                    <button>
                      <FontAwesomeIcon icon={faCircleInfo} />
                      Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mybannerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mybannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>

      {/* 🔹 Game Sections */}
      <section className="mid_section mt-5">
        {searchTerm ? (
          searchResults.length > 0 ? (
            <ScrollSection
              title={`Search Results for "${searchTerm}"`}
              data={searchResults}
              openModal={openModal}
            />
          ) : (
            <p className="text-center text-muted mt-4">
              No games found
            </p>
          )
        ) : (
          <>
            <ScrollSection
              title="Top Picks for You"
              data={gamestoppicksforyouData}
              openModal={openModal}
            />
            <ScrollSection
              title="Casual Games"
              data={gamescasualData}
              openModal={openModal}
            />
            <ScrollSection
              title="Strategic Games"
              data={gamesstrategictData}
              openModal={openModal}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default Games;
