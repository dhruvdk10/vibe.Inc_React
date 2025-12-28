import React, { useRef, useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";

const TrendingScrollSection = ({ title, data = [], openModal }) => {
  const safeTitle =
    typeof title === "string" && title.trim() ? title : "trending";

  const rowClass =
    safeTitle.replace(/\s+/g, "-").toLowerCase() + "-row";

  const rowRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(1);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({
      left: -rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({
      left: rowRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = row.scrollLeft;
    };

    const stopDragging = () => (isDown = false);

    const whileDragging = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches[0].pageX;
      row.scrollLeft = scrollLeft - (x - startX) * 1.5;
    };

    row.addEventListener("mousedown", startDragging);
    row.addEventListener("mouseup", stopDragging);
    row.addEventListener("mouseleave", stopDragging);
    row.addEventListener("mousemove", whileDragging);

    row.addEventListener("touchstart", startDragging);
    row.addEventListener("touchend", stopDragging);
    row.addEventListener("touchmove", whileDragging);

    return () => {
      row.removeEventListener("mousedown", startDragging);
      row.removeEventListener("mouseup", stopDragging);
      row.removeEventListener("mouseleave", stopDragging);
      row.removeEventListener("mousemove", whileDragging);

      row.removeEventListener("touchstart", startDragging);
      row.removeEventListener("touchend", stopDragging);
      row.removeEventListener("touchmove", whileDragging);
    };
  }, []);

  return (
    <section className="my-4">
      <div data-aos="fade-up">
        <div className="position-relative">
          <button className="trending-scroll-btn left" onClick={scrollLeft}>
            ‹
          </button>

          <div
            ref={rowRef}
            className={`row g-2 d-flex flex-nowrap ${rowClass}`}
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              cursor: "grab",
            }}
          >
            {Array.from({ length: 1 }, () => data)
              .flat()
              .filter(item => item && item.title)
              .map((item, index) => (
                <TrendingCard
                  key={index}
                  {...item}
                  openModal={openModal}
                />
              ))}
          </div>

          <button className="trending-scroll-btn right" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingScrollSection;
