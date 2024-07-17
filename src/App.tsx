import { Route, Routes } from "react-router-dom"
import "./App.css"

import { Certeficate } from "./components/Certeficates"
import { PrevProjects } from "./components/PrevProjects"
import { NavBar } from "./components/pages/NavBar"
import { Home } from "./components/Home"
import  ExperienceTimeline  from "./components/Exeperiance"

function App() {
 

  return (
   <>
   <NavBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/experiances" element ={<ExperienceTimeline/>}/>
    <Route path="/certeficates" element={<Certeficate/>}/>

   </Routes>
   {/* <div className="grid ">
    <NavBar/>
  <Home />
   </div> */}
   </>
  )
}

export default App
