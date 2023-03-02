import React, {useState} from 'react';

export default function About() {
    // const navTitleThree="Contact";

    const [message,setMessage]=useState("");
    console.log(message);

  return (
    <section id="contact-me" class="about-me">
    <br />
    <br />
    {/* <h3>{navTitleThree}</h3> */}
    <ul class="project-list">
    <div class="contact-me1">
        <ol class="card1">
            <b>Name:</b><a href=""></a>
            <div class="row">
              <div class="col">
                 <input type="text" class="form-control" placeholder="Name" aria-label="First name"/>
              </div>
            </div>
            
        </ol>
        <ol class="card2">
        <br />
            <b>Email:</b> <a href="mailto:lisettem367@gmail.com">Lisettem367@gmail.com</a>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
        </ol>
        <ol class="card3">
            <b>Message:</b>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"></label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </ol>
    </div>
    </ul>
</section>
  );
}