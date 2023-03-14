import React from 'react';

export default function About() {

  // const navTitleFour="Resume";

  return (
    <section id="resume" class="about-me">
    <br />
    <br />
    {/* <h3>{navTitleFour}</h3> */}
    <ul class="project-list"> 
        <ul class="card4">
          <b><p>Skills:</p></b>
          {/* <br /> */}
          <p>
             {/* <p class="tab"><b>Full-Stack Web Development Skills:</b></p> */}
           
             <p class="tabOne">HTML; CSS; JavaScript; Git; Bootstrap; The DOM; APIs; JQuery; JSON; AJAX </p>
                {/* <br/> */}
            <p class="tabTwo">Node; ES6; Object-oriented programming; Express; MySQL; MVC paradigm; 
                Sequelize; Testing; Agile development</p>
                {/* <br/> */}
            <p class="tabThree">Progressive Web Apps; React; NoSQL; MERN Stack; Computer Science Fundamentals</p>
    </p>
          {/* <b><li>
            HTML
          </li></b>
          <br />
          <b><li>
            CSS
          </li></b>
          <br />
          <b><li>
            JavaScript
          </li></b>
          <br />
          <br /> */}
            <a href=""><button><b>Resume</b></button></a>
        </ul>
    </ul>
</section>
  );
}