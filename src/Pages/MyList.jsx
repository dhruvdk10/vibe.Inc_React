import React, { useEffect, useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { MyListContext } from "../Components/ContextAPI/MyListContext";
import CardDialog from "../Components/CardDialog";

const MyList = () => {
  const { myList } = useContext(MyListContext);
  const [dialogItem, setDialogItem] = useState(null); // for CardDialog

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
          <div className="empty-list-message mt-5 text-center d-flex flex-column align-items-center">
            <p className="mb-3" style={{ fontSize: "18px" }}>
              You haven’t added any titles to your list yet.
            </p>
            <Link to="/" className="mt-0" style={{textDecoration: "none"}}>
              <button className="explore-btn d-block mx-auto">Discover your vibe.</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="row g-3">
              {myList.map((item, index) => (
                <div key={index} className="col-6 col-md-3 col-lg-2">
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

            {/* Add More / Expand Button */}
            <div className="text-center mt-4">
              <Link className="nav-link" to="/">
                <button className="explore-btn">Expand your vibe.</button>
              </Link>
            </div>
          </>
        )}
      </section>

      {/* CardDialog */}
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
          isMyListDialog={true} // enable trash icon
        />
      )}
    </div>
  );
};

export default MyList;
