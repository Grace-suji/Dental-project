import React, { useState } from "react";
import "./Contact.css";
import Appointment from "./Appointment";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";


import contactbanner from "../assets/contactbanner.png";

const Contact = () => {
 

  return (
    <>
      <div className="contactbanner">
        <img className="img-fluid" src={contactbanner} alt="Contact Banner" />
      </div>
      <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="contacthead">Contact Details</h2>
          <p>If you are interested in working with us then please drop us a line, we would love to hear from you.</p>
          <ul className="list-unstyled contactContainer">
            <li><i><FaLocationDot /></i>121 Wallstreet Street, New York, USA</li>
            <li><i><IoMdMail /></i> info@demolink.com</li>
            <li><i ><FaPhoneVolume /></i> +800 1234 56 78</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="contacthead">Drop Us A Line</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input type="email" className="form-control" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Appointment/>
      
        <div className="row mt-4">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.377610978428!2d77.6894832146183!3d8.719720893737234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041210cb7e98b3%3A0x9e4d2b3d8e07313e!2sCharli%20Dental!5e0!3m2!1sen!2sin!4v1614185228461!5m2!1sen!2sin"
              width="100%"
              height="450"
              className="border rounded"
              allowFullScreen=""
              loading="lazy"
              title="Charli Dental Map"
            ></iframe>
          </div>
        </div>
      
    </>
  );
};

export default Contact;
