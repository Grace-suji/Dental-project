import React from "react";
import "./Home.css";
import cosmetic from "../assets/Cosmetic_dentistry.png"
import rootcanal from "../assets/2.png"
import  dentures from "../assets/3.png"
import dentalhygiene from "../assets/4.png"
import orthodontics from "../assets/5.png"
import Service from "../Components/Service"



const Home = () => {
  return (
    <>
    <section className="home-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 text-section">
            <h5 className="text-highlight">Your Smile Is Our Priority</h5>
            <h1 className="display-4 fw-bold">Exceptional Dental Care</h1>
            <p className="lead">
            We are committed to providing you with healthy, beautiful smiles and ensuring your dental well-being every day.
            </p>
            <a href="#learn-more" className="btn btn-primary btn-lg">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="services-timetable">
      <div className="container">
        <div className="row">
          {/* Services Section */}
          <div className="col-lg-8">
            <div className="row gy-4">
              {/* Service Cards */}
              <div className="col-md-4">
                <div className="service-card text-center">
                  <div className="icon">
                    <img className="bi bi-book" src={cosmetic} alt="cosmetic" style={{height:"100px", width:"100px"}}/>

                  </div>
                  <h5 className="servhead">Cosmetic Dentistry</h5>
                  <p>by professionals</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card text-center">
                  <div className="icon">
                    <img className="bi bi-heart" src={rootcanal} alt="rootcanal" style={{height:"100px", width:"100px"}}/>
                  </div>
                  <h5 className="servhead">Root Canal TReatment</h5>
                  <p>Accurate approach</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card text-center">
                  <div className="icon">
                  <img className="bi bi-book" src={dentures} alt="dentures" style={{height:"100px", width:"100px"}}/>
                  </div>
                  <h5 className="servhead">Dentures</h5>
                  <p>Individual approach</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card text-center">
                  <div className="icon">
                  <img className="bi bi-book" src={dentalhygiene} alt="cosmetic" style={{height:"100px", width:"100px"}}/>
                  </div>
                  <h5 className="servhead">Dental Hygiene</h5>
                  <p>Safety and Carefully</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card text-center" style={{height:"245px"}}>
                  <h5 style={{paddingTop:"50px"}}>Your Smile is the most precious thing and we help you in achieving the perfect smile</h5>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card text-center">
                  <div className="icon">
                  <img className="bi bi-book" src={orthodontics} alt="orthodontics" style={{height:"100px", width:"130px"}}/>
                  </div>
                  <h5 className="servhead">Orthodontics</h5>
                  <p>24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timetable Section */}
          <div className="col-lg-4">
            <div className="timetable-card">
              <h4 className="timetabe_title">Check Our<br></br><span>Weekly Timetable</span></h4>
            
              <p>
                You can make an appointment, select the convenient time and
                choose the appropriate doctor here.
              </p>
              <ul className="timetable-list">
                <li>
                  <span>Monday - Friday</span>
                  <span style={{color:"yellow",fontWeight:"bold"}}>8:00 - 18:00</span>
                </li>
                <li>
                  <span>Saturday</span>
                  <span style={{color:"yellow",fontWeight:"bold"}}>8:00 - 18:00</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span style={{color:"yellow",fontWeight:"bold"}}>8:00 - 18:00</span>
                </li>
              </ul>
              <a href="#visit" className="btn btn-dark btn-lg">Visit Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Service/>
    </>

    
  );
};

export default Home;
