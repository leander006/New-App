import React, { Component } from 'react'
// import {a} from "react-router-dom"



const Navbar = () =>{
        return (
          
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/general" >NewsMania</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     
    
        <li className="nav-item">
          <a className="nav-a" href="Business">Business</a>
          </li>

        <li className="nav-item">
          <a className="nav-a" href="Entertainment">Entertainment</a>
          </li>


        <li className="nav-item">
          <a className="nav-a" href="Health">Health</a>
          </li>
        <li className="nav-item">
          <a className="nav-a" href="Science">Science</a>
          </li>

        <li className="nav-item">
          <a className="nav-a" href="Sports">Sports</a>
          </li>

        <li className="nav-item">
          <a className="nav-a" href="Technology">Technology</a>
          </li> 

      </ul>
    
    </div>
  
  </div>
</nav>
    </div>
        
        )
  
}

export default Navbar
