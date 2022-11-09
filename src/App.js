import './App.scss';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
