import Header from "../../components/Header/Header.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import HomeProjectCard from "../../components/Projects/HomeProjectCard.jsx";
import ProjectCard from "../../components/Projects/ProjectCard.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import projects from "../../data/projects.js";



function Home() {
  return (
    <div className="row">
      <Sidebar />

      <div className="row d-none d-lg-flex col-lg-8 ">
        {projects.slice(0, 3).map((project, id) => <HomeProjectCard key={id} project={project} />)}
      </div>

      <div className="row d-none d-md-block d-lg-none col-md-7">
        {projects.slice(0, 3).map((project, id) => <ProjectCard key={`project${id}`} project={project} homeCard={true} />)}
      </div>
    </div>
    
  );
}

export default Home;
