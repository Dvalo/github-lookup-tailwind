import React, { useState } from "react";
import { Link } from "react-router-dom";

// Theme
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../Theme/GlobalStyles";
import { lightTheme, darkTheme } from "../../Theme/Theme";

import "./header.css";

function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === null
      ? "dark"
      : localStorage.getItem("theme")
  );

  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <header className="h-36 sm:h-32 bg-gray-light pt-3 sm:pt-4">
        <div className="container">
          <div className="flex sm:items-center justify-between flex-col sm:flex-row">
            <Link
              to="/"
              className="text-white text-3xl sm:text-5xl font-bold font-heading"
            >
              GitHub Lookup
            </Link>
            <div className="flex items-center mt-6 sm:mt-0">
              <i className="fas fa-sun opacity-70"></i>
              <div
                className={"relative inline-block h-7 w-16 mx-2.5 " + theme}
                onClick={handleToggle}
              >
                <div
                  className={
                    "theme-slider cursor-pointer absolute bottom-0 left-0 right-0 top-0 bg-white transition-all duration-300 rounded-full dark_sl " +
                    theme
                  }
                ></div>
              </div>
              <i className="fas fa-moon opacity-70"></i>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Header;
