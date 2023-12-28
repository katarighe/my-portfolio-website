import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-projects" element={<p>My Projects</p>} />
          <Route path="/about-me" element={<p>About Me</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </main>
    </>
  )
}

export default App;
