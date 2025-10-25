import React, { useEffect, useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { MyListContext } from "../Components/ContextAPI/MyListContext"; // import context
import CardDialog from "../Components/CardDialog"; // import CardDialog

const MyList = () => {
  const { myList, removeFromMyList } = useContext(MyListContext);
  const [selectedTitle, setSelectedTitle] = useState(null); // for remove modal
  const [showConfirm, setShowConfirm] = useState(false); // remove modal toggle
  const [dialogItem, setDialogItem] = useState(null); // for CardDialog

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // handle remove click → open modal
  const handleRemoveClick = (title) => {
    setSelectedTitle(title);
    setShowConfirm(true);
  };

  const confirmRemove = () => {
    if (selectedTitle) {
      removeFromMyList(selectedTitle);
      setShowConfirm(false);
      setSelectedTitle(null);
    }
  };

  const cancelRemove = () => {
    setShowConfirm(false);
    setSelectedTitle(null);
  };

  // handle image click → open CardDialog
  const handleImageClick = (item) => {
    setDialogItem(item);
  };

  // close CardDialog
  const closeDialog = () => {
    setDialogItem(null);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>My List</h1>
      </div>

      {/* My List items */}
      <section className="mt-5">
        {myList.length === 0 ? (
          <div className="empty-list-container mt-5">
            <div className="empty-list-message text-center">
              <h2>Nothing here yet!!</h2>
              <p className="mb-3" style={{ fontSize: "16px" }}>
                Add some favourites to see them here
              </p>
              <Link className="nav-link" to="/">
                <button className="explore-btn">Continue Exploring</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-3">
            {myList.map((item, index) => (
              <div
                key={index}
                className="col-6 col-md-3 col-lg-2 position-relative"
              >
                <div className="movie-card border-0">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="movie-card img-top img-fluid"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(item)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {dialogItem && (
        <CardDialog
          img={dialogItem.img}
          alt={dialogItem.alt}
          title={dialogItem.title}
          d1={dialogItem.d1}
          d2={dialogItem.d2}
          d3={dialogItem.d3}
          summary={dialogItem.summary}
          position={dialogItem.position}
          onClose={closeDialog}
          isMyListDialog={true} // enable remove icon instead of plus
        />
      )}
    </div>
  );
};

export default MyList;
