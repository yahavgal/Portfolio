import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Header from "./Header";

/* Layout Component */
const Layout = ({ toggleTheme, isDarkMode }) => {
  const location = useLocation();
  const [projectExpanded, setProjectExpanded] = useState(false); // ✅ Track project expansion

  return (
    <>
      {!projectExpanded && <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />} {/* ✅ Hide header when expanded */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route 
            path="/projects" 
            element={<PageTransition><Projects setProjectExpanded={setProjectExpanded} /></PageTransition>} // ✅ Pass state setter
          />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Layout;
