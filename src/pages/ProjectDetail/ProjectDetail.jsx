import { useParams } from "react-router-dom";
import ProjectCard from "../../components/ProjectDetail/ProjectDetailCard.jsx";
import projects from "../../data/projects.js";

function ProjectDetail() {
  const {id} = useParams();
  console.log(id);

  const project = projects.find(
    (project) => project.id === Number(id)
  );
  return (
    <ProjectCard project={project} />
  );
}

export default ProjectDetail;
