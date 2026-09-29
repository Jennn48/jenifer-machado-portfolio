function ProjectLinks({demo, github}) {
  return (
    <div className="d-grid gap-2 col-6 d-md-flex flex-nowrap px-2 mt-auto">
              <a
                className="btn btn-primary text-nowrap"
                target="_blank"
                rel="noopener noreferrer"
                href={demo}
                role="button"
              >
                Live Demo
                <i className=" ms-2 bi bi-box-arrow-up-right"></i>
              </a>
              <a
                className="btn btn-outline-primary text-nowrap"
                target="_blank"
                rel="noopener noreferrer"
                href={github}
                role="button"
              >
                View Code
                <i className="ms-2 bi bi-github"></i>
              </a>
            </div>
  );
}

export default ProjectLinks;