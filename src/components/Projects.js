import React from 'react';
import '../styles/Projects.css';
import movies from '../images/movies.jpg';

export default function About() {
  return (
    <div class="container">

    <div style={{display:"flex",flex:"row", justifyContent:"center",width:"100%",height:"100%", padding:"0%", margin: "5%",alignItems:"center"}}>
    <div class="row row-cols-1 row-cols-md-2 g-4 text-center">

    {/* <div class="row row-cols-1 row-cols-md-2 g-4"> */}

  <div class="col">
  <a href='https://iamlucho.github.io/movie-finder-project/' target='_blank'> 
    <div class="card" id='card-one'>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      {/* <img src={movies} class="img-fluid rounded-start border-0" alt="musicpic"/> */}
      <div class="card-body-pic">
        <h5 class="card-title">Movie Finder <br/> Project</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
    </a>
  </div>
 
  <div class="col">
  <a href='https://damp-river-14558.herokuapp.com/' target='_blank'> 
    <div class="card" id='card-two'>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body-pic">
        <h5 class="card-title">Secret Sauce <br/> Project</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
    </a>
  </div>
  
  <div class="col">
  <a href='https://salty-fjord-43236.herokuapp.com/' target='_blank'> 
    <div class="card" id='card-three'>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body-pic">
        <h5 class="card-title">Match My <br/> Mood Project</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p> */}
      </div>
    </div>
    </a>
  </div>

  <div class="col">
  <a href='https://lisette33.github.io/Module-1-Challenge-Assignment/' target='_blank'> 
    <div class="card" id='card-four'>
      {/* <img src="..." class="card-img-top" alt="..."> */}
      <div class="card-body-pic">
        <h5 class="card-title">The Horiseon <br/>Project</h5>
        {/* <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> */}
      </div>
    </div>
    </a>
  </div>
  </div>
  </div>
  {/* </div> */}
</div>
     
  );
}