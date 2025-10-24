import React, { useRef, useState, useEffect } from "react";
import TrendingCard from "./TrendingCard";

const TrendingScrollSection = ({ title, data, openModal }) => {
  const rowClass = title.replace(/\s+/g, "-").toLowerCase() + "-row";
  const rowRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(2);

  // ✅ Keep same layout but repeatCount fixed to 1
  useEffect(() => {
    setRepeatCount(1);
  }, []);

  const scrollLeft = () => {
    if (rowRef.current)
      rowRef.current.scrollBy({ left: -rowRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (rowRef.current)
      rowRef.current.scrollBy({ left: rowRef.current.offsetWidth, behavior: "smooth" });
  };

  // ✅ Add swipe and drag functionality
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDown = true;
      row.classList.add("active");
      startX = e.pageX || e.touches[0].pageX;
      scrollLeft = row.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
      row.classList.remove("active");
    };

    const whileDragging = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5; // scroll speed
      row.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    row.addEventListener("mousedown", startDragging);
    row.addEventListener("mouseleave", stopDragging);
    row.addEventListener("mouseup", stopDragging);
    row.addEventListener("mousemove", whileDragging);

    // Touch events (for phones)
    row.addEventListener("touchstart", startDragging);
    row.addEventListener("touchend", stopDragging);
    row.addEventListener("touchmove", whileDragging);

    return () => {
      row.removeEventListener("mousedown", startDragging);
      row.removeEventListener("mouseleave", stopDragging);
      row.removeEventListener("mouseup", stopDragging);
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
              cursor: "grab",
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
