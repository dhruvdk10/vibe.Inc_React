import React from "react";
import Navbar from "./Components/Navbar";
import DialogueBox from "./Components/DialogueBox";
import Footer from "./Components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import Games from "./Pages/Games";
import MyList from "./Pages/MyList";
import PageNotFound from "./Pages/PageNotFound";
import "./index.css";

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <DialogueBox />
      <Footer />
    </HashRouter>
  );
};

export default App;
