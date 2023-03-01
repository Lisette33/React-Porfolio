import React from 'react';

export default function About() {

  const navTitleFour="Resume";

  return (
    <section id="resume" class="about-me">
        <h3>{navTitleFour}</h3>
        <ul class="project-list"> 
            <ol class="card4">
                <a href="#">Resume</a>
            </ol>
        </ul>
    </section>
  );
}