import React, { useState } from 'react';
import './Contact.css';
import contactbanner from "../assets/contactbanner.png";

const Contact = () => {
  const [timeSlots] = useState([
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM"
  ]);

  const [selectedTime, setSelectedTime] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTimeSelect = (slot) => {
    setSelectedTime(slot);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <>
      <div className='contactbanner'>
        <img style={{ height: "500px", width: "100vw" }} src={contactbanner} alt="contactbanner" />
      </div>
      <div className="contact-container">
        <div className='contact_content'>
          <h1>Contact Us</h1>
          <div className="contact-details">
            <h2>Palayamkottai, Tirunelveli</h2>
            <p>Noor Complex,<br />
              Opp. Manakavalampillai Hospital,<br />
              Palayamkottai Market,<br />
              Tirunelveli - 627002.</p>
            <p><strong>Helpline:</strong> +91 9362905001, +91 9366725500</p>
            <p><strong>Landline:</strong> 0462-2573030</p>
            <p><strong>Week Days:</strong> 09:00 AM to 08:00 PM</p>
            <p><strong>Sundays:</strong> By appointment</p>
          </div>
        </div>
        <div className="appointment-form">
          <div className='formbox'>
            <form style={{ backgroundColor: "#0098d8", paddingTop: "50px", paddingBottom: "50px" }}>
              <h2 style={{ color: "white" }}>Fix an Appointment</h2>
              <input type="text" placeholder="Name" />
              <input
                type="date"
                placeholder="Date: DD-MM-YYYY"
                min={new Date().toISOString().split('T')[0]} // Disable past dates
              />
              
              <div>
                <input className='time'
                  type="text"
                  placeholder="HH:MM"
                  value={selectedTime}
                  readOnly
                  onClick={() => setShowDropdown(!showDropdown)}
                  style={{ position: "relative" ,
          width: "200%",
            padding: "10px",
            margin: "5px",
            marginLeft:"10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer"}} 
                />
                {showDropdown && (
                  <ul style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    maxHeight: "150px",
                    overflowY: "auto",
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    zIndex: 1000,
                  }}>
                    {timeSlots.map((slot, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "10px",
                          cursor: "pointer",
                          borderBottom: "1px solid #eee",
                        }}
                        onClick={() => handleTimeSelect(slot)}
                      >
                        {slot}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input type="text" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.377610978428!2d77.6894832146183!3d8.719720893737234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041210cb7e98b3%3A0x9e4d2b3d8e07313e!2sCharli%20Dental!5e0!3m2!1sen!2sin!4v1614185228461!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Charli Dental Map"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
