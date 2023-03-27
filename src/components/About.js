import React from 'react';
import '../styles/About.css';
// import avatar1 from '../images/pic-of-me.png';
// import avatar2 from '../images/mepic2.png';
// import avatar3 from '../images/mepic3.png';
// import avatar4 from '../images/mepic4.png';
// import avatar5 from '../images/mepic5.png';
// import avatar6 from '../images/mepic6.png';
// import avatar7 from '../images/mepic7.png';
// import avatar8 from '../images/mepic8.png';
import avatar9 from '../images/mepic9.png';
import avatar10 from '../images/mepic10.png';
import avatar11 from '../images/mepic11.png';

export default function About() {

  return (
   <div>
    <div class="container">
    <div class="card mb-3" >
    <div class="row g-0">
    <div class="col-md-2">
    {/* <div classname="image"> */}
    <div classname="image text-center">
      <img src={avatar11} class="img-thumbnail rounded-start border-0" alt="mepic"/>
    </div>
    {/* </div> */}
    </div>
    <div class="col-md-10">
      <div class="card-body">
        <h5 class="card-title">Hi, I am Lisette Morales.</h5>
        <br/>
        <br/>
        <p class="card-text">Based on my Full-Stack Web Development skills, my previous experience on projects includes front-end and back-end development to create web applications. 
        <br/>
        <br/>
        In particular, I worked in small group settings creating front-end websites with my web development skills, such as HTML, CSS, and JavaScript. In using these skills, I structure, style, and incorporate functionality to web pages. I also perform web design and enhance the user interface (UI) to web pages for websites. I use technologies including React, Bootstrap, and APIs creating client-side applications. I also worked on back-end development building full-stack web applications consisting of servers and databases with technologies.
        <br/>
        <br/>
        Additional skills include communicating and collaborating with people, project presentation and storytelling, and teamwork. 
        </p>
      </div>
    </div>
  </div>
</div>

</div>
</div>


  );
}