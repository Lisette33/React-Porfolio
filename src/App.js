import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Home from './components/Homepage';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
// import avatar11 from '../images/mepic11.png';

function App() {

  const name="Lisette Morales";
  const navTitle="Home";
  const navTitleOne="About Me";
  const navTitleTwo="Portfolio";
  const navTitleThree="Contact";
  // const navTitleFour="Resume";
  const [message,setMessage]=useState("");
  console.log(message);

  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Projects />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    return <About />;
  };

  return (
    <div className={currentPage==='Home' ? 'background':''}> 

       <navbar class="navbar"></navbar>
      <Navbar setCurrentPage={setCurrentPage}> </Navbar> 
      <h2>{}</h2>
    <header class="header">
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{display:"flex",marginBottom:"100px",width:"50vw",justifyContent:"space-evenly"}}> 
            {/* <a href="#about-me" onClick={()=>setCurrentPage("About")}>{navTitleOne}</a>
            <a href="#projects"onClick={()=>setCurrentPage("Projects")}>{navTitleTwo}</a>
            <a href="#contact"onClick={()=>setCurrentPage("Contact")}>{navTitleThree}</a> */} 
            {/* <a href="#contact"onClick={()=>setCurrentPage("Resume")}>{navTitleFour}</a> */}
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
    <div style={{width:"100vw", height:"100%", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", Bottom: "10%"}}>
        {/* <div style={{display:"flex",marginBottom:"100px",width:"50vw",justifyContent:"space-evenly"}}> */}
        <h6>
        <p>
          <ol class="cardthree">
          <br />
          <br />
                    Website developed by: Lisette Morales &copy; 2023 
                    {/* <a href="https://github.com/Lisette33"><b>GitHub</b></a> */}
                </ol>
           
        </p> 
        </h6>
        </div> 
        {/* </div> */}
    </footer>
    {/* <!-- This is the footer closing tag --> */}
  
    </div>
  );
}

export default App;

