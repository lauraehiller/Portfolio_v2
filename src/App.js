import React, { useState, useEffect } from "react";
import "./App.scss";
import logo from "./images/Website_Logo.png";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import About from "./pages/About/About.js";
import Experience from "./pages/Experience/Experience.js";
import Projects from "./pages/Projects/Projects.js";
import Contact from "./pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  if (isLoading)
    return (
      <div className="preload" id="preload">
        <img src={logo} alt="logo" className="logo" />
      </div>
    );

  return (
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
