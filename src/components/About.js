import React from 'react';
import avatar1 from '../images/pic-of-me.png';

export default function About() {

  return (
    <section id="about-me" class="about-me"> 
    <br />
    <br />
    <h3></h3> 
    <div class="project-list"> 
    <img alt="Image of me" src={avatar1} class="float-left" id="me-image"/>
    <br />
    <br />
    <p>
    My name is Lisette Morales. I have full-stack web development experience. 
    </p> 
    <br/>
    <p>
             <p class="tab"><b>Full-Stack Web Development Skills:</b></p>
           
             <p class="tabOne">Front end:  HTML; CSS; JavaScript; Git; Bootstrap; The DOM; APIs; JQuery; JSON; AJAX </p>
                <br/>
            <p class="tabTwo">Back end:  Node; ES6; Object-oriented programming; Express; MySQL; MVC paradigm; 
                Sequelize; Testing; Agile development</p>
                <br/>
            <p class="tabThree">Performance:  Progressive Web Apps; React; NoSQL; MERN Stack; Computer Science Fundamentals</p>
    </p>
    </div>
</section>
  );
}