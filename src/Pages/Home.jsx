import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Cards from "../Components/Cards";
import {
  banners,
  mustWatchData,
  romanticHitsData,
  thrillingchillsData,
  cheerfulcomedyData,
  toppicksforyouData
} from "../Components/Data";


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>

      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
                  update={banner.update}
                  style={{ objectPosition: banner.position }}
                />
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
        <h2 data-aos="fade-up">Must Watch</h2>
        <div className="rrow g-1 g-md-2" data-aos="fade-up">
          {mustWatchData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Romantic Hits</h2>
        <div className="row g-1 g-md-2" data-aos="fade-up">
          {romanticHitsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Thrilling Chills</h2>
        <div className="row g-1 g-md-2" data-aos="fade-up">
          {thrillingchillsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Cheerful Comedy</h2>
        <div className="row g-1 g-md-2" data-aos="fade-up">
          {cheerfulcomedyData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Top Picks For You</h2>
        <div className="row g-1 g-md-2 mb-5" data-aos="fade-up">
          {toppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  )
}
export default Home;
