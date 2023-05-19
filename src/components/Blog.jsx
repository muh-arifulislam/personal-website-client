import React from "react";
import blogImage from "../assets/images/blog_post_2_full-768x360.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
const Blog = () => {
  return (
    <div className="col-xs-12 col-sm-4 p-0 m-0">
      <div className="p-3">
        <div>
          <div className="position-relative overflow-hidden">
            <img className="img-fluid rounded" src={blogImage} alt="" />
            <div
              className="px-2 py-1 bg-white position-absolute rounded"
              style={{ fontSize: "12px", top: "10px", left: "10px" }}
            >
              <a href="#" className="text-decoration-none text-secondary">
                WordPress
              </a>
            </div>
            <div
              className="position-absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translateX(-50%) translateY(-50%)",
              }}
            >
              <FontAwesomeIcon
                size="2x"
                color="white"
                icon={faNewspaper}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div style={{ paddingTop: "10px", paddingBottom: "15px" }}>
            <p className="mb-0" style={{ fontSize: "12px" }}>
              04 Dec 2023
            </p>
            <h5 className="fs-6 fw-bolder">
              How to Make a WordPress Plugin Extensible
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
