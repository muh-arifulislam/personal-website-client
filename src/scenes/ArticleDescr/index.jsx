import React from "react";
import image from "../../assets/images/blog_post_2_full-768x360.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faComment, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SectionTitle from "../../components/SectionTitle";
const index = () => {
  return (
    <section>
      <div>
        <div className="px-5 mt-3">
          <p className="mb-3">
            <a href="#">WordPress</a>
          </p>
          <h4 className="fs-2 fw-bolder">How to make a website in four step</h4>
        </div>
        <div className="my-5" style={{ margin: "auto -70px" }}>
          <img src={image} className="w-100" alt="" />
        </div>
        <div>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
        </div>
        <div>
          <img src={image} className="w-100 my-3" alt="" />
        </div>
        <div>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
        </div>
        <blockquote
          className="mx-lg-5 fst-italic my-4 mx-4 p-3 position-relative"
          style={{ fontSize: "14px" }}
        >
          <p style={{ color: "#666" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            nobis et deleniti libero id iste aliquid pariatur minima culpa iusto
            cupiditate qui quo veritatis est vero commodi quasi obcaecati!
            Aliquid?
          </p>
          <footer style={{ color: "#9e9e9e" }}>Edgar D. Wang</footer>
          <div
            className="position-absolute top-0 h-100"
            style={{ width: "2px", left: "-10px", backgroundColor: "#9e9e9e" }}
          ></div>
        </blockquote>
        <div>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
          <p style={{ fontSize: "14px", lineHeight: "30px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur harum qui pariatur sit voluptates unde fuga possimus
            aspernatur, atque incidunt placeat. Quasi facere tempora ut cum
            dolorum vitae enim nam excepturi. Aut ipsum a dignissimos nesciunt
            amet sint adipisci delectus aperiam? Sunt repudiandae eum voluptates
            architecto aliquam maxime, voluptas illo.
          </p>
        </div>
      </div>
      <div className="border border-2 rounded py-2 px-3 d-flex flex-lg-row flex-column justify-content-between align-items-lg-start align-items-center">
        <div className="d-flex align-items-center" style={{ fontSize: "14px" }}>
          <span className="vertical-line-after">
            <a href="#" className="text-decoration-none">
              <FontAwesomeIcon
                className="me-2"
                icon={faClock}
              ></FontAwesomeIcon>
              <time>December 04, 2019</time>
            </a>
          </span>
          <span className="d-flex align-items-center">
            <FontAwesomeIcon size="sm" icon={faUser}></FontAwesomeIcon>
            <span className="ms-2">Admin</span>
          </span>
        </div>
        <div>
          <FontAwesomeIcon
            className=""
            size="sm"
            icon={faFacebookF}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="ms-4"
            size="sm"
            icon={faTwitter}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="ms-4"
            size="sm"
            icon={faLinkedinIn}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="ms-4"
            size="sm"
            icon={faGithub}
          ></FontAwesomeIcon>
        </div>
      </div>
      {/* author  */}
      <div className="my-4">
        <button
          className="bg-transparent rounded me-1"
          style={{
            padding: "2px 8px",
            fontSize: "12px",
            border: "2px solid #e5e5e5",
          }}
        >
          desgin
        </button>
        <button
          className="bg-transparent rounded mt-2 me-1"
          style={{
            padding: "2px 8px",
            fontSize: "12px",
            border: "2px solid #e5e5e5",
          }}
        >
          programming
        </button>
        <button
          className="bg-transparent rounded mt-2 me-1"
          style={{
            padding: "2px 8px",
            fontSize: "12px",
            border: "2px solid #e5e5e5",
          }}
        >
          technology
        </button>
        <button
          className="bg-transparent rounded mt-2 me-1"
          style={{
            padding: "2px 8px",
            fontSize: "12px",
            border: "2px solid #e5e5e5",
          }}
        >
          facts
        </button>
      </div>
      {/* category  */}
      <div className="my-5">
        <a
          href="#"
          className="text-decoration-none"
          style={{ fontSize: "14px", color: "#aaa" }}
        >
          6 Easy Steps to Better Icon Design
        </a>
      </div>
      {/* comments  */}
      <div className="">
        <SectionTitle>Leave a comment</SectionTitle>
        <div>
          <form className="">
            <div class="mb-3 position-relative">
              <textarea
                style={{ height: "200px", fontSize: "14px" }}
                type="email"
                class="form-control border border-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Comment"
              />
              <span
                className="position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                <FontAwesomeIcon
                  icon={faComment}
                  style={{ color: "#d3d3d3" }}
                ></FontAwesomeIcon>
              </span>
            </div>
            <div class="mb-3 position-relative">
              <input
                type="email"
                class="form-control border border-2"
                style={{ fontSize: "14px" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Name"
              />
              <span className="position-absolute top-0 right-0 w-100 h-100 d-flex justify-content-end align-items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  className="me-2"
                  style={{ color: "#d3d3d3" }}
                ></FontAwesomeIcon>
              </span>
            </div>
            <div class="mb-3 position-relative">
              <input
                type="email"
                class="form-control border border-2"
                style={{ fontSize: "14px" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Email"
              />
              <span className="position-absolute top-0 right-0 w-100 h-100 d-flex justify-content-end align-items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-2"
                  style={{ color: "#d3d3d3" }}
                ></FontAwesomeIcon>
              </span>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default index;
