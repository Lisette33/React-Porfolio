import React from 'react';
import '../styles/Navbar.css';

function Navbar({setCurrentPage}) {

  return (
    <div>
    <div class="container-fluid">
    <navbar className="navbar">
      <b><h2>Lisette Morales</h2></b>
      {/* <div style={{width:"100vw", height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> </div> */}
      <nav class="navbar-one">
      <ul>
          <ol>
              <a onClick={()=>setCurrentPage("Home")} href="#homepage"><b>Home</b></a>
          </ol>
          <ol>
              <a onClick={()=>setCurrentPage("About")} href="#about-me"><b>About</b></a>
          </ol>
          <ol>
              <a onClick={()=>setCurrentPage("Portfolio")} href="#portfolio"><b>Portfolio</b></a>
          </ol>
          <ol>
              <a onClick={()=>setCurrentPage("Contact")} href="#contact-me"><b>Contact</b></a>
          </ol>
      </ul>
    </nav>
    </navbar>
    </div>
    </div>
 
  
  );
}

export default Navbar;