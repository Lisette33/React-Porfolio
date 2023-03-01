import React from 'react';

export default function About() {
  return (
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
  );
}