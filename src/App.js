import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Compose from "./components/Compose";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export default () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/compose" element={<Compose />} />
      </Routes>
    </BrowserRouter>
  );
};
