import React, {useState, useEffect} from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { darkModeTitle } from "./data";


export const DarkModeToggleButton = ({lang}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {

    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      
      if (newMode) {
        localStorage.setItem("darkMode", "true");
      } else {
        localStorage.setItem("darkMode", "false");
      }

      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return ( 
    <>
      <button
      className="inline-block"
      type="button"
      title={isDarkMode ?  darkModeTitle.title[lang].light :  darkModeTitle.title[lang].dark}
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <FaSun className="inline-block text-xl sm:mb-1"/> : <FaMoon className="inline-block sm:align-top sm:mt-0.5"/>}
    </button>
    </>
  )
}