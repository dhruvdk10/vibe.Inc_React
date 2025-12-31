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
import SplashScreen from "./Components/SplashScreen";

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSplash, setShowSplash] = useState(true); 

  // ✅ SHOW SPLASH FIRST
  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <MyListProvider>
      <HashRouter>
        {/* ✅ Navbar controls global search */}
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
            element={
              <Series
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route
            path="/Movies"
            element={
              <Movies
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route
            path="/Games"
            element={
              <Games
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route
            path="/MyList"
            element={
              <MyList
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route
            path="/Dashboard"
            element={
              <Dashboard
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route
            path="/SignupDashboard"
            element={
              <SignupDashboard
                searchTerm={searchTerm}
                openModal={(item) => setModalData(item)}
              />
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* ✅ Card Modal */}
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
