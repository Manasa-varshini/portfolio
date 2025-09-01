import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <About />
      <Projects />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
