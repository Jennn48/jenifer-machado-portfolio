import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import ProjectTechnologies from "../../components/ProjectDetail/ProjectTechnologies.jsx";
import ProjectLinks from "../../components/ProjectDetail/ProjectLinks.jsx";

import projects from "../../data/projects.js";

function ProjectDetail() {
  const {id} = useParams();
  console.log(id);

  const project = projects.find(
    (project) => project.id === Number(id)
  );
  console.log(project)
  return (
    <div className="container">
      <Link to="/projects">
        <span>←</span>Back to Projects
      </Link>
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between align-items-start">
          <h2>{project.title}</h2>

          <p id="project-description">{project.description}</p>

          <h3>Technologies</h3>
          {project.technologies.map((technology, id) => <ProjectTechnologies key={id} technology={technology} />)}
          

          <div className="d-grid gap-2 col-6 d-md-flex flex-nowrap">
            <a className="btn btn-primary text-nowrap" target="_blank" rel="noopener noreferrer" href={project.demo} role="button">
              Live Demo
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
            <a className="btn btn-outline-primary text-nowrap" target="_blank" rel="noopener noreferrer" href={project.github} role="button">
              View Code
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
          <img src={project.image} alt="project-image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
