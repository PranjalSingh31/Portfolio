import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#050B18' }}>
      <Nav />
      <Hero />
      <div className="section-sep" />
      <About />
      <div className="section-sep" />
      <Experience />
      <div className="section-sep" />
      <Projects />
      <div className="section-sep" />
      <Skills />
      <div className="section-sep" />
      <Education />
      <div className="section-sep" />
      <Certifications />
      <div className="section-sep" />
      <Publications />
      <div className="section-sep" />
      <Contact />
      <Footer />
    </div>
  );
}
