import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { banners } from "./Components/Data";
import Cards from "./Components/Cards";
import DialogueBox from "./Components/DialogueBox";
import Navbar from "./Components/Navbar";
import { mustWatchData, romanticHitsData, thrillingchillsData, cheerfulcomedyData, toppicksforyouData, storeBadges, socialLinks } from "./Components/Data";

const App = () => {
  return (
    <>

      <div className="Navbar">
        <Navbar />
      </div>


      <div className="DialogueBox">
        <DialogueBox />
      </div>



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
            <Cards key={index}
              img={item.img}
              alt={item.alt}
              position={item.position}
            />
          ))}
        </div>

        <h2>Romantic Hits</h2>
        <div className="row g-2">
          {romanticHitsData.map((item, index) => (
            <Cards key={index}
              img={item.img}
              alt={item.alt}
              position={item.position}
            />
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
            <Cards key={index}
              img={item.img}
              alt={item.alt}
              position={item.position}
            />
          ))}
        </div>

        <h2>Top Picks For You</h2>
        <div className="row g-2 mb-5">
          {toppicksforyouData.map((item, index) => (
            <Cards key={index}
              img={item.img}
              alt={item.alt}
              position={item.position}
            />
          ))}
        </div>
      </section>

      <footer className="w-100 pt-5" style={{ backgroundColor: "#141414", overflowX: "hidden" }}>
        <div className="container-fluid px-0">
          <div className="row g-0 text-center mb-5 justify-content-center mx-0">
            <div className="col-6 col-md-3" style={{ backgroundColor: "#141414" }}>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Audio Description</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Investor Relations</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Legal Notices</a>
            </div>

            <div className="col-6 col-md-3" style={{ backgroundColor: "#141414" }}>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Help Centre</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Jobs</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Cookie Preferences</a>
            </div>

            <div className="col-6 col-md-3" style={{ backgroundColor: "#141414" }}>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Gift Cards</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Terms of Use</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Corporate Information</a>
            </div>

            <div className="col-6 col-md-3" style={{ backgroundColor: "#141414" }}>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Media Centre</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Privacy</a>
              <a href="#" className="d-block text-decoration-none" style={{ color: "#ccc", margin: "8px 0" }}>Contact Us</a>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {storeBadges.map((badge, index) => (
                <div key={index} className="store-buttons">
                  <img src={badge.src} alt={badge.alt} style={{ height: "40px" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="width-100" style={{ height: "0.2px" }} />

        <div className="text-center mb-3 text-muted">
          <p className="mb-1">
            This site is for educational use only. All posters and images belong to their respective
            owners. No ownership or endorsement claimed.
          </p>
          <p className="mb-1">© 2025 vibe.Inc. All rights reserved. | Dhruv Kapoor</p>
          <p className="mb-2">Follow us on :</p>
        </div>

        <div className="social-icons">
          <div className="footer-links d-flex justify-content-center gap-3 fs-5">
            {socialLinks.map((social, index) => (
              <a key={index} href={social.href} className="text-white fs-4 me-3">
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
