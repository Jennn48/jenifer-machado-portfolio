function ProjectLinks({demo, github}) {
  return (
    <div className="gap-2 col-lg-6 col-xl-6 d-flex flex-nowrap px-2 mt-auto">
              <a
                className="btn btn-primary text-nowrap col-6"
                target="_blank"
                rel="noopener noreferrer"
                href={demo}
                role="button"
              >
                Live Demo
                <i className=" ms-2 bi bi-box-arrow-up-right"></i>
              </a>
              <a
                className="btn btn-secondary text-nowrap col-6"
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