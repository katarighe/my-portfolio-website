import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import MyProjects from "./pages/MyProjects";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<MyProjects />} />
          <Route path="/about-me" element={<p>About Me</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
