import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Cards from "../Components/Cards";
import {
  moviebanner,
  todaystoppicksforyouData,
  crowdpleasersData,
  feelgoodmoviesData,
  upcomingmoviesData

} from "../Components/Data";


const Movies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>

      <section className="img_display">
        <div id="mybannerCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {moviebanner.map((moviebanner, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img
                  src={moviebanner.img}
                  className="d-block w-100 img-fluid"
                  alt={moviebanner.alt}
                  update={moviebanner.update}
                  style={{ objectPosition: moviebanner.position }}
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
        <h2 data-aos="fade-up">Today's Top Picks For You</h2>
        <div className="row g-2" data-aos="fade-up">
          {todaystoppicksforyouData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Crowd Pleasers</h2>
        <div className="row g-2" data-aos="fade-up">
          {crowdpleasersData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Feel-Good Movies</h2>
        <div className="row g-2" data-aos="fade-up">
          {feelgoodmoviesData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>

        <h2 data-aos="fade-up">Upcoming Movies</h2>
        <div className="row g-2" data-aos="fade-up">
          {upcomingmoviesData.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </div>


      </section>

    </div>
  )
}

export default Movies
