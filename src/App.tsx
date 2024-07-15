import { Route, Routes } from "react-router-dom"
import "./App.css"

import { Certeficate } from "./components/Certeficates"
import { PrevProjects } from "./components/PrevProjects"
import { NavBar } from "./components/pages/NavBar"
import { Home } from "./components/Home"

function App() {
 

  return (
   <>
   <div className="grid ">
    <NavBar/>
  <Home />
   </div>
   </>
  )
}

export default App
