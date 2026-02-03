import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Footer from "./components/footer/Footer.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/Education/Education.jsx";
import Experience from "./components/Experiences/experience.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education/>
      <Experience/>
      <Services />
      <Footer />
    </div>
  );
};

export default App;
