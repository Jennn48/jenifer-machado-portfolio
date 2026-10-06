import projects from "../../data/projects.js";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
function Profile() {
  const [positions, setPositions] = useState({});
  const start = useRef({ x: 0, y: 0 });
  const draggingId = useRef(null);

  const handlePointerDown = (e, id) => {
    draggingId.current = id;

    const position = positions[id] || { x: 0, y: 0 };

    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e, id) => {
    if (
      !e.currentTarget.hasPointerCapture(e.pointerId) ||
      draggingId.current !== id
    )
      return;

    const x = e.clientX - start.current.x;
    const y = e.clientY - start.current.y;

    setPositions((prev) => ({
      ...prev,
      [id]: {
        x: Math.max(-10, Math.min(10, x)),
        y: Math.max(-10, Math.min(10, y)),
      },
    }));
  };

  const handlePointerUp = (e, id) => {
    e.currentTarget.releasePointerCapture(e.pointerId);

    setPositions((prev) => ({
      ...prev,
      [id]: { x: 0, y: 0 },
    }));
    draggingId.current = null;
  };

  return (
    <div className="profile ">
      <h1 className="order-1 profile-name fw-bold text-center text-md-start mt-5 mt-md-0 mb-4 mb-md-0">
        <a
          href="mailto:machadogarciajenifer@gmail.com"
          className="text-decoration-none"
        >
          Jenifer Machado
        </a>
      </h1>
      <div className="row project-card-mobile d-block d-md-none col-12 position-relative order-2">
        {projects.slice(0, 3).map((project) => {
          const projectLink = `project/${project.id}`;
          const position = positions[project.id] || { x: 0, y: 0 };

          return (
            <div className="project-image position-absolute" key={project.id}>
              <Link to={projectLink} className="text-decoration-none">
                <img
                  src={project.image}
                  alt="project-image"
                  className="rounded-4"
                  onPointerDown={(e) => handlePointerDown(e, project.id)}
                  onPointerMove={(e) => handlePointerMove(e, project.id)}
                  onPointerUp={(e) => handlePointerUp(e, project.id)}
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    transition:
                      position.x === 0 && position.y === 0
                        ? "transform 0.5s ease"
                        : "none",
                    cursor: "grab",
                    touchAction: "none",
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <h3 id="field" className="text-uppercase order-3  mx-auto my-4 my-md-1 text-center text-md-start fw-bold">
        Web Developer
      </h3>
      <p className="text-justify d-none d-md-block order-4" id="description">
        I’m a junior developer based in Vigo, Spain, with a Bachelor's Degree in
        Telecomunications Engineering. I like building practical web
        applications and improving my skills through study and practice.
        Currently, I’m focused on React, JavaScript, Node.js, and
        PostgreSQL.{" "}
      </p>
    </div>
  );
}

export default Profile;
