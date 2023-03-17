import React from 'react';
// import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
// import pic4 from '../images/pic4.jpg';

export default function About() {
  return (
    <section id="projects" class="about-me">
    <br />
    <br />
    <h3></h3>
    <ul class="project-list">
    {/* width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" */}
        <div class="flex-box">
        <ol class="card" style={{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background: "white"}}> 
        <img alt="project2" src={pic3} class="float-left" id="image"/>
        <br/>
            <a href="https://lisette33.github.io/Module-1-Challenge-Assignment/">
            <button><b>Horiseon Project</b></button></a> 
            <br/>
            <a href="https://iamlucho.github.io/movie-finder-project/">
            <button><b>Movie Finder Project</b></button></a>
            <br/>
            <a href="https://damp-river-14558.herokuapp.com/"><button><b>Secret Sauce Project</b></button></a>
            <br/>
            {/* <img alt="project1" src={pic2} class="float-left" id="image"/> */}
        </ol>
        </div>
        {/* <div class="flex-box2" style={{jwidth:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
        <ol class="card"> 
            <a href="https://iamlucho.github.io/movie-finder-project/">
            <button><b>Movie Finder Project</b></button></a>
        </ol>
        </div> */}
        {/* <div class="flex-box3" style={{width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}> 
        <ol class="card"> 
            <a href="https://damp-river-14558.herokuapp.com/"><button><b>Secret Sauce Project</b></button></a>
            {/* <img alt="project3" src={pic4} class="float-left" id="image"/> */}
        {/* </ol> */}
        {/* </div> 
        <div class="flex-box4" style={{justifyContent:"center"}}> 
        <ol class="card"> 
            <a href="#project-4"><button><b>Project 4</b></button></a>
        </ol> 
        </div>
        <div class="flex-box5" style={{justifyContent:"center"}}> 
        <ol class="card"> 
            <a href="#project-5"><button><b>Project 5</b></button></a>
        </ol>
        </div>
        <div class="flex-box6" style={{justifyContent:"center"}}> 
        <ol class="card"> 
            <a href="#project-6"> <button><b>Project 6</b></button></a>
        </ol> */}
        {/* </div> */}
    </ul>
</section>
  );
}