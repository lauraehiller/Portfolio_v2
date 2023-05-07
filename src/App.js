import React from "react";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Hero from "./components/Hero/Hero.js";
import About from "./pages/About/About.js";
import Experience from "./pages/Experience/Experience.js";
import Projects from "./pages/Projects/Projects.js";
import Contact from "./pages/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
// import Loading from "./components/Loading/Loading.js";

const App = () => {
  return (
    <div className="App">
      {/* <Suspense fallback={<Loading />}> */}
      <Header />
      <Hero />
      {/* </Suspense> */}
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
