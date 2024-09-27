import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects, About, Home } from "../screens";

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
