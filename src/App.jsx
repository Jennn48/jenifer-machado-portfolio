import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Header />

      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;