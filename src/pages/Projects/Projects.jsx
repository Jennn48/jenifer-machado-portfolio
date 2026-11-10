import ProjectCard from "../../components/Projects/ProjectCard.jsx";
import projects from "../../data/projects.js";

function Projects() {
  return (
    <div className="row align-items-start">
      <h2 className="page-title pb-4">Projects</h2>
      {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
    </div>
  );
}

export default Projects;