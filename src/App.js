import React from "react";
import Home from "./Router/Home";
import About from "./Router/About";
import Project from "./Router/Project";
import Contact from "./Router/Contact";
import Navbar from "./Components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = () => {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
      <Route path ="/" element ={<Home/>}/>
      <Route path ="/About" element ={<About/>}/> 
      <Route path ="/Project" element ={<Project/>}/>
      <Route path ="/Contact" element ={<Contact/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  );
};

export default App;