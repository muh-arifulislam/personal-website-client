import React from "react";
import PageTittle from "../../components/PageTittle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  return (
    <div className="">
      <PageTittle title="Contact" subtitle="Get In Touch"></PageTittle>
      <div className="">
        <div className="mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3660.002286358846!2d91.18080701069078!3d23.460382020089884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683940263065!5m2!1sen!2sbd"
            title="address"
            height="150"
            style={{ width: "100%" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="d-flex align-items-top pe-2 pb-4">
              <div className="pe-2">
                <FontAwesomeIcon
                  color="blue"
                  icon={faMobile}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <div className="ps-3">
                <h4 className="mb-1" style={{fontSize:"16px",fontWeight:"600"}}>+88 0130-6560-747</h4>
                <p className="" style={{fontSize:"14px",color:"#666"}}>
                  Nock nock!! Give me a text on Whatsapp. 
                </p>
              </div>
            </div>
            <div className="d-flex align-items-top pe-2 pb-4">
              <div className="pe-2">
                <FontAwesomeIcon
                  color="blue"
                  icon={faLocationDot}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <div className="ps-3">
                <h4 className=" mb-1" style={{fontSize:"16px",fontWeight:"600"}}>Sadar South, Cumilla</h4>
                <p className="" style={{fontSize:"14px",color:"#666"}}>
                  Sadar South, Cumilla, Bangladesh
                </p>
              </div>
            </div>
            <div className="d-flex align-items-top pe-2 pb-4">
              <div className="pe-2">
                <FontAwesomeIcon
                  color="blue"
                  icon={faEnvelope}
                  size="xl"
                ></FontAwesomeIcon>
              </div>
              <div className="ps-3">
                <h4 className=" mb-1" style={{fontSize:"16px",fontWeight:"600",wordBreak:"break-word"}}>ariful.islam20234@gmail.com</h4>
                <p className="" style={{fontSize:"14px",color:"#666"}}>
                  Say hi on email! I always appreciate
                  meeting new people.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <SectionTitle>How Can I Help You?</SectionTitle>
            <div>
              <form className="row g-3">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <textarea
                    style={{ height: "100%" }}
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Your Message"
                  />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
