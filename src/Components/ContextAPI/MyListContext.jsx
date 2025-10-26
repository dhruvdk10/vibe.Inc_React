import React, { createContext, useState } from "react";

export const MyListContext = createContext();

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  // Function to add an item
  const addToMyList = (item) => {
    const exists = myList.some((i) => i.title === item.title);

    if (!exists) {
      setMyList((prevList) => [...prevList, item]);
      return true; // ✅ Added successfully
    } else {
      return false; // ❌ Already exists
    }
  };

  // Function to remove an item by title
  const removeFromMyList = (title) => {
    setMyList((prevList) => prevList.filter((i) => i.title !== title));
  };

  return (
    <MyListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MyListContext.Provider>
  );
};


