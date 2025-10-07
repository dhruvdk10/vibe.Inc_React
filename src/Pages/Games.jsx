import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "../Components/Cards";
import {
  gamesbanner,
  gamestoppicksforyouData,
  gamescasualData,
  gamesstrategictData

} from "../Components/Data";

const Games = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Games</h1>
        <div className="genre-select dropdown">
  {/* Dropdown Toggle Button */}
  <button
    className="btn dropdown-toggle border-0"
    type="button"
    id="categoryDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Category
  </button>

  {/* Dropdown Menu */}
  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="categoryDropdown">
    <li>
      <button className="dropdown-item" type="button">Action</button>
    </li>
    <li>
      <button className="dropdown-item" type="button">Sports</button>
    </li>
    <li>
      <button className="dropdown-item" type="button">Casual</button>
    </li>
    <li>
      <button className="dropdown-item" type="button">Strategy</button>
    </li>
    <li>
      <button className="dropdown-item" type="button">Adventure</button>
    </li>
    <li>
      <button className="dropdown-item" type="button">More...</button>
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
                  <div className="play">
                    <button><i className="fa-solid fa-play"></i> Play</button>
                  </div>
                  <div className="info">
                    <button><i className="fa-solid fa-circle-info"></i> Info</button>
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
        <h2 data-aos="fade-up">Top Picks for You</h2>
        <div className="row g-2" data-aos="fade-up">
          {gamestoppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Casual Games</h2>
        <div className="row g-2" data-aos="fade-up">
          {gamescasualData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Strategic Games</h2>
        <div className="row g-2" data-aos="fade-up">
          {gamesstrategictData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

      </section>

    </div>
  )
}

export default Games
