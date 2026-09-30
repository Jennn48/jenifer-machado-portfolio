import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import "./App.css";
function App() {
  return (
    <>
      <div className="main-container overflow-hidden">
        <div className="content position-relative z-1">
          <Header />

          <main className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
        <div className="water z-0">
          <div className="edge wave-1">
            <div className="wave wave-1"></div>
          </div>
          <div className="edge wave-2">
            <div className="wave wave-2"></div>
          </div>
          <div className="edge wave-3">
            <div className="wave wave-3"></div>
          </div>
          <div className="edge wave-4">
            <div className="wave wave-4"></div>
          </div>
          <div className="transparency"></div>
        </div>
      </div>
    </>
  );
}

export default App;
