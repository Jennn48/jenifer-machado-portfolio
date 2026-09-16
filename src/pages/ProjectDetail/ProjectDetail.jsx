import ProjectInfo from "../../components/ProjectDetail/ProjectInfo.jsx";
import ProjectTechnologies from "../../components/ProjectDetail/ProjectTechnologies.jsx";
import ProjectLinks from "../../components/ProjectDetail/ProjectLinks.jsx";

function ProjectDetail() {
  return (
    <div className="container">
      <a href="/projects">
        <span>←</span>Back to Projects
      </a>
      <div className="row">
        <div className="col-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-between align-items-start">
          <h2>ProjectTitle</h2>

          <ProjectInfo />

          <h3>Technologies</h3>
          <ProjectTechnologies />

          <div class="d-grid gap-2 col-6 d-md-flex flex-nowrap">
            <a class="btn btn-primary text-nowrap" href="#" role="button">
              Live Demo
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
            <a class="btn btn-outline-primary text-nowrap" href="#" role="button">
              View Code
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
          <img src="https://picsum.photos/400" alt="project-image" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
