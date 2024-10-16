import { Route, Routes } from "react-router-dom"
import "./App.css"

import { Home } from "./components/Home"
import  ExperienceTimeline  from "./components/Exeperiance"
import Skill from "./components/Skills"
import { Certificate } from "./components/Certeficates"
import { Recomendations } from "./components/Recomendation"
import { ContactMe } from "./components/Contact"
import { NavBar } from "./components/pages/NavBar"

function App() {
 

  return (
   <>
   <NavBar>
   <Routes>
  
    <Route path="/reactbasedportofilio" element={<Home/>} />
    <Route path="/experiences" element ={<ExperienceTimeline/>}/>
    <Route path="/Certificates" element={<Certificate/>}/>
    <Route path="/skills" element={<Skill/>}/>
    <Route path="/recommendations" element={<Recomendations/>}/>
    <Route path="/contact-me" element={<ContactMe/>}/>


   </Routes>
   </NavBar>
   {/* <div className="grid ">
    <NavBar/>
  <Home />
   </div> */}
   </>
  )
}

export default App
