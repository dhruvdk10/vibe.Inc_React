import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Cards = ({ img, alt, position }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="movie-card border-0 position-relative" >

        <img
          src={img}
          alt={alt}
          className="movie-card-img-top img-fluid"
          style={{ objectPosition: position }}
        />
        <span
          className="like-icon position-absolute"
          onClick={() => setLike(!like)}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: like ? "#931b1b" : "#ffc3c3", // red when liked, pink when not
            zIndex: 10,
          }}
        >
          {like ? <FaHeart /> : <FaRegHeart />}
        </span>
      </div>
    </div>
  );
};

export default Cards;
