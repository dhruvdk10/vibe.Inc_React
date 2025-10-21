import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { listbanner } from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MyList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>My List</h1>
      </div>
      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {listbanner.map((listbanner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                {/* Image container */}
                <img
                  src={listbanner.img}
                  className="d-block w-100 img-fluid"
                  alt={listbanner.alt}
                  style={{ objectPosition: listbanner.position }}
                />
                {/* Buttons and update overlay */}
                <div className="update">{listbanner.update}</div>
                <div className="carousel-caption text-light">
                  <div className="play ">
                    <button><FontAwesomeIcon
                      icon={faPlay}
                      className="play-icon me-2"
                    />  Play</button>
                  </div>
                  <div className="info">
                    <button><FontAwesomeIcon
                      icon={faCircleInfo}
                      className="info-icon me-2" /> Info</button>
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

      <section>
        <div class="empty-list-container mt-5">
          <div class="empty-list-message">
            <h2>Nothing here yet!!</h2>
            <p class="mb-3" style={{ fontSize: "16px" }}>Add some favourites to see them here</p>
            <Link className="nav-link" to="/"><button class="explore-btn">Continue Exploring</button></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MyList
