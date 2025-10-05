import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "../Components/Cards";
import {
  seriesbanner,
  seriestoppicksforyouData,
  mustwatchshowsandseriesData,
  seriesenglishData,
  hinditvshowsData
} from "../Components/Data";

function Series() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>Series</h1>
        <select className="genre-select py-1 px-2 me-3">
          <option value="all">Genres</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="family">Romantic</option>
          <option value="thriller">Thriller</option>
          <option value="horror">Horror</option>
          <option value="animation">Anime</option>
          <option value="adventure">Adventure</option>
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="mystery">Mystery</option>
          <option value="documentary">Biography</option>
          <option value="war">More...</option>


        </select>
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
        <h2 data-aos="fade-up">Top Picks For You</h2>
        <div className="row g-2" data-aos="fade-up">
          {seriestoppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Must Watch</h2>
        <div className="row g-2" data-aos="fade-up">
          {mustwatchshowsandseriesData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Popular English Series</h2>
        <div className="row g-2" data-aos="fade-up">
          {seriesenglishData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Hindi TV shows</h2>
        <div className="row g-2" data-aos="fade-up">
          {hinditvshowsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>


      </section>

    </div>
  )
}

export default Series
