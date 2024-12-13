import React from 'react';
import Eventbanner from "../assets/EventBanner.jpg"
import Eventpics from "../assets/eventspic.jpg"


const Event = () => {
    return (
        <>
        <img className="img-fluid" src={Eventbanner} alt="Contact Banner" style={{width:"100%",height:"400px"}}/>

        <div className="container mt-5">
            <div className="row mb-4">
                <div className="col text-center">
                    <h1>Events</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h2>ROTOCAP15 - Cancer Awareness and Prevention Seminar</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics} className="img-fluid" alt="Event 1" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics}  className="img-fluid" alt="Event 2" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics}  className="img-fluid" alt="Event 3" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics}  className="img-fluid" alt="Event 4" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics} className="img-fluid" alt="Event 5" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics} className="img-fluid" alt="Event 6" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h2>Charli Dental Kodambakkam 3rd Year Anniversary</h2>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics} className="img-fluid" alt="Event 7" />
                        </div>
                        <div className="col-md-6 col-lg-4 mb-4">
                            <img src={Eventpics}  className="img-fluid" alt="Event 8" />
                        </div>
                    </div>
                </div>
            </div>

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

export default Event;
