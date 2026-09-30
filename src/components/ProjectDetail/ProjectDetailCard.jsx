import { Link } from "react-router-dom";

import ProjectTechnologies from "../../components/ProjectDetail/ProjectTechnologies.jsx";
import ProjectLinks from "../../components/ProjectDetail/ProjectLinks.jsx";

import "./style.css";

function ProjectDetailCard({ project }) {
  return (
    <div className="container-fluid">
      <Link to="/projects" className="text-decoration-none">
        <span>←</span>Back to Projects
      </Link>
      <div className="card my-4 border-0 bg-transparent">
        <div className="row g-0">
          <div className="col-12 col-lg-8 col-xl-8 d-flex order-2 order-lg-1">
            <div className="card-body d-flex flex-column h-100 p-0">
              <h2 className="card-title page-title pb-4 px-2">
                {project.title}
              </h2>

              <p className="card-text px-2 mt-3 col-12 col-lg-8 col-xl-8" id="project-description">
                <small className="text-body-secondary fs-6">
                  {project.description}
                </small>
              </p>

              <h5 className="card-title fw-bold px-2 mt-3">Technologies</h5>
              <div className="d-flex gap-2 flex-wrap mb-3 px-2 col-12 col-lg-8 col-xl-8">
                {project.technologies.map((technology, id) => (
                  <ProjectTechnologies key={id} technology={technology} />
                ))}
              </div>

              <ProjectLinks demo={project.demo} github={project.github} />
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 order-1 order-lg-2 pb-3">
            <img
              src={project.image}
              className="img-fluid rounded-4"
              alt="project-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailCard;
