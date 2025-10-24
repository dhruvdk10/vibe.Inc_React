import React, { useRef, useEffect } from "react";
import Cards from "./Cards";

const ScrollSection = ({ title, data, openModal }) => {
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

  // ✅ Add swipe + drag scroll support
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
      const walk = (x - startX) * 1.5; // drag sensitivity
      row.scrollLeft = scrollLeft - walk;
    };

    // Mouse events
    row.addEventListener("mousedown", startDragging);
    row.addEventListener("mouseleave", stopDragging);
    row.addEventListener("mouseup", stopDragging);
    row.addEventListener("mousemove", whileDragging);

    // Touch events
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
              cursor: "grab",
            }}
          >
            {Array.from({ length: 20 }, () => data)
              .flat()
              .map((item, index) => (
                <Cards key={index} {...item} openModal={openModal} />
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
