import React from "react";
import Navbar from "./Components/Navbar";
import DialogueBox from "./Components/DialogueBox";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TVShows from "./Pages/TV Shows";
import Movies from "./Pages/Movies";
import Games from "./Pages/Games";
import Trending from "./Pages/Trending";
import MyList from "./Pages/My List";
import PageNotFound from "./Pages/Page Not Found";

const App = () => {
  return (
    <BrowserRouter basename="/vibe.Inc_React">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TVShows" element={<TVShows />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/MyList" element={<MyList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <DialogueBox />
      <Content />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
