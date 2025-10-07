import React from "react";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import DialogueBox from "./Components/DialogueBox";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Series from "./Pages/Series";
import Movies from "./Pages/Movies";
import Games from "./Pages/Games";
import MyList from "./Pages/MyList";
import PageNotFound from "./Pages/PageNotFound";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter basename="/vibe.Inc_React">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ThemeToggle />
      <DialogueBox />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
