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

const Movies = ({ openModal }) => {

  // 🔹 EXISTING
  const [selectedGenre, setSelectedGenre] = useState("All");

  // 🔹 NEW: search state
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔹 NEW: combine all movies
  const allMovies = [
    ...todaystoppicksforyouData,
    ...crowdpleasersData,
    ...feelgoodmoviesData,
    ...upcomingmoviesData,
    ...romanticHitsData,
    ...thrillingchillsData,
    ...cheerfulcomedyData
  ];

  // 🔹 NEW: genre + search filter
  const filteredMovies = allMovies.filter((movie) => {
    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre?.toLowerCase() === selectedGenre.toLowerCase();

    const matchesSearch =
      movie.title?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesGenre && matchesSearch;
  });

  return (
    <div>

      {/* Top Section */}
      <div className="d-flex align-items-center justify-content-between">
        <h1>Movies</h1>

        {/* Genre Dropdown (UNCHANGED) */}
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

      {/* 🔹 NEW: Search Input (does NOT affect layout) */}
      <div className="container my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Banner (UNCHANGED) */}
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
                  <div className="play">
                    <button>
                      <FontAwesomeIcon icon={faPlay} className="play-icon me-1" /> Play
                    </button>
                  </div>
                  <div className="info">
                    <button>
                      <FontAwesomeIcon icon={faCircleInfo} className="info-icon" /> Info
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

      {/* Movie Sections (LOGIC ADDED, STRUCTURE SAME) */}
      <section className="mid_section mt-5">

        {(searchTerm || selectedGenre !== "All") ? (
          filteredMovies.length > 0 ? (
            <ScrollSection
              title="Filtered Results"
              data={filteredMovies}
              openModal={openModal}
            />
          ) : (
            <p className="text-center text-muted mt-4">
              No movies found
            </p>
          )
        ) : (
          <>
            <ScrollSection title="Today's Top Picks for You" data={todaystoppicksforyouData} openModal={openModal} />
            <ScrollSection title="Crowd Pleasers" data={crowdpleasersData} openModal={openModal} />
            <ScrollSection title="Feel Good Movies" data={feelgoodmoviesData} openModal={openModal} />
            <ScrollSection title="Upcoming Movies" data={upcomingmoviesData} openModal={openModal} />
            <ScrollSection title="Romantic Hits" data={romanticHitsData} openModal={openModal} />
            <ScrollSection title="Thrilling Chills" data={thrillingchillsData} openModal={openModal} />
            <ScrollSection title="Cheerful Comedy" data={cheerfulcomedyData} openModal={openModal} />
          </>
        )}

      </section>
    </div>
  );
};

export default Movies;
