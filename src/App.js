import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header.js";
import Home from "./pages/Home/Home.js";
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
      <Home />
      <Footer />
    </div>
  );
};

export default App;
