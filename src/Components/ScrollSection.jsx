import React, { useRef, useEffect } from "react";
import Cards from "./Cards";

const ScrollSection = ({ title, data = [], openModal }) => {
  // ✅ Safety for title
  const safeTitle = typeof title === "string" ? title : "section";
  const rowClass = `${safeTitle.replace(/\s+/g, "-").toLowerCase()}-row`;

  const rowRef = useRef(null);

  // Scroll buttons
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

  // Drag + Swipe support
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    let isDown = false;
    let startX = 0;
    let scrollLeftValue = 0;

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX || e.touches[0].pageX;
      scrollLeftValue = row.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const whileDragging = (e) => {
      if (!isDown) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = (x - startX) * 1.5;
      row.scrollLeft = scrollLeftValue - walk;
    };

    row.addEventListener("mousedown", startDragging);
    row.addEventListener("mousemove", whileDragging);
    row.addEventListener("mouseup", stopDragging);
    row.addEventListener("mouseleave", stopDragging);

    row.addEventListener("touchstart", startDragging);
    row.addEventListener("touchmove", whileDragging);
    row.addEventListener("touchend", stopDragging);

    return () => {
      row.removeEventListener("mousedown", startDragging);
      row.removeEventListener("mousemove", whileDragging);
      row.removeEventListener("mouseup", stopDragging);
      row.removeEventListener("mouseleave", stopDragging);

      row.removeEventListener("touchstart", startDragging);
      row.removeEventListener("touchmove", whileDragging);
      row.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <section className="my-4">
      <div data-aos="fade-up">
        <p className="section-title">{safeTitle}</p>

        <div className="position-relative">
          {/* Left Button */}
          <button className="scroll-btn left" onClick={scrollLeft}>
            ‹
          </button>

          {/* Scroll Row */}
          <div
            ref={rowRef}
            className={`row g-2 d-flex flex-nowrap ${rowClass}`}
            style={{
              overflowX: "hidden",
              whiteSpace: "nowrap",
              cursor: "grab",
            }}
          >
            {data.length === 0 ? (
              <p className="text-muted ms-3">No results found</p>
            ) : (
              data.map((item, index) => (
                <Cards key={index} {...item} openModal={openModal} />
              ))
            )}
          </div>

          {/* Right Button */}
          <button className="scroll-btn right" onClick={scrollRight}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
