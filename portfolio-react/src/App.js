import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

// import pic1 from './images/nameofimage.jpg';

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
      <h1>{name}</h1>

    <header class="header">
      <nav>
            <ul>
                <li>
                    <a href="#about-me" onClick={()=>setCurrentPage("About")}>{navTitleOne}</a>
                </li>
                <li>
                    <a href="#projects"onClick={()=>setCurrentPage("Projects")}>{navTitleTwo}</a>
                </li>
                <li>
                    <a href="#contact"onClick={()=>setCurrentPage("Contact")}>{navTitleThree}</a>
                </li>
                <li>
                    <a href="#contact"onClick={()=>setCurrentPage("Resume")}>{navTitleFour}</a>
                </li>
            </ul>
        </nav>
    </header>

    {/* <!-- This is the main opening tag --> */}
    <main class="content" id="content-section">
      {renderPage()}

        {/* <!--Line break--> */}
        <br />

    
        {/* <!--Line break--> */}
        <br />
      
    </main>
    {/* <!-- This is the main closing tag --> */}

    {/* <!-- This is the footer opening tag --> */}
    <footer class="footer">
        <h5>Made by: Lisette M. 
        <p>
          <ol class="card3">
                  <a href="https://github.com/Lisette33"><button><b>GitHub</b></button></a>
                </ol>
            &copy; 2023
        </p> 
        </h5>
    </footer>
    {/* <!-- This is the footer closing tag --> */}
  
    </div>
  );
}

export default App;

