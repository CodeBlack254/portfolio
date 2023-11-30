import React from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light" id='home'>
          <div className="container">
              <a className="navbar-brand" href="#"><img className='logo' src={logo} alt='logo...'></img> </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars}  style={{color: "#fff"}} />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <a className="nav-link" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#Aboutme">about me</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#myservices">services</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#portfolio">portfolio</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contactme">contact</a>
                      </li>
                      
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default Navbar
