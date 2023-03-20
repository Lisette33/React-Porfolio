import React from 'react';
import '../styles/Projects.css';
// import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
// import pic4 from '../images/pic4.jpg';

export default function About() {
  return (
    <div class="container">

    <div style={{display:"flex",flex:"row", justifyContent:"center",width:"100%",height:"105%", padding:"05%", alignItems:"center"}}>
    <div class="row row-cols-1 row-cols-sm-2 g-5 text-center">

  <div class="row row-cols-1 row-cols-mb-3 g-4 w-100 text-center">
  <div class="col">
    <a href='https://iamlucho.github.io/movie-finder-project/' target='_blank'> 
    <div class="card h-20" id='card-one'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Movie Finder <br/> Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a>

    <div class="col">
    <a href='https://damp-river-14558.herokuapp.com/' target='_blank'> 
    <div class="card h-100" id='card-two'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Secret Sauce <br/> Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a> 

    <div class="col">
    <a href='https://lisette33.github.io/Module-1-Challenge-Assignment/' target='_blank'> 
    <div class="card h-100" id='card-three'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Horiseon <br/> Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a> 

<div class="col">
    <a href='https://lisette33.github.io/Weather-Dashboard-Project/' target='_blank'> 
    <div class="card h-100" id='card-four'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Weather Dashboard Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a>

    <div class="col">
    <a href='https://fathomless-citadel-11849.herokuapp.com/' target='_blank'> 
    <div class="card h-100" id='card-five'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Note Taker <br/> Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a>

    <div class="col">
    <a href='https://aqueous-beach-09859.herokuapp.com/' target='_blank'> 
    <div class="card h-100" id='card-six'>
      {/* <img src="..." class="card-img-overlay" alt="..."/> */}
      {/* <img alt="pic-three" src={pic3} class="card-img-overlay" id="picthree-image"/> */}
      <div class="card-body">
        <h5 class="card-title">Book Search Engine Project</h5>
        <p class="card-text"></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"></small>
      </div>
    </div>
    </a>

    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
</div>
</div>
</div>

       
  );
}