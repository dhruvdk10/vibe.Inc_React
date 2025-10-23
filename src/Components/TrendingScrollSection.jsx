import React, { useRef } from "react";
import TrendingCard from "./TrendingCard";

const TrendingScrollSection = ({ title, data, openModal }) => {
  const rowClass = title.replace(/\s+/g, "-").toLowerCase() + "-row";
  const rowRef = useRef(null);

  const scrollLeft = () => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({
      left: -rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({
      left: rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-4">
      <div data-aos="fade-up">
        <div className="position-relative">
          {/* Scroll Buttons */}
          <button className="trending-scroll-btn left" onClick={scrollLeft}>
            ‹
          </button>

          {/* Scrollable Row */}
          <div
            ref={rowRef}
            className={`row g-2 d-flex flex-nowrap ${rowClass}`}
            style={{
              overflowX: "hidden",
              overflowY: "hidden",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
            }}
          >
            {Array.from({ length: 20 }, () => data)
              .flat()
              .map((item, index) => (
                <TrendingCard key={index} {...item} openModal={openModal} />
              ))}
          </div>

          {/* Right Button */}
          <button className="trending-scroll-btn right" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingScrollSection;
