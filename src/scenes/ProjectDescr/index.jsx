import React, { useEffect, useState } from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
const ProjectDescr = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("../projects.json")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.find((item) => item.id === id);
        setProject(filterData);
      });
  }, []);
  return (
    <div>
      <div className="bg-white pt-4 pb-3">
        <div className="">
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
                <h4 className="fs-5 fw-bolder mb-3">Description</h4>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faUser}
                      style={{ fontSize: "14px", color: "blue" }}
                    ></FontAwesomeIcon>
                  </span>
                  <span style={{ fontSize: "14px" }}>Admin</span>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ fontSize: "14px", color: "blue" }}
                    ></FontAwesomeIcon>
                  </span>
                  <a
                    href={project?.liveSite}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    {project?.liveSite}
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ fontSize: "14px", color: "blue" }}
                    ></FontAwesomeIcon>
                  </span>
                  <a
                    href={project?.gitClient}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    {project?.gitClient}
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      style={{ fontSize: "14px", color: "blue" }}
                    ></FontAwesomeIcon>
                  </span>
                  <a
                    href={project?.gitServer}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    {project?.gitServer}
                  </a>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      style={{ fontSize: "14px", color: "blue" }}
                    ></FontAwesomeIcon>
                  </span>
                  <span style={{ fontSize: "14px" }}>{project?.date}</span>
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
                    {project?.usesTech?.map((tech, idx) => (
                      <li key={idx} style={{ display: "inline-block" }}>
                        <a
                          href={`https://www.google.com/search?q=${tech}`}
                          target="_blank"
                          rel="noreferrer"
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
                          {tech}
                        </a>
                      </li>
                    ))}
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
                      <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
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

export default ProjectDescr;
