import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard({ project }) {
  console.log(project);
  const projectLink = `/project/${project.id}`;
  return (
    <div className="col-12 col-lg-4 col-xl-4">
      <div className="card rounded-4 mb-3" style={{ maxWidth: 540, maxHeight: 200 }}>
        <div className="row g-0">
          <div className="col-4">
            <img
              src={project.verticalImage}
              className="img-fluid rounded-start-4"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to={projectLink} className="text-decoration-none">
                <h5 className="card-title fs-6 text-nowrap">{project.title}</h5>
              </Link>
              <p className="card-text fw-light">{project.description}</p>
              <div className="d-flex gap-2 mb-2 d-flex flex-wrap overflow-hidden" style={{maxHeight: 60}}>
                {project.technologies.map((technology, index) => (
                  <div className="rounded-pill px-2 py-1">
                    <small>{technology}</small>
                  </div>
                ))}
              </div>
              <Link to={projectLink} className="card-link text-decoration-none">
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
