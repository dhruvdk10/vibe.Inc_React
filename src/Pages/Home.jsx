import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  banners,
  mustWatchData,
  romanticHitsData,
  thrillingchillsData,
  cheerfulcomedyData,
  toppicksforyouData
} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
                {/* Image container */}
                <img
                  src={banner.img}
                  className="d-block w-100 img-fluid"
                  alt={banner.alt}
                  style={{ objectPosition: banner.position }}
                />
                {/* Buttons and update overlay */}
                <div className="update">{banner.update}</div>
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
      </section >


      <section className="mid_section mt-5">
        <ScrollSection title="Must Watch" data={mustWatchData} />
        <ScrollSection title="Romantic Hits" data={romanticHitsData} />
        <ScrollSection title="Thrilling Chills" data={thrillingchillsData} />
        <ScrollSection title="Cheerful Comedy" data={cheerfulcomedyData} />
        <ScrollSection title="Top Picks for You" data={toppicksforyouData} />
      </section>

    </div >
  )
}
export default Home;
