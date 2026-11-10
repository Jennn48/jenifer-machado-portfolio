import "./style.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="container-fluid">
      <footer className="row d-flex flex-wrap justify-content-end align-items-center py-0 my-0">
        <div className=" col-md-8 d-flex align-items-center justify-content-center">
          <span className="mb-3 mb-md-0 d-flex justify-content-center align-items-center gap-2">
            © {year} Jenifer Machado
            <svg viewBox="0 0 500 50" className="handwritten-line">
              <defs>
                <linearGradient
                  id="penGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                  <stop offset="45%" stopOpacity="0.9" />
                  <stop offset="75%" stopOpacity="0.55" />
                  <stop offset="100%" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="
      M 8 30

      C 35 12, 95 10, 155 18
      C 220 27, 285 35, 350 34
      C 410 34, 455 30, 495 25

      C 458 34, 410 40, 350 40
      C 285 40, 220 34, 155 26
      C 95 18, 35 48, 8 38

      C 3 36, 3 32, 8 30

      Z
    "
                fill="url(#penGradient)"
              />
            </svg>
          </span>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
