import React, { useRef, useContext, useState, useEffect } from "react";
import { faPlay, faTrash, faEye, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyListContext } from "./ContextAPI/MyListContext";

const CardDialog = ({
  img,
  alt,
  title,
  d1,
  d2,
  d3,
  summary,
  position,
  onClose,
  isMyListDialog = false, // new prop to detect My List mode
}) => {
  const dialogRef = useRef();
  const { removeFromMyList, addToMyList } = useContext(MyListContext);
  const [showConfirm, setShowConfirm] = useState(false); // overlay state

  // handle add for normal items
  const handleAdd = () => {
    addToMyList({ img, alt, title, d1, d2, d3, summary, position });
    onClose(); // optional: close dialog after adding
  };

  // handle remove click → show overlay
  const handleRemoveClick = () => {
    setShowConfirm(true);
  };

  // confirm removal
  const confirmRemove = () => {
    removeFromMyList(title);
    setShowConfirm(false);
    onClose(); // close dialog
  };

  // cancel removal
  const cancelRemove = () => {
    setShowConfirm(false);
  };

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
      <div className="card-dialog" ref={dialogRef}>
        <img className="img-fluid" src={img} alt={alt} style={{ objectPosition: position }} />
        <h3>{title}</h3>

        <button className="dialog-btn">
          <FontAwesomeIcon icon={faPlay} className="play-icon me-1" /> Play
        </button>

        <div className="card-details mx-4">
          <ul>
            <li>{d1}</li> | <li>{d2}</li> | <li>{d3}</li>
          </ul>

          <div className="d-flex gap-2 align-items-center mb-4">
            <span> <button className="preview-icon">
              <FontAwesomeIcon icon={faEye} /></button>
            </span>
            <span>
              {isMyListDialog ? (
                <button className="remove-icon" onClick={handleRemoveClick}>
                  <FontAwesomeIcon
                    icon={faTrash}
                  // show overlay instead of window.confirm
                  /></button>
              ) : (
                <button className="save-icon" onClick={handleAdd}>
                  <FontAwesomeIcon
                    icon={faPlus}
                  />
                </button>
              )}
            </span>
          </div>
          <p className="mb-4">{summary}</p>
        </div>

        {/* Confirmation Overlay */}
        {showConfirm && (
          <div className="confirm-overlay">
            <div className="confirm-box">
              <p className="mb-3" style={{ lineHeight: "1.5" }}>
                Are you sure you want to remove this item from <b>My List</b>?
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="yes-btn" onClick={confirmRemove}>
                  Yes
                </button>
                <button className="no-btn" onClick={cancelRemove}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDialog;
