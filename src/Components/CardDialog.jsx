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
  isMyListDialog = false,
}) => {
  const dialogRef = useRef();
  const { removeFromMyList, addToMyList } = useContext(MyListContext);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false); // 👈 NEW

  // handle add
  const handleAdd = () => {
    const added = addToMyList({ img, alt, title, d1, d2, d3, summary, position });

    if (added) {
      setShowAlert(true); // ✅ show success overlay
      setAlreadyAdded(false);
    } else {
      setShowAlert(true); // ✅ show “already added” overlay
      setAlreadyAdded(true);
    }
  };

  // remove click → confirm overlay
  const handleRemoveClick = () => {
    setShowConfirm(true);
  };

  // confirm removal
  const confirmRemove = () => {
    removeFromMyList(title);
    setShowConfirm(false);
    onClose();
  };

  // cancel removal
  const cancelRemove = () => setShowConfirm(false);

  // close alert
  const handleAlertClose = () => setShowAlert(false);

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
            <span>
              <button className="preview-icon">
                <FontAwesomeIcon icon={faEye} />
              </button>
            </span>
            <span>
              {isMyListDialog ? (
                <button className="remove-icon" onClick={handleRemoveClick}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              ) : (
                <button className="save-icon" onClick={handleAdd}>
                  <FontAwesomeIcon icon={faPlus} />
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
                <button className="yes-btn" onClick={confirmRemove}>Yes</button>
                <button className="no-btn" onClick={cancelRemove}>No</button>
              </div>
            </div>
          </div>
        )}

        {/* Alert Overlay */}
        {showAlert && (
          <div className="confirm-overlay">
            <div className="confirm-box">
              <p className="mb-3" style={{ lineHeight: "1.5" }}>
                {alreadyAdded
                  ? "This title is already in your My List!"
                  : "Title successfully added! View it in My List?"}
              </p>
              <div className="d-flex justify-content-center gap-3">
                <button className="yes-btn" onClick={handleAlertClose}>OK</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardDialog;
