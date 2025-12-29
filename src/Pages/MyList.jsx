import React, { useEffect, useContext, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { MyListContext } from "../Components/ContextAPI/MyListContext";
import CardDialog from "../Components/CardDialog";

const MyList = ({ searchTerm }) => {
  const { myList } = useContext(MyListContext);
  const [dialogItem, setDialogItem] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // 🔹 Filter My List using global search
  const filteredList = myList.filter((item) =>
    !searchTerm ||
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleImageClick = (item) => {
    setDialogItem(item);
  };

  const closeDialog = () => {
    setDialogItem(null);
  };

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1>My List</h1>
      </div>

      <section className="mt-5">
        {myList.length === 0 ? (
          <div className="empty-list-message mt-5 text-center d-flex flex-column align-items-center">
            <p className="mb-3" style={{ fontSize: "18px" }}>
              You haven’t added any titles to your list yet.
            </p>
            <Link to="/" style={{ textDecoration: "none" }}>
              <button className="explore-btn">Discover your vibe.</button>
            </Link>
          </div>
        ) : searchTerm && filteredList.length === 0 ? (
          <p className="text-center text-muted mt-4">
            No results found in your list
          </p>
        ) : (
          <>
            <div className="row g-3">
              {(searchTerm ? filteredList : myList).map((item, index) => (
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

            <div className="text-center mt-4">
              <Link className="nav-link" to="/">
                <button className="explore-btn">Expand your vibe.</button>
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Card Dialog */}
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
          isMyListDialog={true}
        />
      )}
    </div>
  );
};

export default MyList;
