import React from "react";

const Cards = ({ img, alt, position }) => {
  return (
    <div className="col-6 col-md-2">
      <div className="card border-0">
        <img
          src={img}
          alt={alt}
          className="card-img-top img-fluid"
          style={{ objectPosition: position }}
        />
      </div>
    </div>
  );
};

export default Cards;
