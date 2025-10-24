import React, { useRef, useEffect } from "react";
import { faPlay, faPlus, faEye } from "@fortawesome/free-solid-svg-icons";
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
    <div className="dialog-overlay">
    <div className="card-dialog">
      <div ref={dialogRef} style={{ width: "100%" }}>

        <img className="img-fluid" src={img} alt={alt} style={{ objectPosition: position }} />
        <h3>{title}</h3>

        <button className="dialog-btn">
          <FontAwesomeIcon icon={faPlay} className="play-icon me-1" /> Play
        </button>

        <div className="mx-4">
          <ul>
            <li>{d1}</li> |<li>{d2}</li> |<li>{d3}</li>
          </ul>

          <div className="d-flex gap-2 align-items-center mb-4">
            <span><FontAwesomeIcon icon={faEye} className="preview-icon" /></span>
            <span><FontAwesomeIcon icon={faPlus} className="save-icon" /></span>
          </div>
          <p className="mb-4">{summary}</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardDialog;
