import React from "react"
import Home from './component/home/Home';
import Navbar from './component/Navbar/Navbar'
import './App.css'
import About from './component/About/About';
import Skills from './component/skills/Skills';
import Projects from "./component/projects/Projects";
import Resume from "./component/resume/Resume";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";


function App() {
  return (
   <div className='container'>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Resume/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
