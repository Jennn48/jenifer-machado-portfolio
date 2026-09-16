import "./style.css";

function ProjectCard() {
  return (
    <div className="col-12 col-lg-4 col-xl-4">
      
        <div className="card mb-3" style={{ maxWidth: 540 }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="https://picsum.photos/200/315"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <a href="/project"><h5 className="card-title">Card title</h5></a>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div className="d-flex gap-2 mb-2">
                  <div className="rounded-pill px-2 py-1">
                    <small>JavaScript</small>
                  </div>
                  <div className="rounded-pill px-2 py-1">
                    <small>React</small>
                  </div>
                  <div className="rounded-pill px-2 py-1">
                    <small>Node.js</small>
                  </div>
                </div>
                <a href="#" class="card-link">View Project →</a>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProjectCard;
