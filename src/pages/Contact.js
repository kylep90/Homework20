import React from 'react'
import '../assets/style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
// import { fabInstagram } from '@fortawesome/free-solid-svg-icons'



function Contact() {
    return(
        <div>
{/* <section className="card">
    <section className="card-body">

      <h3 className="card-title">Contact</h3>
      <hr/>
      <form>
        <section className="form-group">
          <label for="exampleFormControlInput1">Name</label>
          <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="John Smith"/>
        </section>
        <section className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </section>
        <section className="form-group">
          <label for="exampleFormControlTextarea1">Your message</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </section> */}
        {/* Added a submit button */}
        {/* <section className="col-auto">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </section>
      </form>
      </section>
      </section> */}
      <div className="card-body">
        <h2>Feel free to contact me via my: </h2>
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href="https://www.linkedin.com/in/kyle-pingue-ba1a651a3/" role="button" className=" btn btn-link mr-2">
                      <FontAwesomeIcon icon={faLinkedin} />   LinkedIn 
                      </a><br></br>
                      <a href="https://www.instagram.com/kpi1990/?hl=en" role="button" className=" btn btn-link mr-2">
                        <FontAwesomeIcon icon={faInstagram} />   Instagram
                      </a>
                      <br></br>
                      <a href="mailto:pinguek@gmail.com" role="button" className=" btn btn-link mr-2">
                        <FontAwesomeIcon icon={faEnvelope} />   Email

                      
                      </a>
                    </div>
      </div>
      </div>

    )
}
export default Contact
