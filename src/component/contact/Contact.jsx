import React from 'react'
import Typewriter from 'typewriter-effect';


function Contact() {
  return (
    <div className='project-main'>
    <div id="contact">
    <img className='my-3 about-img' src="https://www.mahindrafasteners.com/wp-content/uploads/2016/04/get-in-touch.png" alt="" />
              
      {/* <h4>Get in tuch</h4> */}
    
        <Typewriter
      options={{
      autoStart:true,
      loop:true,
      delay:40,
      strings:[
        "Whether you have an idea for a project or just want to chat,",
        "Feel free to shoot me an email!",
      
      ]}}
      />
        <a href="mailto:riteshpandey7356@gmail.com" target={'_blank'} className="btn mt-3">Contact Me</a>
            
        </div>
        </div>
  )
}

export default Contact