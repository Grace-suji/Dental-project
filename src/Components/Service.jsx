import React, { useState, useEffect } from "react";
import "./Service.css";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import servicepicture from "../assets/servicepicture.jpg";

const Service = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [transition, setTransition] = useState(false);

  const reviews = [
    {
      name: "Zack Effron",
      location: "Santa Monica, CA",
      review:
        "We use Careex services for a long time! All members of our family always make regular checkups in this medical center. Their staff is kind and very careful. I highly recommend Careex services if you take care about your health!",
      image: client1,
    },
    {
      name: "Jane Doe",
      location: "Los Angeles, CA",
      review:
        "I've been coming to Careex for years and I've always been happy with the service. The doctors are friendly and knowledgeable, and the staff is always helpful.",
      image: client2,
    },
  ];

  const handleNextReview = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
      setTransition(false);
    }, 500); 
  };
  
  const handlePreviousReview = () => {
    setTransition(true);
    setTimeout(() => {
      setCurrentReview((prevReview) =>
        prevReview === 0 ? reviews.length - 1 : prevReview - 1
      );
      setTransition(false);
    }, 500); 
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextReview();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="service-section">
      <div className="container-service">
        <div className="service-row row align-items-center">
          <div className="col-md-6 service-image">
            <img src={servicepicture} alt="Doctor" className="img-fluid" />
          </div>
          <div className="col-md-6 service-carousel">
            <h2>What Our Clients Say</h2>
            <div className="review-box">
              <div
                className="review-details-container"
                style={{
                  transform: `translateX(-${currentReview * 100}%)`,
                }}
              >
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="review-slide"
                    style={{
                      opacity: transition ? 0 : 1,
                    }}
                  >
                    <div className="review-details" style={{paddingTop:"30px"}}>
                      <p style={{textAlign:"justify"}}>{review.review}</p>
                      <div className="review-image" style ={{display:"flex", paddingTop:"20px"}}>
                      <img
                        src={review.image}
                        alt={review.name}
                        className="rounded-circle"
                      />
                      <div style={{display:"flex" ,flexDirection:"column", paddingTop:"10px", paddingLeft:"20px"}}>
                      <h3>{review.name}</h3>
                      <p>{review.location}</p>
                      </div>
                    </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="review-nav">
            <MdKeyboardArrowLeft  style={{height:"50px", width:"50px"}} onClick={handlePreviousReview} className="prev-button" /> 
            <MdKeyboardArrowRight style={{height:"50px", width:"50px"}} onClick={handleNextReview} className="next-button"/>
                
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
