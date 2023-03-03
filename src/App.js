import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import avatar1 from './images/avatar1.png';
import pic2 from './images/pic2.jpg';
// import pic3 from './images/pic3.jpg';
// import pic4 from './images/pic4.jpg';

function App() {

  const name="Lisette Morales";
  const navTitleOne="About Me";
  const navTitleTwo="Portfolio";
  const navTitleThree="Contact";
  const navTitleFour="Resume";
  const [message,setMessage]=useState("");
  console.log(message);

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  return (
    <div> 
       <navbar class="navbar"></navbar>
      <Navbar />
      <h2>{}</h2>
    <header class="header">
        <div style={{width:"100vw", height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",marginBottom:"40px",width:"50vw",justifyContent:"space-evenly"}}>
            <a href="#about-me" onClick={()=>setCurrentPage("About")}>{navTitleOne}</a>
            <a href="#projects"onClick={()=>setCurrentPage("Projects")}>{navTitleTwo}</a>
            <a href="#contact"onClick={()=>setCurrentPage("Contact")}>{navTitleThree}</a>
            <a href="#contact"onClick={()=>setCurrentPage("Resume")}>{navTitleFour}</a>
          </div>
          {renderPage()}
          </div>
    </header>

    {/* <!-- This is the main opening tag --> */}
    <main class="content" id="content-section">
      {/* {renderPage()} */}

        {/* <!--Line break--> */}
        <br />

    
        {/* <!--Line break--> */}
        <br />
      
    </main>
    {/* <!-- This is the main closing tag --> */}

    {/* <!-- This is the footer opening tag --> */}
    <footer class="footer">
    <div style={{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",marginBottom:"40px",width:"50vw",justifyContent:"space-evenly"}}>
        <h6>Made by: Lisette M. &copy; 2023
        <p>
          <ol class="card3">
          <br />
                  <a href="https://github.com/Lisette33"><button><b>GitHub</b></button></a>
                </ol>
           
        </p> 
        </h6>
        </div>
        </div>
    </footer>
    {/* <!-- This is the footer closing tag --> */}
  
    </div>
  );
}

export default App;

