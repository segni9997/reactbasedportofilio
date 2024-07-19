import { Route, Routes } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/pages/NavBar";
import { Home } from "./components/Home";

import { ContactMe } from "./components/Contact";
import ExperienceTimeline from "./components/Exeperiance";
import { Certificate } from "./components/Certeficates";
import {  Recomendations } from "./components/Recomendation";
import Skill from "./components/Skills";

function App() {
  return (
    <>
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<ExperienceTimeline />} />
          <Route path="/certificates" element={<Certificate />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/recommendations" element={<Recomendations/>} />
          <Route path="/contact-me" element={<ContactMe />} />
        </Routes>
      
    </>
  );
}

export default App;
