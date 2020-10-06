import React from 'react'
import '../assets/style.css'

function Portfolio (){
    return (
        <main>
        <section className="container">
        <section className="card">
            <section className="card-body">
              <h3 className="card-title">Portfolio</h3>
              <hr/>
              <section id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
    
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
        
                </ol>
    
                <section className="carousel-inner" style={{maxWidth: "500px", maxHeight: "300px", margin: "auto"}}>
                 
                  <section className="carousel-item active" style={{maxWidth: "500px", maxHeight: "300px", textAlign: "centre"}}>
                    <a href="https://kylep90.github.io/Homework3JavaScript/Develop/index.html" target="_blank">
                    <img src="http://cdn.iphonehacks.com/wp-content/uploads/2019/03/Facebook-passwordsecurity.png"   className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption ">
                      {/* Added a new className "text-background" in order to see the writing more clearly against whichever background */}
                      <h5 className="text-background">Password Generator</h5>
                      <p className="text-background">Get a unique password.</p>
                    </section>
                  </section>
    
                  <section className="carousel-item"style={{maxWidth: "500px", maxHeight: "300px"}}>
                    <a href="https://kylep90.github.io/Homework4APIs/quizTime.html" target="_blank">
                    <img src="https://nathenamin.files.wordpress.com/2011/11/welshflag.jpg"   className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption d-none d-md-block">
                      <h5 className="text-background">Wales Quiz</h5>
                      <p className="text-background">How much do you know about Wales?.</p>
                    </section>
                  </section>
    
                  <section className="carousel-item" style={{maxWidth: "500px", maxHeight: "300px"}}>
                    <a href="https://kylep90.github.io/Project1/" target="_blank">
                    <img src="https://dynamic.thoughtworks.com/gatepages/hero_banner_image-c97ed1594515d351f743b8633013b4cb.jpeg"  style={{height: "100%"}} className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption d-none d-md-block">
                      <h5 className="text-background">The Backpack Assistant</h5>
                      <p className="text-background">Going on holiday? This is the only application YOU need!</p>
                    </section>
                  </section>
    
                  <section className="carousel-item" style={{maxWidth: "500px", maxHeight: "300px"}}>
                    <a href="https://kylep90.github.io/Homework6Weather/" target="_blank">
                    <img src="http://www.almanac.com/sites/default/files/image_nodes/weather-forecast-july.jpg"    className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption d-none d-md-block">
                      <h5 className="text-background">Weather</h5>
                      <p className="text-background">Should I wear a jacket or a vest?</p>
                    </section>
                  </section>

                  <section className="carousel-item" style={{maxWidth: "500px", maxHeight: "300px"}}>
                    <a href="https://polar-hamlet-63733.herokuapp.com/" target="_blank">
                    <img src="https://polar-hamlet-63733.herokuapp.com/plan-it.png"  style={{maxWidth: "500px", maxHeight: "300px"}} className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption d-none d-md-block">
                      <h5 className="text-background">Plan-It</h5>
                      <p className="text-background">Plan Now = Fun later!</p>
                    </section>
                  </section>

                  <section className="carousel-item" style={{maxWidth: "500px", maxHeight: "300px"}}>
                    <a href="https://generationarte.herokuapp.com/" target="_blank">
                    <img src="https://generationarte.herokuapp.com/static/media/GEN.c1494f48.jpg"  style={{maxWidth: "500px", maxHeight: "300px"}} className="d-block w-100" alt="300px"/>
                    </a>
                    <section className="carousel-caption d-none d-md-block">
                      <h5 className="text-background" style={{color:"black"}}>Generation Arte</h5>
                      <p className="text-background">Platform for likeminded artists</p>
                    </section>
                  </section>
    
    
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next " href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
               
              </section>
              </section>
              </section>
              </section>
              </section>
      </main>
    )
}

export default Portfolio
