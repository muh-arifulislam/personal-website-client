import React, { useState } from "react";
import image from "../assets/images/portfolioItem.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faGlobe,
  faReceipt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const ProjectItem = ({ data, setProject }) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="col-xs-12 col-sm-6 ">
      <div className="p-2">
        <div
          onClick={() => setProject(data)}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className="position-relative overflow-hidden"
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          <img
            className="img-fluid rounded-3"
            style={{
              transition: "all 0.3s ease-out",
              transform: `scale(${hover ? "1.2" : "1"})`,
            }}
            src={image}
            alt=""
          />
          <div
            className="px-2 rounded-3 bg-white position-absolute"
            style={{ top: "20px", left: "20px" }}
          >
            <span className="fw-semibold">{data.title}</span>
          </div>
          <div
            className="position-absolute"
            style={{ bottom: "20px", width: "100%" }}
          >
            <div
              className="w-100 d-flex justify-content-between align-items-end"
              style={{
                padding: "0 20px",
                transition: "all 0.3s ease-out",
                opacity: `${hover ? "1" : "0"}`,
              }}
            >
              <span
                className="px-2 bg-white rounded rounded-3"
                style={{ fontSize: "14px" }}
              >
                Detailed
              </span>
              <span className="bg-white px-2 py-1 rounded rounded-3">
                <FontAwesomeIcon
                  style={{ color: "#7066ff" }}
                  size="lg"
                  icon={faReceipt}
                ></FontAwesomeIcon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
