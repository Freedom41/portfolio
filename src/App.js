import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
       <div className="header">
         <nav>
          <a href="#about"> <li> About </li> </a>
          <a href="#projects"> <li> Projects </li> </a>
          <a href="#contact"> <li> Contact </li> </a>
         </nav>
       </div>
       <div className="welcome-section" id="about">
        <img className="img" src="https://res.cloudinary.com/freedom41/image/upload/v1504431461/mark_pe3k1c.jpg" alt="Profile Pic" /> 
        <p> Full Stack Web Developer. MERN stack </p>
       </div>
       <div className="projects" id="projects">
         <div className="project" >
          <a href="https://codepen.io/Freedom41/full/RwbrJyK"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574624753/pomodoro.png" alt="project img"/>  </a>
           <p> Pomodoro timer built with React, CSS and HTML </p>
         </div>
        <div className="project">
          <a href="https://simple-js-cal.surge.sh/"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574624755/cal.png" alt="project img" />  </a>
          <p> Calculator built with React, CSS and HTML </p>
        </div>
        <div className="project">
          <a href="https://codepen.io/Freedom41/full/vYYjzmR"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574626940/map.png" alt="project img" />  </a>
          <p> Built with D3, CSS and HTML </p>
        </div>  
        <div className="project">
          <a href="https://codepen.io/Freedom41/full/EBxXZB"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574625517/previewer.png" alt="project img" />  </a>
          <p> Markdown Previewer Built with React, CSS and HTML </p>
        </div>
        <div className="project">
          <a href="https://drumfree41.surge.sh/"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574624754/drum.png" alt="project img" />  </a>
          <p> Drum App built with React, CSS and HTML </p>
        </div>
        <div className="project">
          <a href="https://codepen.io/Freedom41/full/wywGNX"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574627320/wiki.png" alt="project img" />  </a>
          <p> Wikipedia Viewer built with React, uses the official wiki API.</p>
        </div>
        <div className="project">
          <a href="https://fast-phalange.glitch.me/"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574628029/exercise.png" alt="project img" />  </a>
          <p> Exercise tracker built with Mongoose, Express, Node JS, CSS and HTML </p>
        </div>
        <div className="project">
          <a href="https://frill-stretch.glitch.me/"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574628221/filemetadata.png" alt="project img" />  </a>
          <p> File MetaData API, built with NodeJS, Express and HTML/CSS </p>
        </div>
        <div className="project">
          <a href="https://successful-fish.glitch.me/"> <img className="projectImg" src="https://res.cloudinary.com/freedom41/image/upload/v1574628432/anonmsg.png" alt="project img" />  </a>
          <p> Anon Chat App built with HTML, CSS , Mongoose, Express, NodeJS. Testing done with CHai and Mocha. CRUD implemented</p>
        </div>
       </div>
       <div className="footer" id="contact">
        <a href="https://github.com/Freedom41"> <i class="fab fa-github"> </i> </a>
        <a href="https://www.linkedin.com/in/mark-mascarenhas-194b9272/"> <i class="fab fa-linkedin-in"></i> </a>
        <a href="https://codepen.io/Freedom41"><i class="fab fa-codepen"></i> </a>
        <a href="https://www.freecodecamp.org/freedom41"> <i class="fab fa-free-code-camp"></i> </a>
       </div>
    </div>
  );
}

export default App;
