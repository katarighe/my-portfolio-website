import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
