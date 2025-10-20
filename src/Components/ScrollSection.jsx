import React, { useRef } from "react";
import Cards from "./Cards";

const ScrollSection = ({ title, data }) => {
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
        <p className="section-title">{title}</p>
        <div className="position-relative">
          <button className="scroll-btn left" onClick={scrollLeft}>
            ‹
          </button>

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
            {Array.from({ length: 20 }, () => data) // repeat data to ensure enough items to scroll
              .flat() // flatten into one array
              .map((item, index) => (
                <Cards key={index} {...item} />
              ))}
          </div>

          <button className="scroll-btn right" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
