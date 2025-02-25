import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeInOut" } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div 
      initial="initial" 
      animate="animate" 
      exit="exit" 
      variants={pageVariants}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
