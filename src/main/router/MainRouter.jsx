import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects, About, Loading, Home } from "../screens";
import { BottomBar, HeaderNavBar } from "../components";

const MainRouter = () => {
  return (
    <Router>
      <HeaderNavBar />
      <BottomBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
