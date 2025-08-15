import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  return (
    <div
      onClick={toggleMode}
      className="relative flex items-center justify-center h-12 w-12 overflow-hidden rounded-ful cursor-pointer"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} // Accessibility improvement
    >
      {/* Light Mode Icon */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={darkMode ? { opacity: 1, rotate: 180 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <MdOutlineLightMode className="text-primary " size={24} />{" "}
        {/* Increased size */}
      </motion.div>

      {/* Dark Mode Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={darkMode ? { opacity: 0 } : { opacity: 1, rotate: -380 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute flex items-center justify-center"
      >
        <FaRegMoon className="text-primary " size={24} /> {/* Increased size */}
      </motion.div>
    </div>
  );
};

export default Toggle;
