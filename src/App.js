import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import About from "./pages/About/About.js";
import Experience from "./pages/Experience/Experience.js";
import Projects from "./pages/Projects/Projects.js";
import Contact from "./pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Loading from "./components/Loading/Loading.js";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
