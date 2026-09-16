import "./style.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg py-0 mt-2">
      <div className="container-fluid">
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarSupportedContent">
          <a className="navbar-brand col-lg-3 me-0" href="#" id="brand-logo">
            <img src={logo} alt="logo" className="logo"/>
          </a>

          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>
          </ul>

          <div className="d-lg-flex col-lg-3 justify-content-lg-end">
            <button className="btn fs-4">
              <i className="bi bi-sun-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
