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
  toppicksforyouData,
  topShows
} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import TrendingScrollSection from "../Components/TrendingScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = ({ openModal }) => {

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "User";

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* ----------------- DASHBOARD HEADER ------------------ */}
      <div className="text-light px-4 pt-4">
        <h1 className="fw-bold" style={{ fontSize: "2rem" }}>
          Welcome back, {username}! 👋
        </h1>
        <p className="text-secondary" style={{ fontSize: "1rem" }}>
          Here’s your personalised dashboard. Continue watching or explore new titles below.
        </p>
      </div>

      {/* ----------------- MAIN BANNER SECTION ------------------ */}
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
                <div className="update">{banner.update}</div>
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

      {/* ----------------- PERSONALIZED SECTIONS ------------------ */}
      <section className="mid_section mt-5">

        {/* CONTINUE WATCHING — personalized */}
        <ScrollSection
          title={`Continue Watching, ${username}`}
          data={mustWatchData}
          openModal={openModal}
        />

        {/* RECOMMENDED FOR YOU */}
        <ScrollSection
          title="Recommended Based on Your Interests"
          data={romanticHitsData}
          openModal={openModal}
        />

        {/* TRENDING FOR YOU */}
        <TrendingScrollSection
          title="Trending Now for You"
          data={topShows}
          openModal={openModal}
        />

        {/* THRILLERS SUGGESTIONS */}
        <ScrollSection
          title="Because You Like Thriller Shows"
          data={thrillingchillsData}
          openModal={openModal}
        />

        {/* LIGHT COMEDY */}
        <ScrollSection
          title="Relax with Comedy"
          data={cheerfulcomedyData}
          openModal={openModal}
        />

        {/* TOP PICKS */}
        <ScrollSection
          title="Your Top Picks"
          data={toppicksforyouData}
          openModal={openModal}
        />
      </section>
    </div>
  );
};

export default Dashboard;
