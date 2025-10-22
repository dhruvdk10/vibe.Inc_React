import React from "react";

const TrendingCard = ({ id, img, alt, position, title, d1, d2, d3, summary, openModal }) => {
  return (
    <div className="trending-container col-12 col-md-6 col-lg-3">
      {/* Parent relative container */}
      <div
        className="trending-card position-relative"
        style={{ overflow: "hidden", cursor: "pointer"}}
      >
        {/* ID badge absolute */}
        {id && (
          <span
            className="card-id"
          >
            {id}
          </span>
        )}

        {/* Image absolute */}
        {img && (
          <img
            src={img}
            alt={alt || "Trending"}
            className="trending-img img-fluid"
            onClick={() => openModal && openModal({ img, id, alt, position, title, d1, d2, d3, summary})}
          />
        )}
      </div>
    </div>
  );
};

export default TrendingCard;
