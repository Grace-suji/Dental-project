import React, { useState } from "react";
import "./Smile.css"
import smilepics from "../assets/smilepics.jpg"
import smilebanner from "../assets/Smilebanner.jpg"


const Smile = () => {
  const [modalImage, setModalImage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const categories = [
    {
      title: "Fractured Teeth Corrections",
      images: [
        { before: smilepics, after:smilepics},
        { before: smilepics, after: smilepics },
      ],
    },
    {
      title: "Attrited Teeth Correction",
      images: [{ before: "before3.jpg", after: "after3.jpg" }],
    },
    {
      title: "Decayed Teeth Corrections",
      images: [{ before: "before4.jpg", after: "after4.jpg" }],
    },
    {
      title: "Discoloured Teeth Corrections",
      images: [
        { before: "before5.jpg", after: "after5.jpg" },
        { before: "before6.jpg", after: "after6.jpg" },
      ],
    },
    {
      title: "Malaligned Teeth Corrections",
      images: [
        { before: "before7.jpg", after: "after7.jpg" },
        { before: "before8.jpg", after: "after8.jpg" },
      ],
    },
    {
      title: "Spacing Between Teeth",
      images: [{ before: "before9.jpg", after: "after9.jpg" }],
    },
  ];

  const openModal = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setModalImage("");
    setShowModal(false);
  };

  return (
    <>
    <img className="img-fluid" src={smilebanner} alt="Contact Banner" style={{width:"100%",height:"400px"}}/>
    <div className="smile-gallery container my-5">
      <h1 className="text-center mb-4">Smile Gallery</h1>
      <h3>Cosmetic Treatment</h3>
      {categories.map((category, index) => (
        <div key={index} className="category mb-4">
          <h4>{category.title}</h4>
          <div className="row">
            {category.images.map((image, imgIndex) => (
              <div className="col-md-6 col-sm-12 mb-3">
              <div className="image-container d-flex justify-content-between">
                <div className="before-after text-center">
                  <img
                    src={image.before}
                    alt="Before"
                    className="img-fluid"
                    onClick={() => openModal(image.before)}
                  />
                  <p>BEFORE</p>
                </div>
                <div className="before-after text-center">
                  <img
                    src={image.after}
                    alt="After"
                    className="img-fluid"
                    onClick={() => openModal(image.after)}
                  />
                  <p>AFTER</p>
                </div>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={modalImage} alt="Enlarged" className="img-fluid" />
          </div>
        </div>
      )}
       <div className="row mt-5 mb-5">
                <div className="col-12">
                    <div className="card" style={{backgroundColor:"#0098d8",color:"white"}}>
                        <div className="card-body">
                            <h5 className="card-title">Melapalayam, Tirunelveli</h5>
                            <p className="card-text">
                                Address:<br />
                                1 Floor, Vaalan Complex, Near Bharat Petroleum, Ambai Main Road, Melapalayam, Tirunelveli - 627005.
                            </p>
                            <p className="card-text">
                                Week Days: 04:00 PM to 08:30 PM<br />
                                Sundays: By appointment
                            </p>
                            <p className="card-text">
                                Helpline: +91 9360290001, +91 936725390<br />
                                Landline: 0462-2353400
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </>
  );
};

export default Smile;
