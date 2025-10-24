import React, { useRef, useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";

const TrendingScrollSection = ({ title, data, openModal }) => {
  const rowClass = title.replace(/\s+/g, "-").toLowerCase() + "-row";
  const rowRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2); // default for desktop

  // ✅ Adjust number of cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile
        setRepeatCount(8);
      } else if (width < 1200) {
        // Tablet
        setRepeatCount(4);
      } else {
        // Desktop / large screens
        setRepeatCount(2);
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (rowRef.current)
      rowRef.current.scrollBy({ left: -rowRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (rowRef.current)
      rowRef.current.scrollBy({ left: rowRef.current.offsetWidth, behavior: "smooth" });
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
            {Array.from({ length: repeatCount }, () => data)
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
