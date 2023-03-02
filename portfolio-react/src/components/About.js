import React from 'react';
import avatar1 from '../images/avatar1.png';

export default function About() {

  return (
    <section id="about-me" class="about-me"> 
    <br />
    <br />
    <h3></h3> 
    <div class="project-list"> 
    <img alt="Image of me" src={avatar1} class="float-left" id="me-image"/>
    <p>
    My name is Lisette Morales. Currently, I am learning skills in HTML, CSS, and JavaScript for full-stack web development. My professional interest is web development. In particular, I have interest in both front-end development and back-end development. 
    </p> 
    </div>
</section>
  );
}