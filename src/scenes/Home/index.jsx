import React, { useContext, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import personImg from "../../assets/images/person.jpg";
import StateContext from "../../state/StateContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faBullhorn,
  faChalkboardUser,
  faClock,
  faDesktop,
  faHeart,
  faMugHot,
  faPencil,
  faPerson,
  faPersonChalkboard,
  faStar,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/images/person.jpg";
import Button from "../../components/Button";
import TestiCarousel from "./TestiCarousel";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./carouselHome.css";
import "./carousel.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import ProjectItem from "../../components/ProjectItem";
import { Link, useNavigate } from "react-router-dom";
import Offcanvas from "../../components/Offcanvas";
import { faFigma, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    { title: "fullstack website" },
    { title: "frontend website" },
    { title: "backend website" },
    { title: "tackend website" },
  ]);
  const [project, setProject] = useState({});
  const [bgPositionX, bgPositionY] = useContext(StateContext);
  const isMobile = useMediaQuery({ query: "(max-width: 570px)" });
  return (
    <section className="">
      {/* heading section  */}
      <div className="mx-lg-5 my-5">
        <div className="mx-lg-5 row align-items-center g-5">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="home-photo border-wave">
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
                Hey, I'm Ariful Islam! I'm a Fullstack Engineer working in
                Remote. Welcome to my spot on the web for my projects,
                tutorials, articles and anything else I want to show the world.
              </p>
              <div className="d-flex flex-lg-row flex-column gap-2">
                <Button
                  href="https://drive.google.com/file/d/1WhdREkXWTWSHGR8TXjvGr9IhhtWZIAQb/view?usp=share_link"
                  className="button-primary"
                >
                  Download CV
                </Button>
                <Link to="/contact" className="button-primary button-secondary">
                  Contact
                </Link>
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
              <FontAwesomeIcon size="2x" icon={faReact}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Fullstack Development
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
              <FontAwesomeIcon size="2x" icon={faWordpress}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  CMS
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
              <FontAwesomeIcon size="2x" icon={faFigma}></FontAwesomeIcon>
              <div>
                <h4
                  className="lh-1 fs-6"
                  style={{ fontWeight: "600", color: "#333" }}
                >
                  Frontend Design
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
              <FontAwesomeIcon size="xl" icon={faChalkboardUser}></FontAwesomeIcon>
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
      {/* projects showcase  */}
      <div className="">
        <div className="mb-5 d-flex justify-content-between">
          <h4 className="position-relative d-inline-block pb-2 block-title">
            Projects
          </h4>
          <Link
            to="/portfolio"
            className="px-3 rounded rounded-3 d-flex align-items-center text-decoration-none text-white"
            style={{ backgroundColor: "#007ced" }}
          >
            <span className="me-2">More</span>
            <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
          </Link>
        </div>
        <Swiper
          slidesPerView={isMobile ? "1" : "2"}
          spaceBetween={20}
          loop={true}
          navigation={!isMobile}
          pagination={isMobile}
          modules={isMobile ? [Pagination] : [Navigation]}
          className="mySwiper"
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx}>
              <ProjectItem
                id="offcanvasHome"
                data={project}
                setProject={setProject}
                
              ></ProjectItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Testimonials  */}
      <div className="mt-5">
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
      {/* Offcanvas  */}
      <Offcanvas project={project} id="offcanvasHome"></Offcanvas>
    </section>
  );
};

export default Home;
