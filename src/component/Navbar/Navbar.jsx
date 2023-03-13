import React from 'react'

export default function navbar() {
  return (
    <>
      <nav className="navbar navbar-dark topHead navbar-expand-lg bg-dark">
  <div className="container-fluid">
<span className="name navbar-brand">Ritesh Pandey</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#skill">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#project">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
