import { useState, useEffect } from "react";

import "./style.css";
const DMSwitcher = () => {
  const [userTheme, setUserTheme] = useState(localStorage.getItem("theme"));
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIcon = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  const themeSwitch = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    toggleIcon();
  };

  useEffect(() => {
    themeCheck();
  }, [setSystemTheme, setUserTheme]);

  return (
    <>
      <div className="darkmode ">
        <button className="" onClick={themeSwitch}>
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M232.13 143.64a6 6 0 0 0-6-1.49a90.07 90.07 0 0 1-112.27-112.3a6 6 0 0 0-7.49-7.48a102.88 102.88 0 0 0-51.89 36.31a102 102 0 0 0 142.84 142.84a102.88 102.88 0 0 0 36.31-51.89a6 6 0 0 0-1.5-5.99Zm-42 48.29a90 90 0 0 1-126-126a90.9 90.9 0 0 1 35.52-28.27a102.06 102.06 0 0 0 118.69 118.69a90.9 90.9 0 0 1-28.24 35.58Z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};
export default DMSwitcher;
