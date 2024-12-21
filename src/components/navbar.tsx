import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100); // Changez 100 pour ajuster le seuil de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={
        isSticky
          ? {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(10px)",
            }
          : {}
      }
      className={`navbar ${isSticky ? "sticky" : ""}`}
    >
      <div className="navbar-content">
        <h1>Logo</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
