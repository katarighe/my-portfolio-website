import { Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./styles/page-transition.css";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </>
  );
}

export default App;
