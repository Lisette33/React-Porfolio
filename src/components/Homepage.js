import React from 'react';
import '../styles/Homepage.css';

function Homepage({setCurrentPage}) {

  return (
    <div>
        {/* <div class="background"></div> */}
        <div class="container">
        <div style={{display:"flex",flex:"row", justifyContent:"center", padding:"0%", alignItems:"center"}}>
        {/* <div class="background-text text-center"> */}
        <div class="card bg-transparent border-0 text-center">
        <div class="card-body">
            <b><h1 class="card-title">Web Development</h1></b>
        </div>
        </div>
        </div>
        </div>
        {/* </div> */}
    </div>







    );
}

export default Homepage;