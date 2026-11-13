import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard({ project, homeCard}) {
  const projectLink = `/project/${project.id}`;
  return (
    <div className={homeCard ? "col-md-12 h-100" : "col-12 col-md-6 col-lg-4"}>
      <div className="card project-card rounded-4 mb-3">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={project.verticalImage}
              className="img-fluid rounded-start-4 py-3"
              alt={`${project.title} project preview`}
            />
          </div>
          <div className="col-8">
            <div className="card-body p-2">
              <Link to={projectLink} className="text-decoration-none">
                <h5 className="card-title scale-title fs-md-6 text-nowrap mb-2">{project.title}</h5>
              </Link>
              <p className="card-text fw-light mb-2">{project.description}</p>
              <div className="d-flex gap-1 mb-3 flex-wrap overflow-hidden" style={{maxHeight: "60px"}}>
                {project.technologies.map((technology, index) => (
                  <div className="rounded-pill px-2 py-1" key={index}>
                    <small>{technology}</small>
                  </div>
                ))}
              </div>
              <Link to={projectLink} className="card-link text-decoration-none mt-auto">
                View Project <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
