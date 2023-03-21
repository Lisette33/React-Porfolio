import React from 'react';
import '../styles/Homepage.css';

function Homepage({setCurrentPage}) {

  return (
    <div>
        {/* <div class="background"></div> */}
        <div class="container">
        <div style={{display:"flex",flex:"row", justifyContent:"center", padding:"0%", alignItems:"center"}}>
        <div class="background-text text-center">
            <p>
                <h1><b>Full-Stack Web Development</b></h1>
            </p>
        </div>
        </div>
        </div>

    </div>




    );
}

export default Homepage;