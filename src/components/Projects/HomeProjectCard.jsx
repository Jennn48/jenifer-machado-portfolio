import { Link } from "react-router-dom";
import "./style.css";

function HomeProjectCard({project}) {
  const projectLink = `project/${project.id}`;
  return (
    <div className="col-lg-3 mx-auto gap-2">
      <div className="card rounded-4" style={{ width: "15rem" }}>
        <img src={project.image} className="card-img-top rounded-top-4" alt="..." />
        <div className="card-body">
          <Link
            to={projectLink}
            className="text-decoration-none"
          >
            <h5 className="card-title scale-title fs-6">{project.title}</h5>
          </Link>
          <p className="card-text fw-light">
           {project.description}
          </p>
          <div className="d-flex gap-2 flex-wrap mb-3">
            {project.technologies.map((technology, id) => <div key={id} id={id} className="rounded-pill px-2 py-1">
              <small>{technology}</small>
            </div>)}
          </div>
          <Link to={projectLink} className="card-link text-decoration-none">
            View Project <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProjectCard;
