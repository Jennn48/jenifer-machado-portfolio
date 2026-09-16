import { Link } from "react-router-dom";
import "./style.css";

function HomeProjectCard({project}) {
  const projectLink = `project/${project.id}`;
  return (
    <div className="col-12 col-lg-3 col-xl-3 mx-auto gap-2">
      <div className="card" style={{ width: "15rem" }}>
        <img src={project.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <Link
            to={projectLink}
            className="text-decoration-none"
          >
            <h5 className="card-title">{project.title}</h5>
          </Link>
          <p className="card-text">
           {project.description}
          </p>
          <div className="d-flex gap-2 flex-wrap mb-3">
            {project.technologies.map((technology, id) => <div key={id} id="id" className="rounded-pill px-2 py-1">
              <small>{technology}</small>
            </div>)}
          </div>
          <Link to={projectLink} className="card-link">
            View Project →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProjectCard;
