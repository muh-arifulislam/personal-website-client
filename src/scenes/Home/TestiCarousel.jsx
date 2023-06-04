import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./carousel.css";

// import required modules
import { Pagination, Autoplay } from "swiper";
import image from "../../assets/images/person.jpg";
import personImage from "../../assets/images/man.png";
const TestiCarousel = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 570px)" });
  return (
    <Swiper
      slidesPerView={isMobile ? "1" : "2"}
      pagination={{ clickable: true }}
      loop={true}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
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
                Our website's transformation was exceptional. The developer's
                attention to detail exceeded expectations.
              </p>
              <h5
                style={{
                  fontSize: "0.9em",
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "2px",
                }}
              >
                Arif Hawladar
              </h5>
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
                India
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
              src={personImage}
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
                Our website's transformation was exceptional. The developer's
                attention to detail exceeded expectations.
              </p>
              <h5
                style={{
                  fontSize: "0.9em",
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "2px",
                }}
              >
                Sheldon Cooper
              </h5>
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
                USA
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
              src={personImage}
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
                Working with the web developer was a seamless experience,
                delivering a professional and responsive website.
              </p>
              <h5
                style={{
                  fontSize: "0.9em",
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "2px",
                }}
              >
                Fahim Ahmed
              </h5>
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
                Bangladesh
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
              src={personImage}
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
            style={{
              backgroundColor: "#ddd",
              zIndex: "999!important",
            }}
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
                Working with the web developer was a seamless experience,
                delivering a professional and responsive website.
              </p>
              <h5
                style={{
                  fontSize: "0.9em",
                  fontWeight: "600",
                  color: "black",
                  marginBottom: "2px",
                }}
              >
                Sabbir Rahman
              </h5>
              <p className="m-0" style={{ fontSize: "0.8em", color: "#bbb" }}>
                Bangladesh
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
              src={personImage}
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
                zIndex: "9",
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
