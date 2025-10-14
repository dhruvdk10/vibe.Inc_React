import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "../Components/Cards";
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
                  <div className="play">
                    <button>
                      <i className="fa-solid fa-play"></i> Play
                    </button>
                  </div>
                  <div className="info">
                    <button>
                      <i className="fa-solid fa-circle-info"></i> Info
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

      {/* Movie Sections */}
      <section className="mid_section mt-5">
        {/* All */}
        {selectedGenre === "All" ? (
          <>
            <h2 data-aos="fade-up">Top Picks for You</h2>
            <div className="row g-2" data-aos="fade-up">
              {todaystoppicksforyouData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Crowd Pleasers</h2>
            <div className="row g-2" data-aos="fade-up">
              {crowdpleasersData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Feel-Good Movies</h2>
            <div className="row g-2" data-aos="fade-up">
              {feelgoodmoviesData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Upcoming Movies</h2>
            <div className="row g-2" data-aos="fade-up">
              {upcomingmoviesData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Romantic Hits</h2>
            <div className="row g-2" data-aos="fade-up">
              {romanticHitsData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Thrilling Chills</h2>
            <div className="row g-2" data-aos="fade-up">
              {thrillingchillsData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>

            <h2 data-aos="fade-up">Cheerful Comedy</h2>
            <div className="row g-2" data-aos="fade-up">
              {cheerfulcomedyData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Comedy" ? (
          <>
            <h2 data-aos="fade-up">Cheerful Comedy</h2>
            <div className="row g-2" data-aos="fade-up">
              {cheerfulcomedyData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Romantic" ? (
          <>
            <h2 data-aos="fade-up">Romantic Hits</h2>
            <div className="row g-2" data-aos="fade-up">
              {romanticHitsData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Thriller" ? (
          <>
            <h2 data-aos="fade-up">Thrilling Chills</h2>
            <div className="row g-2" data-aos="fade-up">
              {thrillingchillsData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Drama" ? (
          <>
            <h2 data-aos="fade-up">Crowd Pleasers</h2>
            <div className="row g-2" data-aos="fade-up">
              {crowdpleasersData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Action" ? (
          <>
            <h2 data-aos="fade-up">Top Picks for You</h2>
            <div className="row g-2" data-aos="fade-up">
              {todaystoppicksforyouData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : selectedGenre === "Horror" ? (
          <>
            <h2 data-aos="fade-up">Upcoming Movies</h2>
            <div className="row g-2" data-aos="fade-up">
              {upcomingmoviesData.map((item, index) => (
                <Cards key={index} {...item} />
              ))}
            </div>
          </>
        ) : (
          <p className="text-center mt-5">No movies found for this genre.</p>
        )}
      </section>
    </div>
  );
};

export default Movies;
