import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Cards = ({ img, alt, position }) => {
  const [like, setLike] = useState(false);

  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="movie-card border-0">
        <img
          src={img}
          alt={alt}
          className="movie-card-img-top img-fluid"
          style={{ objectPosition: position }}
        />
        <span
          className="like-icon"
          onClick={() => setLike(!like)}
          style={{
            fontSize: "20px",
            cursor: "pointer",
            color: "#bbb",
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
