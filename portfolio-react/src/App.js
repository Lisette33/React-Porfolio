import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import pic1 from './images/nameofimage.jpg';

function App() {

  const name="Lisette Morales";
  const navTitleOne="About Me";
  const navTitleTwo="Portfolio";
  const navTitleThree="Contact";
  const navTitleFour="Resume";
  const [message,setMessage]=useState("");
  console.log(message);

  return (
    <div> 
      <h1>{name}</h1>

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

    {/* <!-- This is the main opening tag --> */}
    <main class="content" id="content-section">
        <section id="about-me" class="about-me"> 
            <h3>About Me</h3> 
            <div class="project-list"> 
            <img alt="Image of me" src="./assets/images/pic-of-me.png" class="float-left" id="me-image"/>
            <p>
            My name is Lisette Morales. Currently, I am learning skills in HTML, CSS, and JavaScript for full-stack web development. My professional interest is web development. In particular, I have interest in both front-end development and back-end development. 
            </p> 
            </div>
        </section>

        {/* <!--Line break--> */}
        <br />

        <section id="projects" class="about-me">
            <h3>Projects</h3>
            <ul class="project-list">
                <div class="flex-box">
                <ol class="card"> 
                    <a href="https://lisette33.github.io/Module-1-Challenge-Assignment/"><button><b>Horiseon Project</b></button></a>
                    {/* <img src={pic1}></img> */}
                </ol>
                </div>
                <div class="flex-box2">
                <ol class="card"> 
                    <a href="https://iamlucho.github.io/movie-finder-project/"><button><b>Movie Finder Project</b></button></a>
                </ol>
                </div>
                <div class="flex-box3">
                <ol class="card"> 
                    <a href="https://damp-river-14558.herokuapp.com/"><button><b>Secret Sauce Project</b></button></a>
                </ol>
                </div>
                <div class="flex-box4">
                <ol class="card"> 
                    <button><b>Project 4</b></button>
                    <a href="#project-4"> </a>
                </ol> 
                </div>
                <div class="flex-box5">
                <ol class="card"> 
                    <button><b>Project 5</b></button>
                    <a href="#project-5"></a>
                </ol>
                </div>
            </ul>
        </section>
    
        {/* <!--Line break--> */}
        <br />

        <section id="contact-me" class="about-me">
            <h3>{navTitleThree}</h3>
            <ul class="project-list">
            <div class="contact-me1">
                <ol class="card1">
                    <b>Name:</b><a href=""></a>
                    <div class="row">
                      <div class="col">
                         <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
                      </div>
                    </div>
                    
                </ol>
                <ol class="card2">
                    <b>Email:</b> <a href="mailto:lisettem367@gmail.com">Lisettem367@gmail.com</a>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                </ol>
                <ol class="card3">
                    <b>Message:</b>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </ol>
            </div>
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

