import { Route, Routes } from "react-router-dom"
import "./App.css"

import { PrevProjects } from "./components/PrevProjects"
import { NavBar } from "./components/pages/NavBar"
import { Home } from "./components/Home"
import  ExperienceTimeline  from "./components/Exeperiance"
import Skill from "./components/Skills"
import { Certificate } from "./components/Certeficates"
import { Recomendations } from "./components/Recomendation"

function App() {
 

  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/experiances" element ={<ExperienceTimeline/>}/>
    <Route path="/certeficates" element={<Certificate/>}/>
    <Route path="/skills" element={<Skill/>}/>
    <Route path="/recomendations" element={<Recomendations/>}/>


   </Routes>
   {/* <div className="grid ">
    <NavBar/>
  <Home />
   </div> */}
   </>
  )
}

export default App
