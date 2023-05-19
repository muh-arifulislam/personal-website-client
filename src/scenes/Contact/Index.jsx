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
        <div className="my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3660.002286358846!2d91.18080701069078!3d23.460382020089884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683940263065!5m2!1sen!2sbd"
            title="address"
            height="150"
            style={{ width: "100%" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
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
                <h4 className="fs-5 mb-1">415-832-2000</h4>
                <p className="fs-6">
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
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
                <h4 className="fs-5 mb-1">415-832-2000</h4>
                <p className="fs-6">
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-top pe-2 pb-4">
              <div className="pe-2">
                <FontAwesomeIcon
                  color="blue"
                  icon={faEnvelope}
                  size="2x"
                ></FontAwesomeIcon>
              </div>
              <div className="ps-3">
                <h4 className="fs-5 mb-1">415-832-2000</h4>
                <p className="fs-6">
                  Duis erat leo, aliquam laoreet fringilla quis, pretium vitae
                  dui.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 px-4">
            <SectionTitle>How Can I Help You?</SectionTitle>
            <div>
              <form class="row g-3">
                <div class="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-3">
                  <textarea
                    style={{ height: "100%" }}
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Your Message"
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
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
