// import React from 'react';
// // import Typed from "react-typed";

// const Header = () => {
//   return (
//     <div className="header-wraper">
//       <div className="main-info">
//         <h1> Mobile Applications | Web Applications | RESTFUL API's</h1>
//         {/* <Typed
//             className = "type-text"
//             strings = {["Web Design", "Web Development", "Mobile Application Development", "REST API Development"]}
//             typeSpeed={40}
//             backSpeed={60}
//             loop
//         /> */}
//         <a href="#contactme" className="btn-main-offer">contact me </a>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react';

const Header = () => {
  const words = ["Web Design", "Web Development", "Mobile Application Development", "REST API Development"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [delay, setDelay] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          setDelay(100); // Faster deletion speed
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
          setDelay(500); // Pause before typing the next word
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setDelay(150); // Typing speed
        } else {
          setIsDeleting(true);
          setDelay(1000); // Pause before deleting the word
        }
      }
    };

    const timer = setTimeout(handleTyping, delay);
    return () => clearTimeout(timer);
  }, [charIndex, currentWordIndex, delay, isDeleting, words]);

  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1> Mobile Applications | Web Applications | RESTFUL API's</h1>
        <h2>{displayText}<span className="blinking-cursor">|</span></h2>
        <a href="#contactme" className="btn-main-offer">contact me </a>
      </div>
    </div>
  );
};

export default Header;


