import React, { createContext, useState } from "react";

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const addToMyList = (item) => {
    // Check if item already exists based on title (or id if you have one)
    const exists = myList.some((i) => i.title === item.title);
    if (!exists) {
      setMyList((prev) => [...prev, item]);
      alert("Item added to My List."); // professional alert
    } else {
      alert("Item is already in My List."); // avoid duplicates
    }
  };

  const removeFromMyList = (title) => {
    setMyList((prev) => prev.filter((i) => i.title !== title));
  };

  return (
    <MyListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MyListContext.Provider>
  );
};
