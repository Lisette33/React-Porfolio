import React from 'react';
import '../styles/Navbar.css';

function Navbar() {

  return (
    <div>
    <div class="container-fluid-xxl">
    <navbar className="navbar">
      <b><h1>Portfolio</h1></b>
      {/* <div style={{width:"100vw", height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> </div> */}
      <nav class="navbar-one">
      <ul>
          <ol>
              <a href="#about-me"><b>About</b></a>
          </ol>
          <ol>
              <a href="#projects"><b>Projects</b></a>
          </ol>
          <ol>
              <a href="#contact-me"><b>Contact</b></a>
          </ol>
      </ul>
    </nav>
    </navbar>
    </div>
    </div>
 
  
  );
}

export default Navbar;