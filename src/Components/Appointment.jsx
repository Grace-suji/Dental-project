import React, { useState } from "react";
import "./Appointment.css"

const Appointment = () => {
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
    <div className="container my-5">
      <div className="row align-items-center">
    
        <div className="col-md-6">
          <div className="appointment-form p-4 bg-light">
            <h2 className="mb-4">Make an Appointment</h2>
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

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
