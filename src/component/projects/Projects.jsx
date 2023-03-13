import React from 'react'
import tictac from '../../assets/image/Tictac.jpeg'
import protfolio from '../../assets/image/protfolio.jpeg'
import keepNote from '../../assets/image/keepNote.jpeg'

function Projects() {
    return (
        <div className='project-main'>
            <div id="project">
                <h1 className='about-heading'>Project</h1>
                <p className='intro'>Some of my work</p>
                <div className="row container-flud skill-item" >
                    <div className="card my-4 mx-3" style={{ width: "16rem" }}>
                    <a href="" target={"-blank"}>
                        <img src={protfolio} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Portfolio</h5>
                        </div>
                    </a>
                    </div>
                    
                    <div className="card my-4" style={{ width: "16rem" }}>
                    <a href="https://ritesh2610.github.io/Google-keep-clone/">
                        <img src={keepNote} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Keep Note</h5>
                        </div>
                    </a>
                    </div>


                    <div className="card my-4" style={{ width: "16rem" }}>
                    <a href="https://ritesh2610.github.io/TicTacToe/">
                        <img src={tictac} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tic Tac Toe</h5>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects