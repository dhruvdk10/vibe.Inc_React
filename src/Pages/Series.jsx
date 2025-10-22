import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  seriesbanner,
  seriestoppicksforyouData,
  mustwatchshowsandseriesData,
  seriesenglishData,
  hinditvshowsData
} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Series = ({ openModal }) => { // receive openModal prop
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Series</h1>
        <div className="dropdown ps-2 me-3">
          {/* Dropdown Toggle Button */}
          <a
            href="#"
            className="genre d-flex align-items-center text-decoration-none dropdown-toggle"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </a>

          {/* Dropdown Menu */}
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="categoryDropdown">
            {[
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
                <a className="dropdown-item" href="#">{genre}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Banner */}
      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {seriesbanner.map((seriesbanner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={seriesbanner.img}
                  className="d-block w-100 img-fluid"
                  alt={seriesbanner.alt}
                  style={{ objectPosition: seriesbanner.position }}
                />
                <div className="update">{seriesbanner.update}</div>
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
          <button className="carousel-control-prev" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mybannerCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Series Sections */}
      <section className="mid_section mt-5">
        <ScrollSection title="Top Picks for You" data={seriestoppicksforyouData} openModal={openModal} />
        <ScrollSection title="Must Watch" data={mustwatchshowsandseriesData} openModal={openModal} />
        <ScrollSection title="English Series" data={seriesenglishData} openModal={openModal} />
        <ScrollSection title="Hindi TV Shows" data={hinditvshowsData} openModal={openModal} />
      </section>
    </div>
  );
};

export default Series;
