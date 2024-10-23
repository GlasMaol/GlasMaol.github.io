import FrontendPage from "./pages/frontend/FrontendPage"
import ContactPage from "./pages/contact/ContactPage"
import LandingPage from "./pages/landingPage/LandingPage"
import ProjectsPage from "./pages/projects/ProjectsPage"
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about/AboutPage";


function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/frontend" element={<FrontendPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </div>
  )
}

export default App
