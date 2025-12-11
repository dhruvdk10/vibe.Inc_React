import React, { useEffect, useState } from "react"; // added useState
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
import API from "../../api"; // make sure this is your axios instance

const Dashboard = ({ openModal }) => {

  // ---- UPDATED LOGIN DATA READING ---- //
  const [username, setUsername] = useState("User"); // default value

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch user from backend
    const fetchUser = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem("user")); // you already store user in localStorage on login
        if (userData && userData._id) {
          // Optionally, fetch fresh data from backend if needed
          const res = await API.get(`/users/${userData._id}`);
          setUsername(res.data.username || "User");
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchUser();
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

        <ScrollSection
          title={`Continue Watching, ${username}`}
          data={mustWatchData}
          openModal={openModal}
        />

        <ScrollSection
          title="Recommended Based on Your Interests"
          data={romanticHitsData}
          openModal={openModal}
        />

        <TrendingScrollSection
          title="Trending Now for You"
          data={topShows}
          openModal={openModal}
        />

        <ScrollSection
          title="Because You Like Thriller Shows"
          data={thrillingchillsData}
          openModal={openModal}
        />

        <ScrollSection
          title="Relax with Comedy"
          data={cheerfulcomedyData}
          openModal={openModal}
        />

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
