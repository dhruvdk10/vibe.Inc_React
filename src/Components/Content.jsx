import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Cards from "./Cards";
import {
  banners,
  mustWatchData,
  romanticHitsData,
  thrillingchillsData,
  cheerfulcomedyData,
  toppicksforyouData
} from "./Components/Data";

function Content() {
  return (
    <>
      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
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
        <h2>Must Watch</h2>
        <div className="row g-2">
          {mustWatchData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Romantic Hits</h2>
        <div className="row g-2">
          {romanticHitsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Thrilling Chills</h2>
        <div className="row g-2">
          {thrillingchillsData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Cheerful Comedy</h2>
        <div className="row g-2">
          {cheerfulcomedyData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2>Top Picks For You</h2>
        <div className="row g-2 mb-5">
          {toppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Content;

