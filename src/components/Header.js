import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1> Mobile Applications | Web Applications | RESTFUL API's</h1>
        <Typed
            className = "type-text"
            strings = {["Web Design", "Web Development", "Mobile Application Development", "REST API Development"]}
            typeSpeed={40}
            backSpeed={60}
            loop
        />
        <a href="#contactme" target="_blank" rel="noopener noreferrer" className="btn-main-offer">contact me </a>
      </div>
    </div>
  )
}

export default Header
