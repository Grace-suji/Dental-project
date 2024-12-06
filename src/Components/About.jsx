import React from 'react'
import about from "../assets/About-img.png"
import "./About.css"
import doctor1 from "../assets/doctor1.jpeg";
import doctor2 from "../assets/doctor2.jpeg";
import Service from "../Components/Service"


const About = () => {
  return (
    <div>
        <div className="container my-5" style={{margintop: "50px"}}>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={about} alt="Doctor" className="img-fluid rounded"  style={{maxWidth:"100%",height:"650px"}}/>
        </div>
        <div className="col-md-6">
          <h2 className="display-4">We Provide</h2>
          <h3 className="mb-4">Total Health Care</h3>
          <div className='aboutcontent'>
          <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
          <p>Clinical excellence, diversity, and access to innovative technology are all hallmarks of the graduate medical education experience at Careex. Our residents, fellows, and renowned staff share their experience working at Careex.</p>
          <p><strong>We try to do our best to help you and provide with a high-quality services.</strong></p></div>
          <a href="contact_link" className=" serbtn btn btn-lg">Get in Touch</a>
        </div>
      </div>
    </div>
    <section className="features">
      <div className="feature">
        <h2>Quality </h2>
        <p>
          We provide you with professional dental services by our experienced staff. Our clinic is equipped with state-of-the-art monitoring, diagnostic, and life support equipment to ensure the highest standards of care.
        </p>
      </div>
      <div className="feature">
        <h2>Dignity </h2>
        <p>
          Your comfort and dignity are very important to us. We use an individualized approach to treat each patient with the utmost respect, taking into account your specific wishes and suggestions.
        </p>
      </div>
      <div className="feature">
        <h2>Responsibility</h2>
        <p>
          Our team is highly professional and responsive. We are passionate about our work and strive to provide you with top-quality dental services and treatment.
        </p>
      </div>
    </section>

    <section className="about-us">
      <h1 className='abus'>About Us</h1>
      <h2>Management Team</h2>
      <div className="team-member">
        <img src={doctor1} alt="Dr. M. Charles Prem Kumar" className="member-photo" />
        <div className="member-info">
          <h3>Dr. M. Charles Prem Kumar</h3>
          <p><strong>Founder & Owner, Managing Director</strong></p>
          <p>
            Dr. Charles, Dental Surgeon who graduated from Annamalai University in the year 1999, is passionate about providing quality dental services to the society. He founded Charli Dental in the year 2009. Charli Dental is committed towards providing excellent services in dentistry.
          </p>
        </div>
      </div>
      <div className="team-member">
        <img src={doctor2} alt="Mrs. Jasmine S.K Jeba Priya" className="member-photo" />
        <div className="member-info">
          <h3>Mrs. Jasmine S.K Jeba Priya</h3>
          <p><strong>Executive Director, Charli Dental Chain of Clinics</strong></p>
          <p>
            Mrs. Jasmine, the Executive Director of Charli Dental, is basically an IT professional with rich experience in IT business for nearly 13 years. Mrs. Jasmine, a post-graduate in computer science, has been the Executive Director of Charli Dental since July 2014.
          </p>
        </div>
      </div>
    </section>
    <Service/>
    
      
    </div>
  )
}

export default About
