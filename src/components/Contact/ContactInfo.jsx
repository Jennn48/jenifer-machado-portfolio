import "./style.css";

function ContactInfo() {
  return (
    <div className="col-12 col-lg-4 col-xl-4 d-flex flex-column">
      <div className="row">
        <p className="fs-5 col-8">
          Do you have something in mind. Let's build something great together.
        </p>
      </div>

      <div className="row my-4 info">
        <a href="mailto:machadogarciajenifer@gmail.com" className="text-decoration-none d-flex gap-2 align-items-baseline py-1">
          <i className="bi bi-envelope-fill"></i>
          <p>machadogarciajenifer@gmail.com</p>
        </a>
        <div className="d-flex gap-2 align-items-baseline py-1">
          <i className="bi bi-geo-alt-fill"></i>
          <p>Vigo, Spain</p>
        </div>
        <a
          href="https://github.com/Jennn48/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex gap-2 align-items-baseline py-1 text-decoration-none"
        >
          <i className="bi bi-github"></i>
          <p>https://github.com/Jennn48/</p>
        </a>
        <a
          href="https://www.linkedin.com/in/jenifer-machado-2a1128384/"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex gap-2 align-items-baseline py-1 text-decoration-none"
        >
          <i className="bi bi-linkedin"></i>
          <p>https://www.linkedin.com/in/jenifer-machado-2a1128384/</p>
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;
