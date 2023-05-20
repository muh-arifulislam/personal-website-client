import React, { useContext, useState, useRef } from "react";

import personImg from "../../assets/images/person.jpg";
import StateContext from "../../state/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faClock,
  faCoffee,
  faDesktop,
  faHeart,
  faMugHot,
  faMugSaucer,
  faPencil,
  faStar,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/person.jpg";
import Button from "../../components/Button";
import TestiCarousel from "./TestiCarousel";
const Home = () => {
  const [bgPositionX, bgPositionY] = useContext(StateContext);
  return (
    <section className="">
      {/* heading section  */}
      <div className="mx-lg-5 my-5">
        <div className="mx-lg-5 row align-items-center g-5">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="home-photo">
              <div
                className="hp-inner"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: `${bgPositionX / 3}px ${
                    bgPositionY / 3
                  }px`,
                }}
              ></div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <div>
              <h4
                style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "#aaa",
                }}
              >
                FullStack Engineer
              </h4>
              <h1 className="fw-bold" style={{ marginBottom: "20px" }}>
                Ariful Islam
              </h1>
              <p
                className=""
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.75em",
                }}
              >
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>
              <div className="d-flex flex-lg-row flex-column gap-2">
                <Button className="button-primary">Download CV</Button>
                <Button className="button-secondary">Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* What i do  */}
      <div className="mb-4">
        <h4 className="position-relative d-inline-block pb-2 block-title">
          What I Do
        </h4>
        <div className="mt-4">
          <div className="row g-3">
            <div className="col-lg-6 col-md-6 col-12 d-flex gap-4 align-items-top">
              <FontAwesomeIcon size="2x" icon={faPencil}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Web Development
                </h4>
                <p className="" style={{ fontSize: "0.92em", color: "#666" }}>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex gap-4 align-items-top">
              <FontAwesomeIcon size="2x" icon={faStore}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Ecommerce
                </h4>
                <p style={{ fontSize: "0.92em", color: "#666" }}>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex gap-4 align-items-top">
              <FontAwesomeIcon size="2x" icon={faDesktop}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Web Design
                </h4>
                <p style={{ fontSize: "0.92em", color: "#666" }}>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 d-flex gap-4 align-items-top">
              <FontAwesomeIcon size="2x" icon={faBullhorn}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Tutor
                </h4>
                <p style={{ fontSize: "0.92em", color: "#666" }}>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials  */}
      <div>
        <h4 className="position-relative d-inline-block pb-2 block-title">
          Testimonials
        </h4>
        <div className="mt-4">
          <TestiCarousel></TestiCarousel>
        </div>
      </div>
      {/* Fun Facts  */}
      <div className="mt-5">
        <h4 className="position-relative d-inline-block pb-2 block-title">
          Fun Facts
        </h4>
        <div className="mt-4 row g-4">
          <div className="col-xs-12 col-sm-3 ">
            <div
              className="py-4 text-center hover-shadow"
              style={{ border: "2px solid #e5e5e5", borderRadius: "10px" }}
            >
              <FontAwesomeIcon
                size="2x"
                icon={faHeart}
                style={{ color: "#007ced" }}
              ></FontAwesomeIcon>
              <p className="m-3 fw-bolder">Happy Clients</p>
              <p className="fs-1 mt-2 mb-1" style={{ color: "#d5d5d5" }}>
                04
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 ">
            <div
              className="py-4 text-center hover-shadow"
              style={{ border: "2px solid #e5e5e5", borderRadius: "10px" }}
            >
              <FontAwesomeIcon
                size="2x"
                icon={faClock}
                style={{ color: "#007ced" }}
              ></FontAwesomeIcon>
              <p className="m-3 fw-bolder">Working Hours</p>
              <p className="fs-1 mt-2 mb-1" style={{ color: "#d5d5d5" }}>
                4,570
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 ">
            <div
              className="py-4 text-center hover-shadow"
              style={{ border: "2px solid #e5e5e5", borderRadius: "10px" }}
            >
              <FontAwesomeIcon
                size="2x"
                icon={faStar}
                style={{ color: "#007ced" }}
              ></FontAwesomeIcon>
              <p className="m-3 fw-bolder">Award Winning</p>
              <p className="fs-1 mt-2 mb-1" style={{ color: "#d5d5d5" }}>
                01
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-3 ">
            <div
              className="py-4 text-center hover-shadow"
              style={{ border: "2px solid #e5e5e5", borderRadius: "10px" }}
            >
              <FontAwesomeIcon
                size="2x"
                icon={faMugHot}
                style={{ color: "#007ced" }}
              ></FontAwesomeIcon>
              <p className="m-3 fw-bolder">Tea Consumed</p>
              <p className="fs-1 mt-2 mb-1" style={{ color: "#d5d5d5" }}>
                1,364
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
