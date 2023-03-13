import React,{useState} from 'react'
import Typewriter from 'typewriter-effect';

function Home() {
  const[tiitle,setTitle]=useState({
    title:"hello1",
    title2:"hello2"
  
  })
  return (
    <div className='main container'>
      <div className='home  '>
        <div className="intro" >
          <h1 className='intro-text'> Hello</h1>
          <h1 className='intro-text'> I'am Ritesh Pandey</h1>
          <h1 className='intro-text'>A Front-End Developer</h1>
      <Typewriter
      options={{
      autoStart:true,
      loop:true,
      delay:40,
      strings:[
        "I'm working with HTML",
        "I'm working with CSS",
        "I'm working with Javascript",
        "I'm working with React",
      ]}}
      />
         
        </div>
        <div className='intro-image'>
          <img className='intro-img' src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=1060&t=st=1666365004~exp=1666365604~hmac=0e7c0e2d298e1b539ffaea5d7ebbe8ca3c8b49511678acc603e38e1d1fa0bb35" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Home
