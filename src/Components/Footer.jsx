// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-title">Careex</h2>
          <div className='footenlists'>
          <p>
            Careex is a medical center, which provides a wide range of medical
            services for adults and kids. We take care about your health in a
            professional way!
          </p>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Head Office</h2>
          <div className='footenlists'>
          <p>4096 N Highland St, Arlington</p>
          <p>VA 32101, USA</p>
          <p><a style ={{color:"#04abe3"}} href="mailto:info@demolink.com">info@demolink.com</a></p>
          <p><a style={{color:"yellow", fontWeight:"bold"}} href="tel:80012345678">800 1234 56 78</a></p>
          <p>Mon-Thu: 9:30 – 21:00</p>
          <p>Fri: 6:00 – 21:00</p>
          <p>Sat: 10:00 – 15:00</p>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Latest Posts</h2>
          <div className='footenlists'>
          <p>Sed elementum sodales <span>March 25, 2023</span></p>
          <p>Basic dental care <span>March 22, 2023</span></p>
          <p>First signs of Gum Disease <span>March 21, 2023</span></p>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <div className='footenlists'>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Doctors</a></p>
          <p><a href="#">Services</a></p>
          <p><a href="#">Contacts</a></p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        
      </div>
    </footer>
  );
};

export default Footer;
