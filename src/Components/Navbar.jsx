import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/SelvamDental_logo.png";
import { FaPhoneAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaAddressCard, FaSquareInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  const toggleDropdown = () => {
    setActiveDropdown(!activeDropdown);
    setActiveSubDropdown(null); // Reset sub-dropdown
  };

  const toggleSubDropdown = (index) => {
    setActiveSubDropdown(activeSubDropdown === index ? null : index);
  };

  return (
    <>
      <header>
        {/* Top Bar */}
        <div className="topbar text-white py-2">
          <div className="container d-flex justify-content-between align-items-center flex-wrap">
            <div className="top_left d-flex align-items-center flex-wrap">
              <span className="me-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2" />
                +800 123 45 67
              </span>
              <span className="me-3 d-flex align-items-center">
                <IoMail className="me-2" />
                info@demolink.com
              </span>
              <span className="d-flex align-items-center">
                <FaAddressCard className="me-2" />
                121 Wallstreet Street, NY, USA
              </span>
            </div>
            <div className="social-icons d-flex align-items-center">
              <a href="#" className="text-white mx-2">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-white mx-2">
                <FaFacebook />
              </a>
              <a href="#" className="text-white mx-2">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Navbar Section */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img
                src={logo}
                alt="Careex Logo"
                className="me-2"
                style={{ height: "70px", width: "300px" }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about-us">
                    ABOUT US
                  </a>
                </li>
                <li
                  className={`nav-item dropdown ${
                    activeDropdown ? "show" : ""
                  }`}
                >
                  <a
                    className="nav-link"
                    href="#"
                    onClick={toggleDropdown}
                  >
                    TREATMENTS
                  </a>
                  {activeDropdown && (
                    <ul className="dropdown-menu">
                      {[
                        "Orthodontics",
                        "Conservative Dentistry",
                        "Prostodontics",
                        "Periodontics",
                        "Laser Dentistry",
                        "Pediatric Dentistry",
                        "Sedation Dentistry",
                        "Root Canal Treatment",
                        "Brushing Techniques",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className={`dropdown-item ${
                            index < 4 ? "has-submenu" : ""
                          }`}
                          onClick={() => index < 4 && toggleSubDropdown(index)}
                        >
                          {item}
                          {index < 4 && (
                            <span className="submenu-icon">▶</span>
                          )}
                          {index < 4 && activeSubDropdown === index && (
                            <ul className="submenu">
                              {[
                                "Submenu 1",
                                "Submenu 2",
                                "Submenu 3",
                                "Submenu 4",
                              ].map((subItem, subIndex) => (
                                <li key={subIndex} className="submenu-item">
                                  <a href="#">{subItem}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/virtual-tour">
                    VIRTUAL TOUR
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/smile-gallery">
                    SMILE GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/events">
                    EVENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact-us">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
