import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import DialogueBox from "./Components/DialogueBox";
import SignUpBox from "./Components/SignUpBox";
import Footer from "./Components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import Games from "./Pages/Games";
import MyList from "./Pages/MyList";
import PageNotFound from "./Pages/PageNotFound";
import CardDialog from "./Components/CardDialog";
import "./index.css";
import { MyListProvider } from "./Components/ContextAPI/MyListContext"; // Import Context

const App = () => {
  const [modalData, setModalData] = useState(null);

  return (
    <MyListProvider> {/* Wrap entire app */}
      <HashRouter>
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={<Home openModal={(item) => setModalData(item)} />}
          />
          <Route
            path="/Series"
            element={<Series openModal={(item) => setModalData(item)} />}
          />
          <Route
            path="/Movies"
            element={<Movies openModal={(item) => setModalData(item)} />}
          />
          <Route
            path="/Games"
            element={<Games openModal={(item) => setModalData(item)} />}
          />
          <Route
            path="/MyList"
            element={<MyList openModal={(item) => setModalData(item)} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* Render CardDialog at top level */}
        {modalData && (
          <CardDialog
            {...modalData}
            onClose={() => setModalData(null)}
          />
        )}

        <DialogueBox />
        <SignUpBox />
        <Footer />
      </HashRouter>
    </MyListProvider>
  );
};

export default App;

