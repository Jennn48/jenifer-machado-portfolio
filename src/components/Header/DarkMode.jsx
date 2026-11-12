import { useState, useEffect } from "react";

function DarkMode() {
  const [iconName, setIconName] = useState("bi-moon");

  useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme");
        const theme = savedTheme || "light";

        document.body.setAttribute("data-theme", theme);

        setIconName(theme === "dark" ? "bi-sun-fill" : "bi-moon");
    }, []);

  const setDarkMode = function () {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIconName("bi-sun-fill");
    localStorage.setItem("selectedTheme", "dark");
  };
  const setLightMode = function () {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIconName("bi-moon");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleTheme = function (e) {
    if (document.querySelector("body").getAttribute("data-theme") === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="d-md-flex col-md-3 justify-content-md-end header-theme z-3">
      <button
        className="btn fs-4"
        aria-label="header-theme-button"
        onClick={toggleTheme}
      >
        <i className={`bi ${iconName}`}></i>
      </button>
    </div>
  );
}

export default DarkMode;
