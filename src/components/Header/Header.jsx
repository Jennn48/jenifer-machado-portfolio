import "./style.css";
import logo from "../../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);

  function handelClick(){
    setIsActive((prevValue) => !prevValue);
  }
  return (
    <nav className="navbar navbar-expand-md py-0 m-0">
      <div className="container-fluid p-0">
        <a className="navbar-brand col-md-3 me-0 "
        href="mailto:machadogarciajenifer@gmail.com" id="brand-logo">
            <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handelClick}
        >
          {" "}
          <span
          className={isActive ? "navbar-toggler-burg active" : "navbar-toggler-burg"}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>{" "}
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav col-md-6 justify-content-md-center">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link d-none d-md-block" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item d-block d-md-none">
              <NavLink
                className="nav-link"
                to="mailto:machadogarciajenifer@gmail.com"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="d-md-flex col-md-3 justify-content-md-end header-theme z-3">
          <button className="btn fs-4">
            <i className="bi bi-sun-fill"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
