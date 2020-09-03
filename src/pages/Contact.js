import React from 'react'
import '../assets/style.css'

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
                    <div className=" pt-0 d-md-inline-block d-flex-row text-center text-md-left justyfy-content-md-start justyfy-content-center">
                      <a href="https://www.linkedin.com/in/kyle-pingue-ba1a651a3/" role="button" className=" btn btn-link mr-2">
                        <i className="fab fa-linkedin fa-lg text-blue" ></i>  Linkedin
                      </a><br></br>
                      <a href="https://www.instagram.com/kpi1990/?hl=en" role="button" className=" btn btn-link mr-2">
                        <i aria-hidden="true" className="fab fa-instagram fa-lg text-grey"></i>Instagram
                      </a>
                    </div>
      </div>
      </div>

    )
}
export default Contact
