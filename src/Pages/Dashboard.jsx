import React, { useEffect, useState } from "react";
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

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔍 SEARCH FILTER FUNCTION
  const filterData = (data) => {
    return data.filter(item =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div>

      {/* ----------------- WELCOME MESSAGE ------------------ */}
      <div className="text-light px-2 pt-4 d-flex justify-content-between align-items-center">
        <h1 className="fw-bold" style={{ fontSize: "2rem" }}>
          Welcome back!
        </h1>

        {/* 🔍 SEARCH INPUT */}
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search movies or shows..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
        </div>
      </section>

      {/* ----------------- PERSONALIZED SECTIONS ------------------ */}
      <section className="mid_section mt-5">
        <ScrollSection
          title="Must Watch"
          data={filterData(mustWatchData)}
          openModal={openModal}
        />

        <ScrollSection
          title="Romantic Hits"
          data={filterData(romanticHitsData)}
          openModal={openModal}
        />

        <TrendingScrollSection
          title=""
          data={filterData(topShows)}
          openModal={openModal}
        />

        <ScrollSection
          title="Thrilling Chills"
          data={filterData(thrillingchillsData)}
          openModal={openModal}
        />

        <ScrollSection
          title="Cheerful Comedy"
          data={filterData(cheerfulcomedyData)}
          openModal={openModal}
        />

        <ScrollSection
          title="Top Picks for You"
          data={filterData(toppicksforyouData)}
          openModal={openModal}
        />
      </section>

    </div>
  );
};

export default Dashboard;
