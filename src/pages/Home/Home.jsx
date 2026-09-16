import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import ProjectCard from "../../components/Projects/HomeProjectCard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import projects from "../../data/projects.js";



function Home() {
  return (
    <div className="row">
      <Sidebar />

      <div className="row col-8">
        {projects.map((project, id) => <ProjectCard key={id} project={project} />)}
      </div>
    </div>
  );
}

export default Home;
