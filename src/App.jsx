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
import Dashboard from "./Pages/Dashboard";
import SignupDashboard from "./Pages/SignupDashboard";
import CardDialog from "./Components/CardDialog";
import "./index.css";
import { MyListProvider } from "./Components/ContextAPI/MyListContext";

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ GLOBAL SEARCH STATE

  return (
    <MyListProvider>
      <HashRouter>

        {/* ✅ Pass setSearchTerm to Navbar */}
        <Navbar setSearchTerm={setSearchTerm} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
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

          <Route
            path="/Dashboard"
            element={<Dashboard openModal={(item) => setModalData(item)} />}
          />

          <Route
            path="/SignupDashboard"
            element={<SignupDashboard openModal={(item) => setModalData(item)} />}
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* Card Dialog */}
        {modalData && (
          <CardDialog {...modalData} onClose={() => setModalData(null)} />
        )}

        <DialogueBox />
        <SignUpBox />
        <Footer />
      </HashRouter>
    </MyListProvider>
  );
};

export default App;
