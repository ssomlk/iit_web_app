import React from 'react';

function ContactUs() {  
    return (
        <div className="contactDataWrapper">
        <div className="contactLeftContainer paddingLeft30 pr-99">
            <div className="nameContainer">
                <div className="lineHeight1">International Institute of</div>
                <div className="lineHeight1">Terawada</div>
            </div>
            <div className="addressContainer mb-25 pl-20">
                <div className="addressImageCont mr-24">
                    <img
                        className="d-block w-100 pin-img-max-width"
                        src="/Address.svg"
                        alt="Address.svg"
                        width="24px"
                    />
                </div>
                <div className="addressNameContainer">
                    <div>
                        Hinetikalma Watta Road
                    </div>
                    <div>
                        Kaluwaragas wewa
                    </div>
                    <div>
                        Sri Lanka
                    </div>
                </div>
            </div>
            <div className="commMethodContainer mb-25 pl-20">
                <div className="contactImageCont mr-18">
                    <img
                        className="d-block w-100 contact-img-max-width"
                        src="/contact.svg"
                        alt="Contact.svg"
                        width="36px"
                    />
                </div>
                <div className="contactDetailsContainer">
                    <div>
                        info@iit.lk
                    </div>
                    <div>
                        +94 112 897 8899
                    </div>
                </div>
            </div>
            <div className="directionsContainer mb-25 pl-20">
                <div className="directionsImageCont mr-24">
                    <img
                        className="d-block w-100 pin-img-max-width"
                        src="/Directions.svg"
                        alt="Directions.svg"
                        width="24px"
                    />
                </div>
                <div className="directionDetailsContainer">
                    <a>Get Directions</a>
                </div>
            </div>
        </div>
        <div className="contactRightContainer paddingHorizontal30">
            <form className="contactUsForm">
                <div className="mb-26 flex">
                    <div className="mr-32">
                        <label htmlFor="contactName" className="form-label contactLabelsText">Name</label>
                        <input type="text" className="form-control width-356 pd-19 bg-color-brown contactInputText height-68" id="contactName"/>
                    </div>
                    <div>
                        <label htmlFor="contactEmail" className="form-label contactLabelsText">Email</label>
                        <input type="email" className="form-control width-356 pd-19 bg-color-brown contactInputText height-68" id="contactEmail"/>
                    </div>
                </div>
                <div className="mb-26 flex">
                    <div className="mr-32">
                        <label htmlFor="contactPhone" className="form-label contactLabelsText">Phone</label>
                        <input type="text" className="form-control width-356 pd-19 bg-color-brown contactInputText height-68" id="contactPhone"/>
                    </div>
                    <div>
                        <label htmlFor="contactSubject" className="form-label contactLabelsText">Subject</label>
                        <input type="text" className="form-control width-356 pd-19 bg-color-brown contactInputText height-68" id="contactSubject"/>
                    </div>
                </div>
                <div className="mb-26">
                    <label htmlFor="contactMessage" className="form-label contactLabelsText">Message</label>
                    <textarea className="form-control min-height-213 pd-19 bg-color-brown contactInputText" id="contactMessage" rows="3"></textarea>
                </div>
                <div className="mb-26">
                    <button type="button" className="submitButton">SUBMIT</button>
                </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default ContactUs;