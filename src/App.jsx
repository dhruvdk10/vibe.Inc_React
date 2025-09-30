import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogueBox from "./Components/DialogueBox";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import TVShows from "./Pages/TV Shows";
import Movies from "./Pages/Movies";
import Games from "./Pages/Games";
import Trending from "./Pages/Trending";
import MyList from "./Pages/My List";
import PageNotFound from "./Pages/Page Not Found";


const App = () => {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<TVShows />} path="/TVShows"></Route>
        <Route element={<Movies />} path="/Movies"></Route>
        <Route element={<Games />} path="/Games"></Route>
        <Route element={<Trending />} path="/Trending"></Route>
        <Route element={<MyList />} path="/My List"></Route>
        <Route element={<PageNotFound />} path="*"></Route>
      </Routes>
    </Router>
      <DialogueBox />
      <Content />
      <Footer />
    </>
  );
};

export default App;
