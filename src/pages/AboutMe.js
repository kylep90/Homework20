import React from 'react'
import '../assets/style.css'

function AboutMe () {
    return (
        <main>
<div id="container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item">
            <img className="carouselImage" src="Madrid.jpg" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img className="carouselImage" src="Teocelo.jpg" className="d-block w-100"/>
          </div>          
          <div className="carousel-item active">
            <img className="carouselImage" src="Colombia.jpg" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img className="carouselImage" src="Teotihuacan.jpg" className="d-block w-100"/>
          </div>
          <div className="carousel-item">
            <img className="carouselImage" src="Skiing.jpg" className="d-block w-100"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    <div id="aboutme">
      <h1 className="title">About me</h1>
      
        <p>
        My name is Kyle, a teacher of Mathematics in CDMX originally from South Wales.
        </p>
        <br/>
        
        <p>
        I am currently undertaking a Coding Bootcamp with the Tec de Monterrey with the plan to become a Full Stack Developer by September 2020.       </p>
        <br/>
      
          <p>
        My porfolio is underconstruction at the moment, but you view some codes that I have created and my contact details.
        </p>
        <br/>
         <p>
        Thank you for taking the time visit my welcome to my page and please feel free to contact me should you have any queries.
        </p>
        <br/>

</div>
</div>
</main>


    )
}

export default AboutMe