import React from "react";
import Slider from "react-slick";
import Cards from "./Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = ({ title, data }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200, // Large desktops
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 992, // Tablets
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768, // Large mobiles
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576, // Small mobiles
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="mid_section mt-5">
      <h2 data-aos="fade-up">{title}</h2>
      <div className="row g-2" data-aos="fade-up">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Cards key={index} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CardCarousel;
