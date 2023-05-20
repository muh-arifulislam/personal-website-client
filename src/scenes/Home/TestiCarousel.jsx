import React from "react";
import { useMediaQuery } from "react-responsive";
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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import image from "../../assets/images/person.jpg";
const TestiCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 570px)" });
  return (
    <Swiper
      slidesPerView={isMobile ? "1" : "2"}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                atque quia vero minus plus your last change
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
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                atque quia vero minus plus your last change
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
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                atque quia vero minus plus your last change
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
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
                atque quia vero minus plus your last change
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
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
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
  );
};

export default TestiCarousel;
