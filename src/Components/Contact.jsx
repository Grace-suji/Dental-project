import React, { useState } from "react";
import "./Contact.css";

import contactbanner from "../assets/contactbanner.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [selectedTime, setSelectedTime] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const validateInput = (name, date, time, phone, email, message) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required.";
    }

    if (!date) {
      errors.date = "Date is required.";
    }

    if (!time) {
      errors.time = "Time is required.";
    }

    if (!phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(phone)) {
      errors.phone = "Invalid phone number. It should be a 10-digit number.";
    }

    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email address. Ensure it follows the format example@example.com.";
    }

    if (!message.trim()) {
      errors.message = "Message is required.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateInput(name, date, selectedTime, phone, email, message);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");

      // Clear all inputs
      setName("");
      setDate("");
      setSelectedTime("");
      setPhone("");
      setEmail("");
      setMessage("");
      setErrors({});
    }
  };

  const handleTimeSelect = (slot) => {
    setSelectedTime(slot);
    setShowDropdown(false);
  };

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM"
  ];

  return (
    <>
      <div className="contactbanner">
        <img className="img-fluid" src={contactbanner} alt="Contact Banner" />
      </div>
      <div className="container contact-container mt-4">
        <div className="row">
          <div className="col-md-6 contact-details">
            <h1>Contact Us</h1>
            <h2>Palayamkottai, Tirunelveli</h2>
            <p>Noor Complex,<br />
              Opp. Manakavalampillai Hospital,<br />
              Palayamkottai Market,<br />
              Tirunelveli - 627002.</p>
            <p><strong>Helpline:</strong> +91 9362905001, +91 9366725500</p>
            <p><strong>Landline:</strong> 0462-2573030</p>
            <p><strong>Weekdays:</strong> 09:00 AM to 08:00 PM</p>
            <p><strong>Sundays:</strong> By appointment</p>
          </div>
          <div className="appodiv col-md-6">
            <div className="appointment-form p-4">
              <h2 style={{color:"white"}}>Fix an Appointment</h2>
              <form className="form-group" onSubmit={handleSubmit}>
                <input
                  name="name"
                  type="text"
                  className={`form-control mb-3 ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}

                <input
                  name="date"
                  type="date"
                  className={`form-control mb-3 ${errors.date ? "is-invalid" : ""}`}
                  min={new Date().toISOString().split("T")[0]}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {errors.date && <div className="invalid-feedback">{errors.date}</div>}

                <div className="position-relative mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.time ? "is-invalid" : ""}`}
                    placeholder="Choose Time"
                    value={selectedTime}
                    readOnly
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                  {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                  {showDropdown && (
                    <ul className="dropdown-menu show w-100">
                      {timeSlots.map((slot, index) => (
                        <li
                          key={index}
                          className="dropdown-item"
                          onClick={() => handleTimeSelect(slot)}
                        >
                          {slot}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <input
                  type="text"
                  className={`form-control mb-3 ${errors.phone ? "is-invalid" : ""}`}
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}

                <input
                  type="email"
                  className={`form-control mb-3 ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                <textarea
                  name="message"
                  className={`form-control mb-3 ${errors.message ? "is-invalid" : ""}`}
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}

                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
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
      </div>
    </>
  );
};

export default Contact;
