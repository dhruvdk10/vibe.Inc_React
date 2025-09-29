import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DialogueBox from "./Components/DialogueBox";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
        <Navbar />
        <DialogueBox />
        <Content />
        <Footer />
    </>
  );
};

export default App;
