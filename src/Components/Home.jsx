import React from "react";
import "./Home.css";
import cosmetic from "../assets/Cosmetic_dentistry.png"
import rootcanal from "../assets/2.png"
import  dentures from "../assets/3.png"
import dentalhygiene from "../assets/4.png"
import orthodontics from "../assets/5.png"
import Service from "../Components/Service"
import Appointment from "../Components/Appointment"



const Home = () => {
  return (
    <>
    <section className="home-section">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-md-6 text-section">
        <h5 className="text-highlight" style={{color:"#04abe3"}}>Your Smile Is Our Priority</h5>
        <h1 className="display-4 fw-bold" style={{color:"#04abe3"}}>Exceptional Dental Care</h1>
        <p className="lead">
          We are committed to providing you with healthy, beautiful smiles and ensuring your dental well-being every day.
        </p>
        <a href="#learn-more" className="btn btn-lg" style={{backgroundColor:"#045c7c", color:"white"}}>
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
          {[
            { id: "cosmetic", title: "Cosmetic Dentistry", desc: "by professionals", img: cosmetic },
            { id: "rootcanal", title: "Root Canal Treatment", desc: "Accurate approach", img: rootcanal },
            { id: "dentures", title: "Dentures", desc: "Individual approach", img: dentures },
            { id: "dentalhygiene", title: "Dental Hygiene", desc: "Safety and Carefully", img: dentalhygiene },
            { id: "smile", title: "", desc: "Your Smile is the most precious thing and we help you achieve the perfect smile", img: null },
            { id: "orthodontics", title: "Orthodontics", desc: "24/7", img: orthodontics },
          ].map((service, idx) => (
            <div className={`col-md-4 ${idx === 4 ? "d-flex align-items-center" : ""}`} key={service.id}>
              <div className="service-card text-center" style={{height:"250px",width:"100%"}}>
                {service.img ? (
                  <div className="icon">
                    <img src={service.img} alt={service.id} style={{ height: "100px", width: "100px" }} />
                  </div>
                ) : null}
                {service.title && <h5 className="servhead">{service.title}</h5>}
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>

      {/* Timetable Section */}
      <div className="col-lg-4">
        <div className="timetable-card">
          <h4 className="timetabe_title">
            Check Our<br />
            <span>Weekly Timetable</span>
          </h4>

          <p>
            You can make an appointment, select a convenient time, and choose the appropriate doctor here.
          </p>
          <ul className="timetable-list">
            {[
              { day: "Monday - Friday", time: "8:00 - 18:00" },
              { day: "Saturday", time: "8:00 - 18:00" },
              { day: "Sunday", time: "8:00 - 18:00" },
            ].map((slot, idx) => (
              <li key={idx}>
                <span>{slot.day}</span>
                <span style={{ color: "yellow", fontWeight: "bold" }}>{slot.time}</span>
              </li>
            ))}
          </ul>
          <a href="#visit" className="btn btn-dark btn-lg">
            Visit Us
          </a>
        </div>
        </div>
    </div>
  </div>
</section>
    <Service/>
    <Appointment/>
    </>

    
  );
};

export default Home;
