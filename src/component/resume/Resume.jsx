import React from 'react'
import Typewriter from 'typewriter-effect';


function Resume() {
    return (
        <div className='resume-main'>
            <div id="resume">
                
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            strings: [
                                " CHECKOUT OUT MY RESUME",
                                "CLICK HERE FOR THE DOWNLOAD RESUME",
                                
                            ]
                        }}
                    />
                
                <a href="https://drive.google.com/file/d/1gibub2sspMA5zBNZiBfxxlR8_lI44VNP/view?usp=sharing" target={'_blank'} className="btn mt-3 mb-3">Download</a>
            </div>
        </div>
    )
}

export default Resume