import React, { useRef, useEffect } from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDialog = ({ img, alt, title, d1, d2, d3, summary, position, onClose }) => {
  const dialogRef = useRef();

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="card-dialog">
      <div ref={dialogRef} style={{ width: "100%" }}>
        <button
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            fontSize: "20px",
            color: "#fff",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </button>

        <img className="img-fluid" src={img} alt={alt} style={{ objectPosition: position }} />
        <h3>{title}</h3>

        <button className="dialog-btn btn btn-secondary">
          <FontAwesomeIcon icon={faPlay} className="play-icon me-1" /> Play
        </button>

        <div className="mx-4 mt-2 mb-5">
          <ul>
            <li>{d1}</li> |<li>{d2}</li> |<li>{d3}</li>
          </ul>
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDialog;
