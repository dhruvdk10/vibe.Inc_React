import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  gamesbanner,
  gamestoppicksforyouData,
  gamescasualData,
  gamesstrategictData

} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Games = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Games</h1>
        <div className="dropdown ps-2 me-3">
          {/* Dropdown Toggle Button */}
          <a
            href="#"
            className="genre d-flex align-items-center text-decoration-none dropdown-toggle"
            id="categoryDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category
          </a>

          {/* Dropdown Menu */}
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="categoryDropdown">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Sports</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Casual</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Strategy</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Adventure</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">More...</a>
            </li>
          </ul>
        </div>
      </div>

      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {gamesbanner.map((gamesbanner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={gamesbanner.img}
                  className="d-block w-100 img-fluid"
                  alt={gamesbanner.alt}
                  style={{ objectPosition: gamesbanner.position }}
                />
                <div className="update">{gamesbanner.update}</div>
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
        <ScrollSection title="Top Picks for You" data={gamestoppicksforyouData} />
        <ScrollSection title="Casual Games" data={gamescasualData} />
        <ScrollSection title="Strategic Games" data={gamesstrategictData} />
      </section>

    </div>
  )
}

export default Games
