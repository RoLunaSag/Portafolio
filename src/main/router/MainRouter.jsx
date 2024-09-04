import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects, About } from "../screens";
import HeaderNavBar from "../components/HeaderNavBar";
import ScrollToTop from "./ScrollToTop";

const MainRouter = () => {
  return (
    <Router>
      <HeaderNavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
