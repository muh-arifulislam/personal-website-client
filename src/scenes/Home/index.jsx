import React, { useContext, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import personImg from "../../assets/images/person.jpg";
import StateContext from "../../state/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faCoffee,
  faDesktop,
  faHeart,
  faPencil,
  faQuoteLeft,
  faQuoteRight,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/person.jpg";
import Button from "../../components/Button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination } from "swiper";
const Home = () => {
  const [bgPositionX, bgPositionY] = useContext(StateContext);
  const isMobile = useMediaQuery({ query: "(max-width: 570px)" });

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
        <div>
          <Swiper
            slidesPerView={isMobile ? "1" : "2"}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <div className="z-1" style={{ padding: "30px" }}>
                <div
                  className="d-flex align-items-center gap-3 border border-2 rounded rounded-4 px-3 pb-3 pt-4 position-relative"
                  style={{ backgroundColor: "transparent", zIndex: "1" }}
                >
                  <FontAwesomeIcon
                    style={{ color: "#e5e5e5", fontSize: "24px" }}
                    icon={faQuoteLeft}
                  ></FontAwesomeIcon>
                  <div className="text-start">
                    <p
                      style={{
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "1.75em",
                      }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus atque quia vero minus plus your last change
                    </p>
                    <h5
                      style={{
                        fontSize: "0.9em",
                        fontWeight: "600",
                        color: "black",
                        marginBottom: "2px",
                      }}
                    >
                      Ariful Islam
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontSize: "0.8em", color: "#bbb" }}
                    >
                      bangladesh
                    </p>
                  </div>
                  <img
                    className="position-absolute rounded-circle "
                    style={{
                      width: "80px",
                      height: "80px",
                      left: "-30px",
                      top: "-30px",
                    }}
                    src={image}
                    alt=""
                  />
                  <div
                    style={{
                      display: "block",
                      lineHeight: "44px",
                      fontSize: "44px",
                      position: "absolute",
                      right: "-24px",
                      bottom: "-24px",
                      color: "#f5f5f5",
                      zIndex: "-1",
                    }}
                  >
                    <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="z-1" style={{ padding: "30px" }}>
                <div
                  className="d-flex align-items-center gap-3 border border-2 rounded rounded-4 px-3 pb-3 pt-4 position-relative"
                  style={{ backgroundColor: "transparent", zIndex: "1" }}
                >
                  <FontAwesomeIcon
                    style={{ color: "#e5e5e5", fontSize: "24px" }}
                    icon={faQuoteLeft}
                  ></FontAwesomeIcon>
                  <div className="text-start">
                    <p
                      style={{
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "1.75em",
                      }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus atque quia vero minus plus your last change
                    </p>
                    <h5
                      style={{
                        fontSize: "0.9em",
                        fontWeight: "600",
                        color: "black",
                        marginBottom: "2px",
                      }}
                    >
                      Ariful Islam
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontSize: "0.8em", color: "#bbb" }}
                    >
                      bangladesh
                    </p>
                  </div>
                  <img
                    className="position-absolute rounded-circle "
                    style={{
                      width: "80px",
                      height: "80px",
                      left: "-30px",
                      top: "-30px",
                    }}
                    src={image}
                    alt=""
                  />
                  <div
                    style={{
                      display: "block",
                      lineHeight: "44px",
                      fontSize: "44px",
                      position: "absolute",
                      right: "-24px",
                      bottom: "-24px",
                      color: "#f5f5f5",
                      zIndex: "-1",
                    }}
                  >
                    <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="z-1" style={{ padding: "30px" }}>
                <div
                  className="d-flex align-items-center gap-3 border border-2 rounded rounded-4 px-3 pb-3 pt-4 position-relative"
                  style={{ backgroundColor: "transparent", zIndex: "1" }}
                >
                  <FontAwesomeIcon
                    style={{ color: "#e5e5e5", fontSize: "24px" }}
                    icon={faQuoteLeft}
                  ></FontAwesomeIcon>
                  <div className="text-start">
                    <p
                      style={{
                        fontStyle: "italic",
                        fontSize: "14px",
                        lineHeight: "1.75em",
                      }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Natus atque quia vero minus plus your last change
                    </p>
                    <h5
                      style={{
                        fontSize: "0.9em",
                        fontWeight: "600",
                        color: "black",
                        marginBottom: "2px",
                      }}
                    >
                      Ariful Islam
                    </h5>
                    <p
                      className="m-0"
                      style={{ fontSize: "0.8em", color: "#bbb" }}
                    >
                      bangladesh
                    </p>
                  </div>
                  <img
                    className="position-absolute rounded-circle "
                    style={{
                      width: "80px",
                      height: "80px",
                      left: "-30px",
                      top: "-30px",
                    }}
                    src={image}
                    alt=""
                  />
                  <div
                    style={{
                      display: "block",
                      lineHeight: "44px",
                      fontSize: "44px",
                      position: "absolute",
                      right: "-24px",
                      bottom: "-24px",
                      color: "#f5f5f5",
                      zIndex: "-1",
                    }}
                  >
                    <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <h4 className="position-relative d-inline-block pb-2 block-title">
          Fun Facts
        </h4>
        <div className="row">
          <div className="col-xs-12 col-sm-3 ">
            <div className="border border-2 rounded rounded-4 py-4 text-center hover-shadow">
              <FontAwesomeIcon size="2x" icon={faHeart}></FontAwesomeIcon>
              <p>Happy Clients</p>
              <p className="fs-2">5021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
