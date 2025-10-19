import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  moviebanner,
  todaystoppicksforyouData,
  crowdpleasersData,
  feelgoodmoviesData,
  upcomingmoviesData,
  romanticHitsData,
  thrillingchillsData,
  cheerfulcomedyData
} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Movies</h1>

        {/* Genre Dropdown */}
        <div className="dropdown ps-2 me-3">
          <a
            href="#"
            className="genre d-flex align-items-center text-decoration-none dropdown-toggle"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedGenre === "All" ? "Genres" : selectedGenre}
          </a>

          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="categoryDropdown"
          >
            {[
              "All",
              "Action",
              "Comedy",
              "Drama",
              "Romantic",
              "Horror",
              "Thriller",
              "Adventure",
              "Sci-Fi",
              "Mystery",
              "Fantasy",
            ].map((genre, index) => (
              <li key={index}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banner */}
      <section className="img_display">
        <div
          id="mybannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {moviebanner.map((moviebanner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={moviebanner.img}
                  className="d-block w-100 img-fluid"
                  alt={moviebanner.alt}
                  style={{ objectPosition: moviebanner.position }}
                />
                <div className="update">{moviebanner.update}</div>
                <div className="carousel-caption text-light">
                  <div className="play ">
                    <button><FontAwesomeIcon
                      icon={faPlay}
                      className="fs-4 me-2"
                    />  Play</button>
                  </div>
                  <div className="info">
                    <button><FontAwesomeIcon
                      icon={faCircleInfo}
                      className="fs-4 me-2" /> Info</button>
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
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mybannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Movie Sections */}
      <section className="mid_section mt-5">
        <ScrollSection title="Today's Top Picks for You" data={todaystoppicksforyouData} />
        <ScrollSection title="Crowd Pleasers" data={crowdpleasersData} />
        <ScrollSection title="Feel Good Movies" data={feelgoodmoviesData} />
        <ScrollSection title="Upcoming Movies" data={upcomingmoviesData} />
        <ScrollSection title="Romantic Hits" data={romanticHitsData} />
        <ScrollSection title="Thrilling Chills" data={thrillingchillsData} />
        <ScrollSection title="Cheerful Comedy" data={cheerfulcomedyData} />
      </section>
    </div>
  );
};

export default Movies;
