import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Offcanvas = ({ project, id }) => {
  return (
    <div>
      <div
        style={{ width: "100%", transition: "all 0.8s ease-out" }}
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id={`${id}`}
        aria-labelledby={`${id}Label`}
      >
        <div className="offcanvas-body">
          <div className="bg-white px-lg-5 py-5">
            <div className="px-lg-5">
              <div className="d-flex justify-content-end my-3">
                <button
                  type="button"
                  className="btn-close"
                  style={{ padding: "12px 12px", backgroundColor: "gray" }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-5">
                <h1 className="fs-2 fw-bold">{project?.title}</h1>
              </div>
              <div className="row g-lg-5 gy-5">
                <div className="col-xs-12 col-sm-8 ">
                  <div className="bg-secondary">
                    <div>
                      <iframe
                        style={{ width: "100%", height: "400px" }}
                        src="https://www.youtube.com/embed/L4cth57-66k"
                        title="YouTube video player"
                        
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4">
                  <div className="border border-2 p-4 rounded-3">
                    <h4 className="fs-5">Description</h4>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                      </span>
                      <span>Admin</span>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                      </span>
                      <a href="www.google.com">www.google.com</a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                      </span>
                      <a href="www.google.com">www.google.com</a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon>
                      </span>
                      <a href="www.google.com">www.google.com</a>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <span className="me-2">
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                      </span>
                      <span>19.03.2019</span>
                    </div>
                    <div className="mb-3">
                      <p>
                        Fusce pellentesque felis turpis, blandit efficitur ante
                        sodales eu. Vivamus eu tempor lectus, ut faucibus lacus.
                        Nullam ut vehicula lorem, non scelerisque libero.
                      </p>
                    </div>
                    <div className="mb-3">
                      <h4 className="fs-5 mb-3">Technology</h4>
                      <ul
                        style={{
                          listStyleType: "none",
                          margin: "0",
                          padding: "0",
                          boxSizing: "border-box",
                        }}
                      >
                        <li style={{ display: "inline-block" }}>
                          <a
                            href="#"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              lineHeight: "1.5rem",
                              color: "#666",
                              padding: "2px 7px",
                              backgroundColor: "#fff",
                              borderRadius: "3px",
                              border: "2px solid #e5e5e5",
                              margin: "3px 2px 2px",
                              textDecoration: "none",
                            }}
                          >
                            CSS3
                          </a>
                        </li>
                        <li style={{ display: "inline-block" }}>
                          <a
                            href="#"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              lineHeight: "1.5rem",
                              color: "#666",
                              padding: "2px 7px",
                              backgroundColor: "#fff",
                              borderRadius: "3px",
                              border: "2px solid #e5e5e5",
                              margin: "3px 2px 2px",
                              textDecoration: "none",
                            }}
                          >
                            HTML5
                          </a>
                        </li>
                        <li style={{ display: "inline-block" }}>
                          <a
                            href="#"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              lineHeight: "1.5rem",
                              color: "#666",
                              padding: "2px 7px",
                              backgroundColor: "#fff",
                              borderRadius: "3px",
                              border: "2px solid #e5e5e5",
                              margin: "3px 2px 2px",
                              textDecoration: "none",
                            }}
                          >
                            JAVASCRIPT
                          </a>
                        </li>
                        <li style={{ display: "inline-block" }}>
                          <a
                            href="#"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              lineHeight: "1.5rem",
                              color: "#666",
                              padding: "2px 7px",
                              backgroundColor: "#fff",
                              borderRadius: "3px",
                              border: "2px solid #e5e5e5",
                              margin: "3px 2px 2px",
                              textDecoration: "none",
                            }}
                          >
                            JAVASCRIPT
                          </a>
                        </li>
                        <li style={{ display: "inline-block" }}>
                          <a
                            href="#"
                            style={{
                              display: "inline-block",
                              fontSize: "12px",
                              lineHeight: "1.5rem",
                              color: "#666",
                              padding: "2px 7px",
                              backgroundColor: "#fff",
                              borderRadius: "3px",
                              border: "2px solid #e5e5e5",
                              margin: "3px 2px 2px",
                              textDecoration: "none",
                            }}
                          >
                            JAVASCRIPT
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="fs-5">Share</h4>
                      <div>
                        <a href="#" className="mx-3">
                          <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                        <a href="#" className="mx-3">
                          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </a>
                        <a href="#" className="mx-3">
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                          ></FontAwesomeIcon>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offcanvas;
