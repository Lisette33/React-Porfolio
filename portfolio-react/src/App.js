import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const name="Lisette Morales";
  const navTitleOne="About Me";
  const navTitleTwo="Portfolio";
  const navTitleThree="Contact";
  const navTitleFour="Resume";

  return (
    <div> 
      <h1>{name}</h1>

    <body>
    <header class="header">
      <nav>
            <ul>
                <li>
                    <a href="#about-me">{navTitleOne}</a>
                </li>
                <li>
                    <a href="#projects">{navTitleTwo}</a>
                </li>
                <li>
                    <a href="#contact">{navTitleThree}</a>
                </li>
                <li>
                    <a href="#contact">{navTitleFour}</a>
                </li>
            </ul>
        </nav>
    </header>

    <main class="content" id="content-section">
        <section id="about-me" class="about-me"> 
            <h3>{navTitleOne}</h3> 
          
            <img alt="Image of me" src="./assets/images/pic-of-me.png" class="float-left" id="me-image"/>
            <p>
            My name is Lisette Morales. Currently, I am learning skills in HTML, CSS, and JavaScript for full-stack web development. My professional interest is web development. In particular, I have interest in both front-end development and back-end development. 
            </p> 
           
        </section>

        <br />

        <section id="projects" class="about-me">
            <h3>{navTitleTwo}</h3>
            <ul class="project-list">
               <div></div>
                <ol class="card"> 
                    <a href="https://lisette33.github.io/Module-1-Challenge-Assignment/"><button><b>Horiseon Project</b></button></a>
                </ol>
             
        
                <ol class="card"> 
                    <a href="https://iamlucho.github.io/movie-finder-project/"><button><b>Movie Finder Project</b></button></a>
                </ol>
               
       
                <ol class="card"> 
                    <a href="https://damp-river-14558.herokuapp.com/"><button><b>Secret Sauce Project</b></button>
                   </a>
                </ol>
         
                <ol class="card"> 
         
                    <button><b>Project 4</b></button>
                    <a href="#project-4"> </a>
                </ol> 
      
                <ol class="card"> 
         
                    <button><b>Project 5</b></button>
                    <a href="#project-5"> </a>
                </ol>
            </ul>
        </section>
    
        <br />

        <section id="contact-me" class="about-me">
            <h3>{navTitleThree}</h3>
            <ul class="project-list">
       
                <ul class="card1">
                    <b>Name:</b><a href="#305-965-6092"></a>
                </ul>
                <ol class="card2">
                    <b>Email:</b> <a href="mailto:lisettem367@gmail.com">Lisettem367@gmail.com</a>
                </ol>
                <ol class="card2">
                    <b>Message:</b>
                </ol>
            </ul>
        </section>

           <section id="resume" class="about-me">
            <h3>{navTitleFour}</h3>
            <ul class="project-list"> 
            
                <ol class="card4">
                    <a href="#">Resume</a>
                </ol>
  
            </ul>
        </section>
    </main>

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
    </body>
    </div>
  );
}

export default App;

