import React from "react";

const Cards = ({ img, alt, position }) => {
  return (
    <div className="col-6 col-md-2 mb-2 mb-md-0">
      <div className="movie-card border-0">
        <img
          src={img}
          alt={alt}
          className="movie-card-img-top img-fluid"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
};

export default Cards;
