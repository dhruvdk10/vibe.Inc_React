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


const Series = () => {
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
            className=" genre d-flex align-items-center text-decoration-none dropdown-toggle"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Genres
          </a>

          {/* Dropdown Menu */}
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="categoryDropdown">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Comedy</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Drama</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Romantic</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Horror</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Thriller</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Adventure</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Sci-Fi</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Mystery</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Fantasy</a>
            </li>
          </ul>
        </div>
      </div>

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
                  <div className="play ">
                    <button><FontAwesomeIcon
                      icon={faPlay}
                      className="play-icon me-1"
                    />  Play</button>
                  </div>
                  <div className="info">
                    <button><FontAwesomeIcon
                      icon={faCircleInfo}
                      className="info-icon" /> Info</button>
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

      <section className="mid_section mt-5">
        <ScrollSection title="Top Picks for You" data={seriestoppicksforyouData} />
        <ScrollSection title="Must Watch Shows and Series" data={mustwatchshowsandseriesData} />
        <ScrollSection title="Series in English" data={seriesenglishData} />
        <ScrollSection title="Hindi TV Shows" data={hinditvshowsData} />
      </section>

    </div>
  )
}

export default Series
