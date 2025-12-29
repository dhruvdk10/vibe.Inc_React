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
  topShows,
} from "../Components/Data";
import ScrollSection from "../Components/ScrollSection";
import TrendingScrollSection from "../Components/TrendingScrollSection";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupDashboard = ({ openModal }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔹 Combine all shows for search
  const allShows = [
    ...mustWatchData,
    ...romanticHitsData,
    ...thrillingchillsData,
    ...cheerfulcomedyData,
    ...toppicksforyouData,
    ...topShows,
  ];

  // 🔹 Filter based on searchTerm
  const searchResults = allShows.filter(
    (item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* ----------------- WELCOME + SEARCH ------------------ */}
      <div className="text-light px-2 pt-4 d-flex justify-content-between align-items-center">
        <h1 className="fw-bold" style={{ fontSize: "2rem" }}>
          Welcome !
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

      {/* ----------------- MAIN BANNER ------------------ */}
      <section className="img_display">
        <div
          id="mybannerCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
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
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="play-icon me-1"
                      />
                      Play
                    </button>
                  </div>

                  <div className="info">
                    <button>
                      <FontAwesomeIcon icon={faCircleInfo} className="info-icon" />
                      Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mybannerCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mybannerCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* ----------------- CONTENT SECTIONS ------------------ */}
      <section className="mid_section mt-5">
        {searchTerm ? (
          searchResults.length > 0 ? (
            <ScrollSection
              title={`Search Results for "${searchTerm}"`}
              data={searchResults}
              openModal={openModal}
            />
          ) : (
            <p className="text-center text-muted mt-4">No results found</p>
          )
        ) : (
          <>
            <ScrollSection
              title="Must Watch"
              data={mustWatchData}
              openModal={openModal}
            />
            <ScrollSection
              title="Romantic Hits"
              data={romanticHitsData}
              openModal={openModal}
            />
            <TrendingScrollSection data={topShows} openModal={openModal} />
            <ScrollSection
              title="Thrilling Chills"
              data={thrillingchillsData}
              openModal={openModal}
            />
            <ScrollSection
              title="Cheerful Comedy"
              data={cheerfulcomedyData}
              openModal={openModal}
            />
            <ScrollSection
              title="Top Picks for You"
              data={toppicksforyouData}
              openModal={openModal}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default SignupDashboard;
